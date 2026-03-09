import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Users, ExternalLink } from "lucide-react";

const MatrixHero = () => (
  <div className="relative w-full rounded-lg overflow-hidden bg-[#0d1b2a] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[220px]">
    {/* Left: Logo + Title */}
    <div className="flex flex-col gap-2 z-10">
      {/* Grid icon */}
      <div className="flex items-center gap-2 mb-1">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          {[0, 1, 2, 3].map(r =>
            [0, 1, 2, 3].map(c => (
              <rect key={`${r}-${c}`} x={2 + c * 7} y={2 + r * 7} width="5" height="5" rx="1" fill="#5eead4" opacity={0.7 + Math.random() * 0.3} />
            ))
          )}
        </svg>
      </div>
      <h3 className="text-white font-bold text-3xl md:text-4xl tracking-tight leading-tight">
        Matrix Academy
      </h3>
      <p className="text-gray-300 text-sm md:text-base">
        Aprenda Álgebra Linear de Forma Interativa
      </p>
    </div>

    {/* Right: Vector graphic */}
    <div className="z-10 flex-shrink-0">
      <svg width="260" height="180" viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grid lines */}
        <line x1="130" y1="10" x2="130" y2="170" stroke="#1e3a4f" strokeWidth="0.5" />
        <line x1="30" y1="110" x2="240" y2="110" stroke="#1e3a4f" strokeWidth="0.5" />
        {/* Diagonal grid */}
        <line x1="60" y1="170" x2="200" y2="50" stroke="#1e3a4f" strokeWidth="0.3" />
        <line x1="60" y1="50" x2="200" y2="170" stroke="#1e3a4f" strokeWidth="0.3" />

        {/* Vector 1: cyan upward-right */}
        <line x1="130" y1="110" x2="180" y2="30" stroke="#5eead4" strokeWidth="2.5" />
        <polygon points="180,30 174,42 186,42" fill="#5eead4" />
        <text x="184" y="28" fill="#5eead4" fontSize="10" fontFamily="monospace">3, 6</text>

        {/* Vector 2: teal-blue right */}
        <line x1="130" y1="110" x2="230" y2="70" stroke="#38bdf8" strokeWidth="2.5" />
        <polygon points="230,70 220,64 220,76" fill="#38bdf8" />
        <text x="232" y="68" fill="#38bdf8" fontSize="10" fontFamily="monospace">6, 3</text>

        {/* Vector 3: light cyan upward */}
        <line x1="130" y1="110" x2="150" y2="35" stroke="#99f6e4" strokeWidth="2" />
        <polygon points="150,35 145,47 155,47" fill="#99f6e4" />
        <text x="153" y="32" fill="#99f6e4" fontSize="10" fontFamily="monospace">-3, 3</text>

        {/* Vector 4: blue downward-left (negative) */}
        <line x1="130" y1="110" x2="80" y2="150" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="80,150 86,140 74,140" fill="#94a3b8" />
        <text x="55" y="158" fill="#94a3b8" fontSize="10" fontFamily="monospace">-3, -3</text>

        {/* Parallelogram fill */}
        <polygon points="130,110 180,30 230,70 180,150" fill="#5eead4" opacity="0.06" />
        <polygon points="130,110 180,30 230,70" fill="#38bdf8" opacity="0.08" />

        {/* Origin dot */}
        <circle cx="130" cy="110" r="3" fill="#5eead4" />

        {/* Axis labels */}
        <text x="242" y="114" fill="#475569" fontSize="9" fontFamily="monospace">X</text>
        <text x="132" y="16" fill="#475569" fontSize="9" fontFamily="monospace">Y</text>
      </svg>
    </div>

    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a] via-transparent to-[#0f2b3d] opacity-60 pointer-events-none" />
  </div>
);

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
      hasHero: true,
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
            <Card key={idx} className="animate-fade-in shadow-elegant overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {project.hasHero && <MatrixHero />}

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
