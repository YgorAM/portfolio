import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Ygor Amaral</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desenvolvedor Back-End Júnior especializado em Java e banco de dados, 
              sempre em busca de novos desafios e oportunidades de crescimento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-primary transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Conecte-se</h4>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/ygor-amaral30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/YgorAM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ygoramaral30@gmail.com"
                className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              ygoramaral30@gmail.com<br />
              (11) 99896-60240<br />
              Diadema - SP
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Ygor Amaral. Desenvolvido com 
            <Heart className="w-4 h-4 text-red-500" />
            e muito ☕ em React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;