import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-foreground tracking-wider mb-4">
            SIX
          </h1>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-4" />
          <p className="text-gold text-xl font-medium tracking-wide">
            SPORT LIFE
          </p>
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <h2 className="text-3xl font-light text-foreground mb-4">
            Portal Captivo para pfSense
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Onde a <span className="text-gold font-semibold">exclusividade</span> encontra a{" "}
            <span className="text-gold font-semibold">alta performance</span>
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <Link to="/captive-portal">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4 h-auto">
              <Wifi className="w-6 h-6 mr-3" />
              Visualizar Portal Captivo
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Página de demonstração do portal captivo no estilo Six Sport Life
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
