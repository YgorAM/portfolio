import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { IdeWindow, IdeCursor } from "@/components/ui/ide-window";
import { Cpu } from "lucide-react";

const categories = [
  { label: "Linguagens", techs: ["Java", "JavaScript"] },
  { label: "Frameworks", techs: ["Spring", "React", "Tailwind CSS"] },
  { label: "Banco de Dados", techs: ["MySQL"] },
  { label: "Ferramentas", techs: ["Git"] },
];

const TechSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="tecnologias" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Tecnologias</span>
            <IdeCursor />
          </h2>
        </div>

        <IdeWindow
          title="propriedades-do-sistema.exe"
          icon={<Cpu className="w-4 h-4" />}
          className="animate-fade-in"
        >
          {/* Retro tab bar */}
          <div className="flex border-b border-border">
            {categories.map((cat, idx) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(idx)}
                className={`retro-tab px-3 py-1.5 font-mono text-xs transition-smooth ${
                  activeTab === idx ? "retro-tab-active" : ""
                }`}
                data-no-retro
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-4 min-h-[100px]">
            <div className="flex flex-wrap gap-3">
              {categories[activeTab].techs.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-sm px-4 py-2 font-mono dark:bg-secondary dark:text-dracula-green"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </IdeWindow>
      </div>
    </section>
  );
};

export default TechSection;
