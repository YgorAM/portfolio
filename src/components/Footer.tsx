import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Code className="w-4 h-4" />
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>por Ygor Amaral</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ygor Amaral. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>Programador Back-End Júnior</span>
            <span>•</span>
            <span>Java | Banco de Dados</span>
            <span>•</span>
            <span>Diadema - SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;