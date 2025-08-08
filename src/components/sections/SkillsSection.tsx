import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coffee, Database, Code, GitBranch, Cog, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Coffee,
      color: "bg-orange-500",
      skills: [
        { name: "Java", level: 85, description: "POO, Collections, Exception Handling" },
        { name: "SQL", level: 80, description: "Consultas complexas, Joins, Stored Procedures" },
        { name: "JavaScript", level: 60, description: "ES6+, DOM Manipulation (aprendendo)" }
      ]
    },
    {
      title: "Banco de Dados",
      icon: Database,
      color: "bg-blue-500",
      skills: [
        { name: "MySQL", level: 85, description: "Modelagem, Otimização, Backup/Restore" },
        { name: "Banco de Dados Relacional", level: 80, description: "Normalização, ER, Índices" }
      ]
    },
    {
      title: "Ferramentas & IDEs",
      icon: Code,
      color: "bg-purple-500",
      skills: [
        { name: "IntelliJ IDEA", level: 90, description: "Debug, Refactoring, Plugins" },
        { name: "NetBeans", level: 75, description: "Desenvolvimento Java, GUI Design" },
        { name: "Java Swing", level: 80, description: "Interfaces gráficas, Event Handling" }
      ]
    },
    {
      title: "Versionamento",
      icon: GitBranch,
      color: "bg-green-500",
      skills: [
        { name: "Git", level: 85, description: "Branching, Merging, Conflict Resolution" },
        { name: "GitHub", level: 80, description: "Repositories, Collaboration, Pull Requests" }
      ]
    },
    {
      title: "Metodologias",
      icon: Cog,
      color: "bg-indigo-500",
      skills: [
        { name: "Scrum", level: 70, description: "Sprint Planning, Daily Standups (básico)" },
        { name: "POO", level: 90, description: "Encapsulamento, Herança, Polimorfismo" }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "bg-pink-500",
      skills: [
        { name: "Trabalho em Equipe", level: 95, description: "Colaboração, Comunicação efetiva" },
        { name: "Aprendizado Rápido", level: 90, description: "Adaptabilidade, Curiosidade" },
        { name: "Resolução de Problemas", level: 85, description: "Análise lógica, Debugging" }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Competências Técnicas</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Conjunto sólido de habilidades técnicas e comportamentais desenvolvidas através de estudos e projetos práticos
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-slide-up" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <Card className="h-full bg-gradient-card border shadow-soft hover:shadow-strong transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-foreground">{skill.name}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div className="mt-12 animate-fade-in">
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">🌍 Idiomas</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2">Português</h4>
                    <Badge className="bg-primary-foreground text-primary mb-2">Nativo</Badge>
                    <p className="text-sm opacity-90">Comunicação fluente oral e escrita</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2">Inglês</h4>
                    <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 mb-2">
                      Básico - Em Aprendizado
                    </Badge>
                    <p className="text-sm opacity-90">Leitura de documentação técnica</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center animate-fade-in">
            <Card className="bg-muted/50 border-2 border-dashed border-muted-foreground/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">🎯 Foco de Desenvolvimento</h3>
                <p className="text-muted-foreground mb-4">
                  Atualmente aprofundando conhecimentos em Spring Framework, APIs RESTful e arquitetura de microsserviços
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Spring Boot</Badge>
                  <Badge variant="outline">REST APIs</Badge>
                  <Badge variant="outline">Microsserviços</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Cloud Computing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;