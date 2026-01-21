import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { BackButton } from "@/components/BackButton";
import { MinecraftAvatar } from "@/components/MinecraftAvatar";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Sword, Target, Flame, Medal, Crown, Award } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PlayerStats {
  id: string;
  minecraft_username: string;
  kills: number;
  deaths: number;
  wins: number;
  losses: number;
  total_duels: number;
  win_streak: number;
  best_win_streak: number;
}

const Leaderboard = () => {
  const [players, setPlayers] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"wins" | "kills" | "kd" | "winrate">("wins");

  useEffect(() => {
    fetchPlayers();

    // Real-time subscription
    const channel = supabase
      .channel("leaderboard_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "player_stats",
        },
        () => {
          fetchPlayers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchPlayers = async () => {
    const { data, error } = await supabase
      .from("player_stats")
      .select("*")
      .order("wins", { ascending: false });

    if (!error && data) {
      setPlayers(data);
    }
    setLoading(false);
  };

  const calculateKD = (kills: number, deaths: number) => {
    if (deaths === 0) return kills.toFixed(2);
    return (kills / deaths).toFixed(2);
  };

  const calculateWinRate = (wins: number, totalDuels: number) => {
    if (totalDuels === 0) return "0";
    return ((wins / totalDuels) * 100).toFixed(1);
  };

  const sortedPlayers = [...players].sort((a, b) => {
    switch (sortBy) {
      case "wins":
        return b.wins - a.wins;
      case "kills":
        return b.kills - a.kills;
      case "kd":
        const kdA = a.deaths === 0 ? a.kills : a.kills / a.deaths;
        const kdB = b.deaths === 0 ? b.kills : b.kills / b.deaths;
        return kdB - kdA;
      case "winrate":
        const wrA = a.total_duels === 0 ? 0 : a.wins / a.total_duels;
        const wrB = b.total_duels === 0 ? 0 : b.wins / b.total_duels;
        return wrB - wrA;
      default:
        return 0;
    }
  });

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 1:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-muted-foreground font-medium">{index + 1}</span>;
    }
  };

  const sortButtons = [
    { key: "wins" as const, label: "Galibiyet", icon: Trophy },
    { key: "kills" as const, label: "Öldürme", icon: Sword },
    { key: "kd" as const, label: "K/D", icon: Target },
    { key: "winrate" as const, label: "Kazanma %", icon: Flame },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <BackButton />

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <Trophy className="inline-block w-8 h-8 mr-2 text-yellow-500" />
              Liderlik Tablosu
            </h1>
            <p className="text-muted-foreground">
              En iyi oyuncuları keşfet
            </p>
          </div>

          {/* Sort Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {sortButtons.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  sortBy === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Leaderboard Table */}
          <div className="glass-card rounded-xl border border-border/30 overflow-hidden">
            {loading ? (
              <div className="p-8 text-center text-muted-foreground">
                Yükleniyor...
              </div>
            ) : players.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                Henüz oyuncu verisi yok
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-border/30 hover:bg-transparent">
                    <TableHead className="w-16 text-center">#</TableHead>
                    <TableHead>Oyuncu</TableHead>
                    <TableHead className="text-center">Galibiyet</TableHead>
                    <TableHead className="text-center">Mağlubiyet</TableHead>
                    <TableHead className="text-center">Öldürme</TableHead>
                    <TableHead className="text-center">Ölüm</TableHead>
                    <TableHead className="text-center">K/D</TableHead>
                    <TableHead className="text-center">Kazanma %</TableHead>
                    <TableHead className="text-center">En İyi Seri</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedPlayers.map((player, index) => (
                    <TableRow
                      key={player.id}
                      className={`border-border/20 ${
                        index < 3 ? "bg-secondary/20" : ""
                      }`}
                    >
                      <TableCell className="text-center">
                        <div className="flex justify-center">
                          {getRankIcon(index)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <MinecraftAvatar
                            username={player.minecraft_username}
                            size="sm"
                          />
                          <span className="font-medium">
                            {player.minecraft_username}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center text-green-500 font-medium">
                        {player.wins}
                      </TableCell>
                      <TableCell className="text-center text-red-500 font-medium">
                        {player.losses}
                      </TableCell>
                      <TableCell className="text-center font-medium">
                        {player.kills}
                      </TableCell>
                      <TableCell className="text-center text-muted-foreground">
                        {player.deaths}
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`font-medium ${
                            parseFloat(calculateKD(player.kills, player.deaths)) >= 1
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {calculateKD(player.kills, player.deaths)}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-medium">
                          {calculateWinRate(player.wins, player.total_duels)}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">{player.best_win_streak}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
