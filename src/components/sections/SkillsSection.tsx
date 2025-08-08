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
  Server
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      skills: ["Java", "SQL"],
      color: "bg-blue-500"
    },
    {
      title: "Frameworks & Bibliotecas",
      icon: Coffee,
      skills: ["JavaSwing"],
      color: "bg-green-500"
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: ["MySQL", "Banco de Dados Relacional"],
      color: "bg-purple-500"
    },
    {
      title: "IDEs & Ferramentas",
      icon: Settings,
      skills: ["IntelliJ IDEA", "NetBeans"],
      color: "bg-orange-500"
    },
    {
      title: "Versionamento",
      icon: GitBranch,
      skills: ["Git", "GitHub"],
      color: "bg-red-500"
    },
    {
      title: "Conceitos",
      icon: Brain,
      skills: ["POO", "Lógica de Programação"],
      color: "bg-cyan-500"
    },
    {
      title: "Metodologias",
      icon: Users,
      skills: ["Scrum (básico)", "Trabalho em Equipe"],
      color: "bg-indigo-500"
    }
  ];

  const languages = [
    {
      language: "Português",
      level: "Nativo",
      proficiency: 100
    },
    {
      language: "Inglês",
      level: "Básico (em aprendizado)",
      proficiency: 30
    }
  ];

  return (
    <section id="habilidades" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span> & Competências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que domino para desenvolvimento de soluções
          </p>
        </div>

        <div className="space-y-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Competências Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="animate-scale-in shadow-elegant" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className={`p-2 rounded-lg ${category.color} bg-opacity-20`}>
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Idiomas</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {languages.map((lang, index) => (
                <Card key={index} className="animate-fade-in shadow-elegant" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-lg">{lang.language}</h4>
                      <Badge variant={lang.proficiency === 100 ? "default" : "secondary"}>
                        {lang.level}
                      </Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{width: `${lang.proficiency}%`}}
                      ></div>
                    </div>
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

export default SkillsSection;