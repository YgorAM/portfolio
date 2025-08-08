import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "ygoramaral30@gmail.com",
      href: "mailto:ygoramaral30@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99896-60240",
      href: "tel:+5511998966240"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Diadema - SP",
      href: "https://maps.google.com/?q=Diadema,SP"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/ygor-amaral30",
      href: "https://www.linkedin.com/in/ygor-amaral30",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "/YgorAM",
      href: "https://github.com/YgorAM",
      color: "bg-gray-800"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio (em produção, conectar com Formspree ou similar)
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Pronto para contribuir em sua equipe! Vamos conversar sobre oportunidades de estágio ou desenvolvimento back-end.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="bg-gradient-card border shadow-strong">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Envie uma Mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Oportunidade de estágio, freelance, etc."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-me sobre a oportunidade, projeto ou dúvidas..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {/* Contact Details */}
              <Card className="bg-card border shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Informações de Contato
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                      >
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{info.title}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card border shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Redes Sociais
                  </h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 group"
                      >
                        <div className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{social.title}</h4>
                          <p className="text-muted-foreground">{social.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-strong">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">💼 Disponibilidade</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Disponível para estágios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Projetos freelance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Período: Manhã/Tarde</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Remoto ou presencial (SP)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;