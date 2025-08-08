import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Auxiliar de Logística Pleno",
      company: "Venkuri Produtos Médicos",
      period: "Mai 2024 - Abr 2025",
      location: "São Paulo - SP",
      type: "Experiência Atual",
      description: "Responsável por operações logísticas em empresa de produtos médicos, desenvolvendo habilidades de organização, planejamento e trabalho sob pressão.",
      skills: ["Logística", "Organização", "Planejamento", "Gestão de Estoque"]
    },
    {
      title: "Aprendiz em Logística",
      company: "Zenatur Transportes",
      period: "Ago 2022 - Jun 2023",
      location: "São Paulo - SP", 
      type: "Programa de Aprendizagem",
      description: "Programa de aprendizagem focado em operações logísticas e transporte, onde desenvolvi competências em gestão de processos e trabalho em equipe.",
      skills: ["Transporte", "Processos", "Documentação", "Atendimento"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experiência Profissional</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Experiência sólida em logística que desenvolveu habilidades transferíveis para desenvolvimento de software
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16 bg-card border shadow-soft hover:shadow-strong transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="self-start">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Competências Desenvolvidas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center animate-fade-in">
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">🚀 Próximo Passo</h3>
                <p className="leading-relaxed">
                  Busco oportunidades de estágio ou posição júnior em desenvolvimento back-end para aplicar 
                  minha experiência em trabalho em equipe e disciplina adquirida na logística, combinada 
                  com meus conhecimentos técnicos em programação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;