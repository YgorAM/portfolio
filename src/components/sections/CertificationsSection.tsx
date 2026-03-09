import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Aprenda Java em 7 dias + Projetos Reais",
      category: "Programação",
      description: "Curso intensivo de Java com foco em desenvolvimento prático e projetos reais",
      skills: ["Java", "POO", "Desenvolvimento Prático"]
    },
    {
      title: "Banco de Dados SQL do Zero ao Avançado",
      category: "Banco de Dados",
      description: "Curso abrangente sobre SQL e gerenciamento de bancos de dados relacionais",
      skills: ["SQL", "MySQL", "Modelagem de Dados"]
    },
    {
      title: "Six Sigma White Belt",
      category: "Qualidade",
      description: "Certificação em metodologia Six Sigma para melhoria de processos e qualidade",
      skills: ["Processos", "Qualidade", "Metodologia"]
    }
  ];

  return (
    <section id="certificacoes" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certificações</span> & Cursos
            <IdeCursor />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificações que comprovam meu comprometimento com o aprendizado contínuo
          </p>
        </div>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <IdeWindow
              key={index}
              title={`certificado-${cert.category.toLowerCase().replace(/\s+/g, '-')}.cert`}
              icon={<Award className="w-3 h-3" />}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 rounded-sm bg-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold font-mono">{cert.title}</h3>
                    <Badge className="font-mono text-xs w-fit" variant="secondary">
                      {cert.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 font-mono text-sm">
                    {cert.description}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm font-mono">Habilidades adquiridas:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-mono dark:bg-secondary dark:text-dracula-green"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </IdeWindow>
          ))}
        </div>

        <div className="mt-8 text-center">
          <IdeWindow title="status.log" className="animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold font-mono">Aprendizado Contínuo</h3>
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              Sempre em busca de novas certificações e cursos para aprimorar 
              minhas habilidades técnicas e profissionais.
            </p>
          </IdeWindow>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
