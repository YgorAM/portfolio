import { Button } from "@/components/ui/button";
import { Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/ygor-profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="relative mb-8">
            <img
              src={profileImage}
              alt="Ygor Amaral"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-elegant border-4 border-background"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 w-32 h-32 md:w-40 md:h-40 mx-auto animate-pulse"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Ygor Amaral</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
            Programador Back-End Júnior | Java | Banco de Dados
          </h2>
          
          <div className="flex items-center justify-center text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Diadema - SP</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Desenvolvedor Back-End Júnior e estudante de Sistemas de Informação. 
            Especializado em Java, POO, SQL e banco de dados, com foco em soluções inovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-muted-foreground">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:ygoramaral30@gmail.com" className="hover:text-primary transition-smooth">
                ygoramaral30@gmail.com
              </a>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+5511998966240" className="hover:text-primary transition-smooth">
                (11) 99896-6240
              </a>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button asChild variant="default" size="lg" className="shadow-elegant">
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
                href="https://github.com/YgorAM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;