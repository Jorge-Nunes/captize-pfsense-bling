import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Wifi, Shield, Star, CheckCircle } from "lucide-react";
import captivePortalBg from "@/assets/captive-portal-bg.jpg";

export const CaptivePortal = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      toast({
        title: "Termos Obrigatórios",
        description: "Você deve aceitar os termos de uso para continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsConnecting(true);
    
    // Simulate authentication process
    setTimeout(() => {
      toast({
        title: "Conectado com Sucesso",
        description: "Bem-vindo à rede WiFi Six Sport Life",
      });
      setIsConnecting(false);
      // In a real captive portal, this would redirect to the internet
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${captivePortalBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Premium Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold) / 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto p-6">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-foreground tracking-wider mb-2">
              SIX
            </h1>
            <div className="w-16 h-0.5 bg-gradient-gold mx-auto mb-4" />
            <p className="text-gold text-lg font-medium tracking-wide">
              SPORT LIFE
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-foreground/80 mb-2">
            <Wifi className="w-5 h-5 text-gold" />
            <span className="text-sm">WiFi Premium</span>
          </div>
          
          <h2 className="text-2xl font-light text-foreground mb-2">
            Onde a <span className="text-gold font-semibold">exclusividade</span>
          </h2>
          <h3 className="text-2xl font-light text-foreground">
            encontra a <span className="text-gold font-semibold">alta performance</span>
          </h3>
        </div>

        {/* Login Card */}
        <Card className="glass-card shadow-elegant border-border/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-foreground font-semibold">
              Acesso à Internet
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Conecte-se à nossa rede premium
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleConnect} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Usuário"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    className="bg-input/50 border-border/30 text-foreground placeholder:text-muted-foreground focus:border-gold/50 transition-smooth"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="password"
                    placeholder="Senha"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="bg-input/50 border-border/30 text-foreground placeholder:text-muted-foreground focus:border-gold/50 transition-smooth"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-card/30 rounded-lg border border-border/20">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                  className="border-border/40 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                />
                <div className="text-sm leading-relaxed">
                  <label 
                    htmlFor="terms" 
                    className="text-foreground/90 cursor-pointer"
                  >
                    Aceito os{" "}
                    <span className="text-gold hover:text-gold-glow underline cursor-pointer">
                      termos de uso
                    </span>{" "}
                    e autorizo o acesso à internet através desta rede.
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="gold"
                className="w-full h-12 text-base"
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Conectando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Conectar Agora
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="glass-card p-4 rounded-lg">
            <Star className="w-6 h-6 text-gold mx-auto mb-2" />
            <p className="text-xs text-foreground/80">Premium</p>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <Shield className="w-6 h-6 text-gold mx-auto mb-2" />
            <p className="text-xs text-foreground/80">Seguro</p>
          </div>
          <div className="glass-card p-4 rounded-lg">
            <CheckCircle className="w-6 h-6 text-gold mx-auto mb-2" />
            <p className="text-xs text-foreground/80">Rápido</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>© 2025 Six Sport Life - Todos os direitos reservados</p>
          <p className="mt-1">Conexão monitorada e protegida</p>
        </div>
      </div>
    </div>
  );
};