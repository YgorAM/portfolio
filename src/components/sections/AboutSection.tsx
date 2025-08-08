import { Card, CardContent } from "@/components/ui/card";
import { Target, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça mais sobre minha trajetória e objetivos profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-slide-in-right shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Perfil Profissional</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedor Back-End Júnior e estudante de Sistemas de Informação na Faculdade São Judas, 
                atualmente no segundo semestre. Possuo conhecimento sólido em Java, POO, SQL e banco de dados. 
                Experiência prática em projeto acadêmico de sistema bancário em Java com Swing e MySQL. 
                Demonstro facilidade de aprendizado, trabalho em equipe e resolução de problemas.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right animation-delay-200 shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Objetivo Profissional</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Busco atuar como estagiário ou desenvolvedor back-end, aplicando e expandindo 
                meus conhecimentos em Java, lógica de programação e banco de dados. 
                Meu objetivo é contribuir para soluções inovadoras enquanto desenvolvo 
                minhas habilidades técnicas e profissionais em um ambiente colaborativo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;