import { Badge } from "@/components/ui/badge";
import { IdeCursor } from "@/components/ui/ide-window";

const techs = ["Java", "Spring", "MySQL", "Git", "React", "Tailwind CSS"];

const TechSection = () => {
  return (
    <section id="tecnologias" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
          <span className="text-gradient">Tecnologias</span>
          <IdeCursor />
        </h2>
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
          {techs.map((tech) => (
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
    </section>
  );
};

export default TechSection;
