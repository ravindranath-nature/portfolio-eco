import { MapPin, Mail, ExternalLink, Globe, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Research", href: "/research" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Awards", href: "/awards" },
    { label: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { 
      name: "ResearchGate", 
      icon: <Globe className="w-5 h-5" />,
      url: "https://www.researchgate.net/profile/Ravindra-Tripathi"
    },
    { 
      name: "ORCID", 
      icon: <ExternalLink className="w-5 h-5" />,
      url: "https://orcid.org/0000-0001-7299-8955"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/ravindra1364/"
    },
    { 
      name: "GitHub", 
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/ravindranath-nature"
    },
    { 
      name: "Personal Website", 
      icon: <Globe className="w-5 h-5" />,
      url: "http://rntnature.in/"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">RT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Ravindra Nath Tripathi</h3>
                <p className="text-primary-foreground/80 text-sm">PhD in Computer Science & Engineering</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Principal Project Associate at Wildlife Institute of India, specializing in AI, 
              UAV technology, and remote sensing for ecological conservation and wildlife monitoring.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Wildlife Institute of India, Dehradun</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <a 
                  href="mailto:ravindra1364@wii.gov.in"
                  className="text-primary-foreground/80 hover:text-white transition-organic"
                >
                  ravindra1364@wii.gov.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-organic text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Networks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Networks</h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-organic text-sm group"
                >
                  <div className="group-hover:scale-110 transition-organic">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <span>© {currentYear} Dr. Ravindra Nath Tripathi</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <span>Built with conservation in mind</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-forest-light rounded-full animate-pulse" />
                <span>Sustainable Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
