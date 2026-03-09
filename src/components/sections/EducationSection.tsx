import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";

const EducationSection = () => {
  const currentSubjects = [
    "Sistemas Distribuídos",
    "Desenvolvimento de Aplicações Web, Mobile e Jogos com foco em Usabilidade e Experiência do Usuário"
  ];

  const previousSubjects = [
    "Modelagem de Software",
    "Programação de Soluções Computacionais",
    "Sistemas Computacionais e Segurança",
    "Ambientes Computacionais e Conectividade"
  ];

  return (
    <section id="formacao" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Formação</span> Acadêmica
            <IdeCursor />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada educacional e desenvolvimento acadêmico
          </p>
        </div>

        <IdeWindow
          title="formacao-academica.md"
          icon={<GraduationCap className="w-4 h-4" />}
          showLineNumbers
          lineCount={12}
          className="animate-fade-in"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold mb-1 font-mono">Bacharelado em Sistemas de Informação</h3>
              <p className="text-lg text-primary font-medium font-mono">Universidade São Judas Tadeu</p>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Badge variant="default" className="font-mono text-xs">Em Andamento</Badge>
              <div className="flex items-center text-muted-foreground font-mono text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                <span>fev/2025 – dez/2028</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed font-mono text-sm">
            Atualmente cursando o terceiro semestre do Bacharelado em Sistemas de Informação, 
            aprofundando conhecimentos em sistemas distribuídos e desenvolvimento de aplicações multiplataforma com foco em usabilidade.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="font-semibold font-mono text-sm">Matérias Atuais (3º Semestre)</h4>
              </div>
              <div className="space-y-2">
                {currentSubjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-primary select-none">▸</span>
                    <span className="text-muted-foreground">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-muted-foreground" />
                <h4 className="font-semibold font-mono text-sm">Disciplinas Concluídas</h4>
              </div>
              <div className="space-y-2">
                {previousSubjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-muted-foreground select-none">✓</span>
                    <span className="text-muted-foreground">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </IdeWindow>
      </div>
    </section>
  );
};

export default EducationSection;
