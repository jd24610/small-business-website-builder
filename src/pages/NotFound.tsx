import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heart, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary via-background to-warm-soft-sage/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-foreground fill-current" />
            </div>
          </div>

          {/* 404 Message */}
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="warm"
              size="lg"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Button>
            <Button
              variant="warm-outline"
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h3 className="font-semibold text-foreground mb-4">Helpful Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/#impact" className="text-muted-foreground hover:text-primary transition-colors">
                Our Impact
              </a>
              <a href="/#donate" className="text-muted-foreground hover:text-primary transition-colors">
                Donate
              </a>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
