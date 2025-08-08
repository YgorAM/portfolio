import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import ygorAvatar from "@/assets/ygor-avatar.jpg";

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Avatar */}
          <div className="flex justify-center">
            <Avatar className="w-32 h-32 ring-4 ring-primary-foreground/20 shadow-glow">
              <AvatarImage src={ygorAvatar} alt="Ygor Amaral" />
              <AvatarFallback className="text-2xl bg-accent text-accent-foreground">YA</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Main Info */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ygor Amaral
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Programador Back-End Júnior | Java | Banco de Dados
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Diadema - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ygoramaral30@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99896-60240</span>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/ygor-amaral30" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="https://github.com/YgorAM" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;