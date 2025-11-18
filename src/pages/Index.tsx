import { StarField } from "@/components/StarField";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sword, Axe, Shield, Crosshair, Users, Terminal, Globe, TrendingUp, Swords, Trophy, Crown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <StarField />
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-lg">
            Türkiye'nin En İyi PVP Sunucusu
          </Badge>
          
          <h1 className="text-7xl md:text-8xl font-black tracking-tight">
            <span className="text-primary drop-shadow-[0_0_30px_rgba(135,206,235,0.5)]">
              SMP
            </span>
            <span className="text-foreground">PRACTICE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Türkiye'de olmayan özelliklerle dolu, profesyonel duel sistemi ve eşsiz arenalarla PVP deneyimini zirveye taşıyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <div className="bg-card border-2 border-primary/30 rounded-xl px-8 py-4 shadow-glow-cyan">
              <p className="text-sm text-muted-foreground mb-1">Sunucu IP</p>
              <p 
                className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors"
                onClick={() => copyToClipboard("smppractice.net")}
              >
                smppractice.net
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl px-6 py-4">
              <p className="text-sm text-muted-foreground mb-1">Sürüm</p>
              <p className="text-xl font-semibold">1.17 - 1.21.7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary">Benzersiz</span> Özellikler
            </h2>
            <p className="text-xl text-muted-foreground">
              Türkiye'de görmediğiniz sistemlerle donatılmış profesyonel bir PVP deneyimi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan group">
              <CardHeader>
                <Crosshair className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                <CardTitle className="text-2xl">Queue Sistemi</CardTitle>
                <CardDescription className="text-base">
                  /queue komutuyla anında eşleşme bulun ve savaşa atılın
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan group">
              <CardHeader>
                <Sword className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                <CardTitle className="text-2xl">Duel Modu</CardTitle>
                <CardDescription className="text-base">
                  /duel komutuyla istediğiniz oyuncuya meydan okuyun
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan group">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
                <CardTitle className="text-2xl">Özel Arenalar</CardTitle>
                <CardDescription className="text-base">
                  Çöl, Kuzey Kutbu ve daha fazla benzersiz arenada savaşın
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Kits Section */}
      <section id="kits" className="relative py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Savaş <span className="text-primary">Kitleri</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Her oyun tarzına uygun profesyonel kitlerle mücadele edin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 hover:shadow-glow-cyan transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Axe className="w-10 h-10 text-primary" />
                  <CardTitle className="text-3xl">Axe Kit</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Güçlü balta saldırıları ve uzun menzilli savaş için ideal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Elmas Balta</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Elmas Kılıç</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">5 Ok + Arbalet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Full Elmas Zırh</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Kalkan</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/30 hover:shadow-glow-cyan transition-all">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Sword className="w-10 h-10 text-primary" />
                  <CardTitle className="text-3xl">Sword Kit</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Klasik kılıç ustası combo'ları için mükemmel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Elmas Kılıç</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Full Elmas Zırh</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Saf PVP Deneyimi</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
            <h2 className="text-5xl font-bold mb-4">
              Canlı <span className="text-primary">İstatistikler</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Sunucumuzun anlık verileri ve en iyi oyuncular
            </p>
          </div>

          {/* Live Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-card border-primary/30 hover:shadow-glow-cyan transition-all">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-primary mb-2 animate-glow-pulse">1,247</h3>
                <p className="text-xl text-muted-foreground">Toplam Oyuncu</p>
                <p className="text-sm text-foreground/60 mt-2">Kayıtlı üye sayısı</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/30 hover:shadow-glow-cyan transition-all">
              <CardContent className="p-8 text-center">
                <Swords className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-primary mb-2 animate-glow-pulse">34</h3>
                <p className="text-xl text-muted-foreground">Aktif Düellolar</p>
                <p className="text-sm text-foreground/60 mt-2">Şu anda devam eden savaşlar</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/30 hover:shadow-glow-cyan transition-all">
              <CardContent className="p-8 text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-primary mb-2 animate-glow-pulse">892</h3>
                <p className="text-xl text-muted-foreground">Günlük Kazananlar</p>
                <p className="text-sm text-foreground/60 mt-2">Bugün kazanan oyuncu sayısı</p>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30">
              <CardHeader className="text-center pb-8">
                <Crown className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-4xl font-bold">
                  <span className="text-primary">Lider</span> Tablosu
                </CardTitle>
                <CardDescription className="text-lg">
                  En iyi PVP savaşçıları
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Top 1 */}
                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 flex items-center justify-between hover:shadow-glow-cyan transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">1</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-primary">xPro_Gamer47</h4>
                      <p className="text-muted-foreground">Master Savaşçı</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">2,847</p>
                    <p className="text-sm text-muted-foreground">Kazanma</p>
                  </div>
                </div>

                {/* Top 2 */}
                <div className="bg-secondary/50 border border-border rounded-xl p-6 flex items-center justify-between hover:bg-secondary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-gray/20 border-2 border-neutral-gray flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Shadow_Warrior</h4>
                      <p className="text-muted-foreground">Elite Oyuncu</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">2,156</p>
                    <p className="text-sm text-muted-foreground">Kazanma</p>
                  </div>
                </div>

                {/* Top 3 */}
                <div className="bg-secondary/50 border border-border rounded-xl p-6 flex items-center justify-between hover:bg-secondary transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-900/30 border-2 border-amber-700 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">KralKiller</h4>
                      <p className="text-muted-foreground">Pro Oyuncu</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">1,924</p>
                    <p className="text-sm text-muted-foreground">Kazanma</p>
                  </div>
                </div>

                {/* Top 4-5 */}
                <div className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-center justify-between hover:bg-card transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold text-muted-foreground w-8">4</span>
                    <h4 className="text-lg font-semibold">TurboFighter</h4>
                  </div>
                  <p className="text-lg font-bold text-foreground">1,678</p>
                </div>

                <div className="bg-card/50 border border-border/50 rounded-xl p-4 flex items-center justify-between hover:bg-card transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold text-muted-foreground w-8">5</span>
                    <h4 className="text-lg font-semibold">Lightning_PvP</h4>
                  </div>
                  <p className="text-lg font-bold text-foreground">1,543</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="relative py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Terminal className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary">Komutlar</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Basit ve etkili komutlarla oyunu yönetin
            </p>
          </div>

          <div className="space-y-4">
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <code className="text-2xl font-mono text-primary">/queue</code>
                    <p className="text-muted-foreground mt-2">Otomatik eşleşme kuyruğuna katıl</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <code className="text-2xl font-mono text-primary">/duel [oyuncu]</code>
                    <p className="text-muted-foreground mt-2">Belirli bir oyuncuya düello isteği gönder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary">Yetkili</span> Ekibimiz
            </h2>
            <p className="text-xl text-muted-foreground">
              Profesyonel ve deneyimli ekibimiz her zaman yanınızda
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-center">
                <Shield className="inline w-8 h-8 mr-2 text-admin-red" />
                <span className="text-admin-red">Adminler</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card className="bg-gradient-card border-admin-red/30 hover:border-admin-red/60 transition-all hover:shadow-[0_0_30px_rgba(139,0,0,0.3)]">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-admin-red/20 border-2 border-admin-red mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-admin-red" />
                    </div>
                    <h4 className="text-2xl font-bold text-admin-red mb-2">Curseebabuss</h4>
                    <Badge className="bg-admin-red/20 text-admin-red border-admin-red/30">Admin</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-admin-red/30 hover:border-admin-red/60 transition-all hover:shadow-[0_0_30px_rgba(139,0,0,0.3)]">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-admin-red/20 border-2 border-admin-red mx-auto mb-4 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-admin-red" />
                    </div>
                    <h4 className="text-2xl font-bold text-admin-red mb-2">dalha3567</h4>
                    <Badge className="bg-admin-red/20 text-admin-red border-admin-red/30">Admin</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-center">
                <Users className="inline w-8 h-8 mr-2 text-moderator-cyan" />
                <span className="text-moderator-cyan">Moderatörler</span>
              </h3>
              <div className="max-w-md mx-auto">
                <Card className="bg-gradient-card border-moderator-cyan/30 hover:border-moderator-cyan/60 transition-all hover:shadow-glow-cyan">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-moderator-cyan/20 border-2 border-moderator-cyan mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-moderator-cyan" />
                    </div>
                    <h4 className="text-2xl font-bold text-moderator-cyan mb-2">tolga</h4>
                    <Badge className="bg-moderator-cyan/20 text-moderator-cyan border-moderator-cyan/30">Moderatör</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-4xl font-bold">
              <span className="text-primary">SMP</span>PRACTICE
            </h3>
            <p className="text-muted-foreground mt-2">Türkiye'nin En İyi PVP Sunucusu</p>
          </div>
          
          <div className="flex justify-center items-center gap-8 mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Sunucu IP</p>
              <p className="text-lg font-semibold text-primary">smppractice.net</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Sürüm</p>
              <p className="text-lg font-semibold">1.17 - 1.21.7</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 smppractice. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
