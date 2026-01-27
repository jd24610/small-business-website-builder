import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="font-display text-lg font-semibold">
                Transition from the Hearts
              </span>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#donate" className="hover:text-primary transition-colors">Donate</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <span className="text-muted-foreground">Privacy Policy</span>
            </nav>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
              <p>© {currentYear} Transition from the Hearts. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-primary fill-current" /> for our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
