-- ============================================
-- SECURITY FIX: Player Stats & Duels Protection
-- ============================================

-- 1. Drop overly permissive INSERT/UPDATE policies on player_stats
DROP POLICY IF EXISTS "Authenticated users can insert stats" ON player_stats;
DROP POLICY IF EXISTS "Authenticated users can update stats" ON player_stats;

-- 2. Create service-role only policies for player_stats
-- Only the Minecraft server (via edge function with service role) should modify stats
CREATE POLICY "Only service role can insert stats"
ON player_stats FOR INSERT
WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

CREATE POLICY "Only service role can update stats"
ON player_stats FOR UPDATE
USING (auth.jwt() ->> 'role' = 'service_role');

-- 3. Drop overly permissive INSERT policy on duels
DROP POLICY IF EXISTS "Authenticated users can insert duels" ON duels;

-- 4. Create service-role only INSERT policy for duels
-- Only the Minecraft server (via edge function with service role) should create duels
CREATE POLICY "Only service role can insert duels"
ON duels FOR INSERT
WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- 5. Update handle_new_user function with proper validation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  clean_username TEXT;
BEGIN
  -- Extract and trim username
  clean_username := TRIM(COALESCE(new.raw_user_meta_data ->> 'username', ''));
  
  -- Validate length (3-20 characters)
  IF LENGTH(clean_username) < 3 OR LENGTH(clean_username) > 20 THEN
    RAISE EXCEPTION 'Username must be between 3 and 20 characters';
  END IF;
  
  -- Validate characters (alphanumeric, underscore, hyphen only)
  IF clean_username !~ '^[a-zA-Z0-9_-]+$' THEN
    RAISE EXCEPTION 'Username can only contain letters, numbers, underscores and hyphens';
  END IF;
  
  INSERT INTO public.profiles (user_id, username)
  VALUES (new.id, clean_username);
  
  RETURN new;
END;
$$;