import { Heart, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground fill-current" />
                </div>
                <span className="font-display text-lg font-semibold">
                  Transition From The Hearts
                </span>
              </div>
              <p className="text-sm text-background/70 mb-4">
                Empowering young adults to navigate life's transitions with compassion,
                guidance, and unwavering community support.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
                <a href="#mission" className="hover:text-primary transition-colors">Our Mission</a>
                <a href="/impact" className="hover:text-primary transition-colors">Our Impact</a>
                <a href="#donate" className="hover:text-primary transition-colors">Donate</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="text-sm text-background/70 space-y-2">
                <p>119 Picasso Court</p>
                <p>Williamstown, NJ 08094</p>
                <p className="mt-3">Email: youthfurnishings@transitionfromthehearts.org</p>
                <p>Phone: +1 (856)668-0777</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
              <p>© {currentYear} Transition From The Hearts. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
            <p className="flex items-center justify-center gap-1 text-sm text-background/70 mt-4">
              Made with <Heart className="w-4 h-4 text-primary fill-current" /> for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
