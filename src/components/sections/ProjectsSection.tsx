import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Code, Database, Users, ExternalLink } from "lucide-react";
import matrixAcademyImg from "@/assets/matrix-academy.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema Bancário Java",
      description: "Aplicação completa de sistema bancário desenvolvida em Java com interface gráfica Swing e banco de dados MySQL. O projeto implementa funcionalidades essenciais de um banco digital, incluindo gerenciamento de contas, transações financeiras e controle de usuários.",
      technologies: ["Java", "Swing", "MySQL", "POO", "Git"],
      features: [
        "Sistema de login e autenticação",
        "Cadastro de usuários e contas",
        "Transações financeiras (depósito, saque, transferência)",
        "Consulta de saldo em tempo real",
        "Histórico de movimentações",
        "Interface gráfica intuitiva",
        "Banco de dados relacional"
      ],
      highlights: [
        "Desenvolvimento em equipe",
        "Versionamento com Git",
        "Arquitetura orientada a objetos",
        "Integração com banco de dados"
      ],
    },
    {
      title: "Matrix Academy",
      description: "Plataforma interativa de ensino de Álgebra Linear focada em desenvolvedores. O sistema oferece ferramentas visuais para o estudo de vetores e matrizes, conectando conceitos matemáticos à aplicação prática em Computação Gráfica e Ciência de Dados.",
      technologies: ["React", "Tailwind CSS", "Vercel", "JavaScript (ES6+)", "Git"],
      features: [
        "Visualizador dinâmico de vetores e transformações lineares",
        "Calculadora interativa de matrizes com feedback em tempo real",
        "Ambiente de Playground e Console de Código para testes práticos",
        "Sistema de Mini Game para fixação de conceitos matemáticos",
        "Interface com suporte a Internacionalização (i18n) e Dark Mode"
      ],
      highlights: [
        "UI/UX focada em ferramentas técnicas e produtividade",
        "Explicações visuais complexas simplificadas por componentes interativos",
        "Deploy automatizado e alta performance de carregamento",
        "Arquitetura baseada em componentes reutilizáveis e escaláveis"
      ],
      link: "https://matrixacademy.vercel.app/",
      image: matrixAcademyImg,
    }
  ];

  return (
    <section id="projetos" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projetos</span> Desenvolvidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos que demonstram minhas habilidades técnicas e capacidade de desenvolvimento
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="animate-fade-in shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  {project.title}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="ml-auto gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Ver Projeto
                      </Button>
                    </a>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {project.image && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      className="w-full rounded-lg border shadow-sm object-cover max-h-80"
                    />
                  </a>
                )}

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Tecnologias Utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Funcionalidades Principais</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Destaques do Projeto
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
