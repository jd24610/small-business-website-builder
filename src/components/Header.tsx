import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import GetHelpModal from "@/components/GetHelpModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#mission", label: "Our Mission" },
    { href: "/impact", label: "Our Impact" },
    { href: "/#contact", label: "Contact" },
    { href: "/event-tickets", label: "Buy Tickets" },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith("/")) {

      if (href.includes("#")) {
        const [path, hash] = href.split("#");

        if (location.pathname === path || (path === "/" && location.pathname === "/")) {
          // Already on the page, just scroll
          const element = document.querySelector(`#${hash}`);
          element?.scrollIntoView({ behavior: "smooth" });
        } else {
          // Navigate to the page with hash
          navigate(href);
          // Slight delay to allow navigation to complete before scrolling
          // Note: Ideally this would be handled by a useEffect in the target page,
          // but for simple cases this often works or the user scrolls manually.
          // A better approach is usually installing react-router-hash-link but we keep it simple here.
        }
      } else {

        navigate(href);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="banner">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/");
              }}
              aria-label="Transition From The Hearts - Return to top"
            >
              <img
                src="/logo.png"
                alt="TFTH Logo"
                className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full transition-transform group-hover:scale-105"
              />
              <span className="font-display text-lg md:text-xl font-semibold text-foreground">
                Transition From The Hearts
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                size="sm"
                onClick={() => setIsHelpModalOpen(true)}
                className="hidden md:inline-flex"
              >
                Get Help
              </Button>

            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavigation(link.href)}
                    className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  variant="default"
                  className="mt-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsHelpModalOpen(true);
                  }}
                >
                  Get Help
                </Button>

              </div>
            </nav>
          )}
        </div>
      </header>
      <GetHelpModal isOpen={isHelpModalOpen} onClose={() => setIsHelpModalOpen(false)} />
    </>
  );
};

export default Header;
