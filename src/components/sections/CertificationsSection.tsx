import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, BookOpen } from "lucide-react";

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Programação":
        return "bg-blue-500/20 text-blue-700 dark:text-blue-300";
      case "Banco de Dados":
        return "bg-purple-500/20 text-purple-700 dark:text-purple-300";
      case "Qualidade":
        return "bg-green-500/20 text-green-700 dark:text-green-300";
      default:
        return "bg-gray-500/20 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <section id="certificacoes" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Certificações</span> & Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificações que comprovam meu comprometimento com o aprendizado contínuo
          </p>
        </div>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="animate-fade-in shadow-elegant" style={{animationDelay: `${index * 0.2}s`}}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <Badge className={getCategoryColor(cert.category)}>
                          {cert.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-medium text-sm">Habilidades adquiridas:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="animate-fade-in shadow-elegant">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Aprendizado Contínuo</h3>
              </div>
              <p className="text-muted-foreground">
                Sempre em busca de novas certificações e cursos para aprimorar 
                minhas habilidades técnicas e profissionais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;