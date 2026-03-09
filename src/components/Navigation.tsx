import { useState, useEffect } from "react";
import { Menu, X, Monitor } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "inicio", label: "Início" },
    { id: "tecnologias", label: "Tecnologias" },
    { id: "projetos", label: "Projetos" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section =>
        document.getElementById(section.id)
      );

      const currentSection = sectionElements.find(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 taskbar-bar md:top-0 md:bottom-auto">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center h-10 gap-1">
          {/* Start button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="taskbar-start-btn flex items-center gap-1.5 px-3 h-7 font-mono text-xs font-bold md:hidden"
            data-no-retro
          >
            <Monitor className="w-4 h-4" />
            <span>Início</span>
          </button>

          {/* Desktop taskbar buttons */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            <button
              onClick={() => scrollToSection("inicio")}
              className="taskbar-start-btn flex items-center gap-1.5 px-3 h-7 font-mono text-xs font-bold"
              data-no-retro
            >
              <Monitor className="w-4 h-4" />
              <span>Início</span>
            </button>

            <div className="taskbar-divider" />

            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`taskbar-btn h-7 px-3 font-mono text-xs transition-smooth ${
                  activeSection === section.id ? "taskbar-btn-active" : ""
                }`}
                data-no-retro
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Right side: clock area / theme toggle */}
          <div className="ml-auto flex items-center">
            <div className="taskbar-tray flex items-center gap-1 px-2 h-7">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile "Start Menu" popup */}
      {isOpen && (
        <div className="md:hidden absolute bottom-10 left-1 taskbar-menu animate-fade-in">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`taskbar-menu-item w-full text-left px-4 py-2 font-mono text-sm ${
                activeSection === section.id ? "taskbar-menu-item-active" : ""
              }`}
              data-no-retro
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
