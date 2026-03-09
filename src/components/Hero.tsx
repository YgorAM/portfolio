import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { IdeCursor } from "@/components/ui/ide-window";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Ygor Amaral</span>
            <IdeCursor />
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            Desenvolvedor de Software | Estudante de Sistemas de Informação
          </h2>
          
          <p className="text-muted-foreground mb-8 font-mono text-sm max-w-2xl mx-auto">
            Focado em desenvolvimento de software, aplicações web e construção de sistemas práticos.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="default" size="lg" className="shadow-elegant">
              <a 
                href="https://github.com/YgorAM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="shadow-elegant">
              <a 
                href="https://www.linkedin.com/in/ygor-amaral30" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="shadow-elegant">
              <a 
                href="#contato"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
