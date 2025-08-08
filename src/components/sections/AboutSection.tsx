import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Programação",
      description: "Facilidade para lógica de programação e POO"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Experiência com SQL e MySQL"
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Colaboração efetiva em projetos"
    },
    {
      icon: Lightbulb,
      title: "Aprendizado Rápido",
      description: "Facilidade para absorver novos conhecimentos"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Description */}
            <div className="space-y-6 animate-slide-up">
              <Card className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Desenvolvedor Back-End Júnior
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Estudante de Sistemas de Informação na Faculdade São Judas, atualmente no primeiro semestre. 
                    Possuo conhecimento sólido em Java, Programação Orientada a Objetos, SQL e banco de dados.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Tenho experiência prática em projeto acadêmico de sistema bancário desenvolvido em Java 
                    com interface Swing e banco de dados MySQL, trabalhando em equipe e utilizando Git para 
                    versionamento.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Características Principais:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Facilidade de Aprendizado</Badge>
                      <Badge variant="secondary">Trabalho em Equipe</Badge>
                      <Badge variant="secondary">Resolução de Problemas</Badge>
                      <Badge variant="secondary">Metodologias Ágeis</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Objective */}
              <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-strong">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-3">🎯 Objetivo Profissional</h4>
                  <p className="leading-relaxed">
                    Atuar como estagiário ou desenvolvedor back-end, aplicando e expandindo 
                    conhecimentos em Java, lógica de programação e banco de dados, contribuindo 
                    para soluções inovadoras.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card border shadow-soft hover:shadow-strong transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;