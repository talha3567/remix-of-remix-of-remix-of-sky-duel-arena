-- Create player_stats table for Minecraft server integration
CREATE TABLE public.player_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  minecraft_username TEXT NOT NULL UNIQUE,
  email TEXT UNIQUE,
  kills INTEGER NOT NULL DEFAULT 0,
  deaths INTEGER NOT NULL DEFAULT 0,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  total_duels INTEGER NOT NULL DEFAULT 0,
  win_streak INTEGER NOT NULL DEFAULT 0,
  best_win_streak INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.player_stats ENABLE ROW LEVEL SECURITY;

-- Create policy: Everyone can view stats (public leaderboard)
CREATE POLICY "Player stats are viewable by everyone"
ON public.player_stats
FOR SELECT
USING (true);

-- Create policy: Only authenticated users can insert (for server integration)
CREATE POLICY "Authenticated users can insert stats"
ON public.player_stats
FOR INSERT
WITH CHECK (auth.uid() IS NOT NULL);

-- Create policy: Only authenticated users can update (for server integration)
CREATE POLICY "Authenticated users can update stats"
ON public.player_stats
FOR UPDATE
USING (auth.uid() IS NOT NULL);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_player_stats_updated_at
BEFORE UPDATE ON public.player_stats
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for player_stats table
ALTER PUBLICATION supabase_realtime ADD TABLE public.player_stats;