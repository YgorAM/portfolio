import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Github } from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const projects = [
  {
    title: "Matrix Academy",
    description:
      "Plataforma interativa de ensino de Álgebra Linear focada em desenvolvedores, com visualizador de vetores e calculadora de matrizes.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    link: "https://matrixacademy.vercel.app/",
    github: "https://github.com/YgorAM",
  },
  {
    title: "Sistema Bancário Java",
    description:
      "Aplicação de sistema bancário com interface gráfica Swing e banco de dados MySQL, incluindo autenticação e transações financeiras.",
    technologies: ["Java", "Swing", "MySQL", "POO"],
    link: undefined as string | undefined,
    github: "https://github.com/YgorAM",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projetos</span>
            <IdeCursor />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <IdeWindow
              key={idx}
              title={`${project.title.toLowerCase().replace(/\s+/g, "-")}.tsx`}
              icon={<Code className="w-4 h-4" />}
              className="animate-fade-in"
            >
              <h3 className="text-xl font-bold text-primary mb-2 font-mono flex items-center gap-2">
                <Code className="w-5 h-5" />
                {project.title}
              </h3>

              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-mono dark:bg-secondary dark:text-dracula-green"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {project.link && (
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2 font-mono text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Ver Projeto
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2 font-mono text-xs"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </Button>
              </div>
            </IdeWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
