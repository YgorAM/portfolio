import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const EducationSection = () => {
  const currentSubjects = [
    "Sistemas computacionais e segurança",
    "Ambientes computacionais e conectividade"
  ];

  const previousSubjects = [
    "Modelagem de software",
    "Programação de soluções computacionais"
  ];

  return (
    <section id="formacao" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Formação</span> Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada educacional e desenvolvimento acadêmico
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="animate-fade-in shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Bacharelado em Sistemas de Informação</h3>
                      <p className="text-lg text-primary font-medium">Universidade São Judas Tadeu</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Em Andamento</Badge>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>fev/2025 – dez/2028</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Atualmente cursando o segundo semestre do bacharelado em Sistemas de Informação, 
                    desenvolvendo conhecimentos em programação, banco de dados, sistemas computacionais e segurança.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Matérias Atuais (2º Semestre)</h4>
                  </div>
                  <div className="space-y-2">
                    {currentSubjects.map((subject, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                    <h4 className="font-semibold">Matérias Concluídas (1º Semestre)</h4>
                  </div>
                  <div className="space-y-2">
                    {previousSubjects.map((subject, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                        <span className="text-muted-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;