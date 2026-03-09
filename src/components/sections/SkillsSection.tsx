import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Settings, 
  GitBranch, 
  Brain, 
  Users,
  Coffee,
} from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      skills: ["Java", "SQL"],
    },
    {
      title: "Frameworks & Bibliotecas",
      icon: Coffee,
      skills: ["JavaSwing"],
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: ["MySQL", "Banco de Dados Relacional"],
    },
    {
      title: "IDEs & Ferramentas",
      icon: Settings,
      skills: ["IntelliJ IDEA", "NetBeans"],
    },
    {
      title: "Versionamento",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
    },
    {
      title: "Conceitos",
      icon: Brain,
      skills: ["POO", "Lógica de Programação"],
    },
    {
      title: "Metodologias",
      icon: Users,
      skills: ["Scrum (básico)", "Trabalho em Equipe"],
    }
  ];

  const languages = [
    { language: "Português", level: "Nativo", proficiency: 100 },
    { language: "Inglês", level: "Básico (em aprendizado)", proficiency: 30 }
  ];

  return (
    <section id="habilidades" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span> & Competências
            <IdeCursor />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que domino para desenvolvimento de soluções
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Competências Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <IdeWindow
                  key={index}
                  title={`${category.title.toLowerCase().replace(/\s+/g, '-')}.config`}
                  icon={<category.icon className="w-3 h-3" />}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold font-mono text-sm">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-mono dark:bg-secondary dark:text-dracula-green"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </IdeWindow>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Idiomas</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <IdeWindow
                  key={index}
                  title={`idioma-${lang.language.toLowerCase()}.log`}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-lg font-mono">{lang.language}</h4>
                    <Badge
                      variant={lang.proficiency === 100 ? "default" : "secondary"}
                      className="font-mono text-xs"
                    >
                      {lang.level}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-sm h-2">
                    <div 
                      className="bg-primary h-2 rounded-sm transition-all duration-1000 ease-out"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </IdeWindow>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
