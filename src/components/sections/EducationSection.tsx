import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays, MapPin, BookOpen } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="formacao" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Formação Acadêmica</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Formação sólida em tecnologia com foco em desenvolvimento de sistemas
            </p>
          </div>

          {/* Current Education */}
          <div className="animate-slide-up">
            <Card className="bg-gradient-card border-0 shadow-strong hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Bacharelado em Sistemas de Informação
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium">Universidade São Judas Tadeu</span>
                        </div>
                      </div>
                      <Badge className="bg-accent text-accent-foreground self-start">
                        Cursando - 1º Semestre
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>Fevereiro 2025 - Dezembro 2028</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>São Paulo - SP</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Curso superior focado no desenvolvimento de sistemas de informação, abrangendo 
                      programação, banco de dados, engenharia de software, análise de sistemas e 
                      gestão de projetos de TI.
                    </p>

                    {/* Key Areas */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Áreas de Estudo:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            Programação Orientada a Objetos
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            Banco de Dados e SQL
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            Engenharia de Software
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            Análise e Projeto de Sistemas
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Competências Desenvolvidas:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">Lógica de Programação</Badge>
                          <Badge variant="secondary" className="text-xs">Algoritmos</Badge>
                          <Badge variant="secondary" className="text-xs">Modelagem de Dados</Badge>
                          <Badge variant="secondary" className="text-xs">Gestão de Projetos</Badge>
                          <Badge variant="secondary" className="text-xs">Metodologias Ágeis</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Goals */}
          <div className="mt-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  🎯 Objetivos Acadêmicos
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Durante o curso, pretendo aprofundar conhecimentos em desenvolvimento back-end, 
                  arquitetura de software e tecnologias modernas como Spring Framework, APIs RESTful 
                  e microsserviços, sempre buscando projetos práticos que complementem o aprendizado teórico.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;