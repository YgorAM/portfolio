import { FileText } from "lucide-react";
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

        <IdeWindow
          title="ABOUT.txt"
          icon={<FileText className="w-4 h-4" />}
          showLineNumbers
          lineCount={4}
          className="animate-fade-in"
        >
          <pre className="text-muted-foreground font-mono text-sm leading-[1.6rem] whitespace-pre-wrap">
{`Sou Ygor Amaral, estudante de Sistemas de Informação na Faculdade São Judas.
Tenho interesse em desenvolvimento de software e criação de projetos práticos.
Busco aprender novas tecnologias e contribuir em ambientes colaborativos.
Focado em construir soluções reais com código limpo e eficiente.`}
          </pre>
        </IdeWindow>
      </div>
    </section>
  );
};

export default AboutSection;
