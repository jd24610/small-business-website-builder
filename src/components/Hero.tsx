import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDonate = () => {
    const element = document.querySelector("#donate");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-sage/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 animate-fade-in">
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span className="text-sm font-medium text-secondary-foreground">
              Supporting Young Adults Since 2020
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 text-balance animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transition From{" "}
            <span className="text-primary">The Hearts</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Empowering young adults to navigate life's transitions with compassion,
            guidance, and the unwavering support of a caring community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="xl" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSftALCA74KkLKB5E6DKy3bJgiXKpdODtUaRtGGb5hQCIo1h8A/viewform?usp=publish-editor", "_blank")}>
              Get Help
            </Button>
            <Button variant="warm" size="xl" onClick={scrollToDonate}>
              Make a Difference
              <Heart className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="warm-outline" size="xl" onClick={scrollToAbout}>
              Learn Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground mt-1">Years of Care</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Heart & Soul</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to learn more"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
