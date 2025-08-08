import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Code, Users, GitBranch } from "lucide-react";

const ProjectsSection = () => {
  const project = {
    title: "Sistema Bancário Java",
    description: "Aplicação desktop completa desenvolvida em Java com interface gráfica Swing e banco de dados MySQL. O sistema oferece funcionalidades bancárias essenciais como autenticação de usuários, gestão de contas, transações financeiras e histórico de movimentações.",
    features: [
      "Sistema de login seguro com validação de credenciais",
      "Cadastro e gestão de clientes e contas",
      "Operações bancárias: depósito, saque e transferência",
      "Consulta de saldo e extrato detalhado",
      "Histórico completo de transações",
      "Interface gráfica intuitiva com Java Swing"
    ],
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "POO",
      "Git",
      "IntelliJ IDEA"
    ],
    achievements: [
      "Desenvolvimento em equipe com metodologia ágil",
      "Versionamento completo com Git/GitHub",
      "Arquitetura MVC implementada",
      "Validações robustas de entrada de dados"
    ]
  };

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Projetos</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Projeto acadêmico que demonstra habilidades práticas em desenvolvimento back-end
            </p>
          </div>

          {/* Main Project */}
          <div className="animate-slide-up">
            <Card className="bg-card border shadow-strong hover:shadow-glow transition-all duration-500 group">
              <CardContent className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="mt-1">
                        Projeto Acadêmico
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/YgorAM" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Functionalities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Database className="w-5 h-5 text-primary" />
                      Funcionalidades Principais
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Conquistas do Projeto
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GitBranch className="w-5 h-5 text-primary" />
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learning Highlights */}
                <Card className="bg-gradient-primary text-primary-foreground border-0 mt-6">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3">💡 Aprendizados Principais</h4>
                    <p className="leading-relaxed text-sm">
                      Este projeto consolidou meus conhecimentos em Java e POO, além de me ensinar sobre 
                      integração com banco de dados, trabalho em equipe com Git, e desenvolvimento de 
                      interfaces gráficas. Foi fundamental para entender na prática os conceitos de 
                      arquitetura de software e boas práticas de programação.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Future Projects Section */}
          <div className="mt-12 text-center animate-fade-in">
            <Card className="bg-muted/50 border-dashed border-2 border-muted-foreground/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">🚧 Próximos Projetos</h3>
                <p className="text-muted-foreground mb-4">
                  Planejando desenvolver uma API RESTful com Spring Boot e um sistema de gerenciamento 
                  com React para expandir meu portfólio full-stack.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">Spring Boot</Badge>
                  <Badge variant="outline">API REST</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;