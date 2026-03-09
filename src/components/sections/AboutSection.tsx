import { User } from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
            <IdeCursor />
          </h2>
        </div>

        <IdeWindow title="sobre.tsx" icon={<User className="w-4 h-4" />} className="animate-fade-in">
          <p className="text-muted-foreground leading-relaxed font-mono text-sm">
            Sou Ygor Amaral, estudante de Sistemas de Informação na Faculdade São Judas. 
            Tenho interesse em desenvolvimento de software e criação de projetos práticos 
            que resolvam problemas reais. Busco sempre aprender novas tecnologias e contribuir 
            em ambientes colaborativos.
          </p>
        </IdeWindow>
      </div>
    </section>
  );
};

export default AboutSection;
