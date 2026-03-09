import { Code, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-card border-t-2 border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold font-mono">
            <span className="text-gradient">Contato</span>
          </h2>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="mailto:ygoramaral30@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              ygoramaral30@gmail.com
            </a>
            <a
              href="https://github.com/YgorAM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth font-mono text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ygor-amaral30"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth font-mono text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground font-mono text-xs pt-4 border-t border-border">
            <Code className="w-3 h-3" />
            <span>&copy; {new Date().getFullYear()} Ygor Amaral. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
