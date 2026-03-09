import { Card, CardContent } from "@/components/ui/card";
import { Target, User } from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resumo <span className="text-gradient">Profissional</span>
            <IdeCursor />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória e objetivos profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <IdeWindow title="perfil.tsx" icon={<User className="w-4 h-4" />} className="animate-slide-in-right">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Perfil Profissional</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-mono text-sm">
              Desenvolvedor Back-End Júnior e estudante de Sistemas de Informação na Faculdade São Judas, 
              atualmente no segundo semestre. Possuo conhecimento sólido em Java, POO, SQL e banco de dados. 
              Experiência prática em projeto acadêmico de sistema bancário em Java com Swing e MySQL. 
              Demonstro facilidade de aprendizado, trabalho em equipe e resolução de problemas.
            </p>
          </IdeWindow>

          <IdeWindow title="objetivo.tsx" icon={<Target className="w-4 h-4" />} className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Objetivo Profissional</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed font-mono text-sm">
              Busco atuar como estagiário ou desenvolvedor back-end, aplicando e expandindo 
              meus conhecimentos em Java, lógica de programação e banco de dados. 
              Meu objetivo é contribuir para soluções inovadoras enquanto desenvolvo 
              minhas habilidades técnicas e profissionais em um ambiente colaborativo.
            </p>
          </IdeWindow>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
