import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Coffee, Database, TrendingUp } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Aprenda Java em 7 dias + Projetos Reais",
      provider: "Udemy",
      date: "2024",
      type: "Programação",
      icon: Coffee,
      color: "bg-orange-500",
      description: "Curso intensivo de Java com foco em projetos práticos, cobrindo desde fundamentos até desenvolvimento de aplicações reais.",
      skills: ["Java Fundamentals", "POO", "Collections", "Exception Handling", "Projetos Práticos"],
      hours: "40h"
    },
    {
      title: "Banco de Dados SQL do Zero ao Avançado",
      provider: "Udemy",
      date: "2024",
      type: "Banco de Dados",
      icon: Database,
      color: "bg-blue-500",
      description: "Formação completa em SQL e banco de dados relacionais, desde conceitos básicos até técnicas avançadas de otimização.",
      skills: ["SQL Queries", "Database Design", "Normalização", "Joins", "Stored Procedures"],
      hours: "35h"
    },
    {
      title: "Six Sigma White Belt",
      provider: "Certificação Internacional",
      date: "2024",
      type: "Qualidade & Processos",
      icon: TrendingUp,
      color: "bg-green-500",
      description: "Certificação em metodologia Six Sigma focada em melhoria de processos e qualidade, aplicável ao desenvolvimento de software.",
      skills: ["Melhoria de Processos", "Controle de Qualidade", "Análise de Dados", "DMAIC", "Lean Thinking"],
      hours: "16h"
    }
  ];

  return (
    <section id="certificacoes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certificações</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Certificações que comprovam conhecimento técnico e comprometimento com o aprendizado contínuo
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <Card className="h-full bg-card border shadow-soft hover:shadow-strong transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Certificate Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {cert.type}
                        </Badge>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    {/* Title and Provider */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      {cert.provider} • {cert.hours}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3 text-sm">Competências Desenvolvidas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Verification Button */}
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Certificado
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Learning Commitment Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Stats */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-strong">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">📊 Estatísticas de Aprendizado</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">90+</div>
                      <div className="text-sm opacity-90">Horas de Estudo</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">3</div>
                      <div className="text-sm opacity-90">Certificações</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Next Learning Goals */}
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Card className="bg-accent/5 border-accent/20 h-full">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    🎯 Próximas Certificações
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Spring Framework Professional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>AWS Cloud Practitioner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Oracle Certified Associate Java</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Scrum Foundation Professional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;