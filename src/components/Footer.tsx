import { Code, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { IdeWindow } from "@/components/ui/ide-window";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contato" className="section-padding">
      <div className="max-w-lg mx-auto">
        <IdeWindow
          title="contato.exe"
          icon={<MessageSquare className="w-4 h-4" />}
          className="animate-fade-in"
        >
          <div className="p-2 space-y-3">
            <p className="font-mono text-sm text-muted-foreground mb-4">
              Entre em contato:
            </p>

            <div className="flex flex-col gap-2">
              <Button variant="outline" size="sm" asChild className="justify-start">
                <a
                  href="mailto:ygoramaral30@gmail.com"
                  className="flex items-center gap-2 font-mono text-xs"
                >
                  <Mail className="w-4 h-4" />
                  ygoramaral30@gmail.com
                </a>
              </Button>

              <Button variant="outline" size="sm" asChild className="justify-start">
                <a
                  href="https://github.com/YgorAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="sm" asChild className="justify-start">
                <a
                  href="https://www.linkedin.com/in/ygor-amaral30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </IdeWindow>

        <div className="flex items-center justify-center gap-2 text-muted-foreground font-mono text-xs mt-6">
          <Code className="w-3 h-3" />
          <span>&copy; {new Date().getFullYear()} Ygor Amaral. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
