import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Auxiliar de Logística Pleno",
      company: "Venkuri Produtos Médicos",
      period: "mai/2024 – abr/2025",
      type: "Atual",
      description: "Responsável por operações logísticas e gerenciamento de produtos médicos."
    },
    {
      title: "Aprendiz em Logística",
      company: "Zenatur Transportes",
      period: "ago/2022 – jun/2023",
      type: "Anterior",
      description: "Desenvolvimento de habilidades em logística e transportes durante programa de aprendizagem."
    }
  ];

  return (
    <section id="experiencia" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional e as experiências que moldaram meu perfil
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fade-in shadow-elegant" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-start md:items-center gap-3 mb-2 md:mb-0">
                    <Briefcase className="w-5 h-5 text-primary mt-1 md:mt-0" />
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={exp.type === "Atual" ? "default" : "secondary"}>
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-8 md:ml-8">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;