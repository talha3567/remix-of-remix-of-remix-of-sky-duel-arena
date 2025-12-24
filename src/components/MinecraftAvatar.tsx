import { useState } from "react";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MinecraftAvatarProps {
  username: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showFallback?: boolean;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-24 h-24",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-12 h-12",
};

export const MinecraftAvatar = ({ 
  username, 
  size = "md", 
  className = "",
  showFallback = true 
}: MinecraftAvatarProps) => {
  const [imageError, setImageError] = useState(false);

  // Use Crafatar API for Minecraft avatars
  const getAvatarUrl = (name: string) => {
    // Crafatar provides Minecraft player avatars by username
    return `https://mc-heads.net/avatar/${name}/128`;
  };

  const getHeadUrl = (name: string) => {
    // 3D head render
    return `https://mc-heads.net/head/${name}/128`;
  };

  if (!username || imageError) {
    if (!showFallback) return null;
    
    return (
      <Avatar className={`${sizeClasses[size]} border-2 border-primary/30 ${className}`}>
        <AvatarFallback className="bg-primary/20 text-primary">
          <User className={iconSizes[size]} />
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    <Avatar className={`${sizeClasses[size]} border-2 border-primary/30 ${className}`}>
      <AvatarImage 
        src={getAvatarUrl(username)} 
        alt={`${username}'s Minecraft avatar`}
        onError={() => setImageError(true)}
      />
      <AvatarFallback className="bg-primary/20 text-primary">
        {username.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export const MinecraftHead = ({ 
  username, 
  size = "md", 
  className = "" 
}: MinecraftAvatarProps) => {
  const [imageError, setImageError] = useState(false);

  const getHeadUrl = (name: string) => {
    return `https://mc-heads.net/head/${name}/128`;
  };

  if (!username || imageError) {
    return (
      <div className={`${sizeClasses[size]} bg-primary/20 rounded-lg flex items-center justify-center ${className}`}>
        <User className={`${iconSizes[size]} text-primary`} />
      </div>
    );
  }

  return (
    <img 
      src={getHeadUrl(username)} 
      alt={`${username}'s Minecraft head`}
      className={`${sizeClasses[size]} ${className}`}
      onError={() => setImageError(true)}
    />
  );
};
