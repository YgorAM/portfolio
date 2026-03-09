import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Auxiliar de Logística Pleno",
      company: "Venkuri Produtos Médicos",
      period: "mai/2024 – abr/2025",
      type: "Recente",
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
            <IdeCursor />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória profissional e as experiências que moldaram meu perfil
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <IdeWindow
              key={index}
              title={`${exp.company.toLowerCase().replace(/\s+/g, '-')}.log`}
              icon={<Briefcase className="w-3 h-3" />}
              showLineNumbers
              lineCount={4}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold font-mono">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium font-mono">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Badge
                    variant={exp.type === "Recente" ? "default" : "secondary"}
                    className="font-mono text-xs"
                  >
                    {exp.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground font-mono text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                {exp.description}
              </p>
            </IdeWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
