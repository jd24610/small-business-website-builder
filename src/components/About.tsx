import { Heart, Users, Sparkles, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "We lead with empathy and understanding, meeting every young adult where they are on their journey.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Building lasting connections and a network of care that extends beyond our programs.",
    },
    {
      icon: Sparkles,
      title: "Growth Mindset",
      description: "Fostering resilience and confidence to help young adults embrace their full potential.",
    },
    {
      icon: Shield,
      title: "Safe Space",
      description: "Creating an environment of trust where everyone feels valued, heard, and supported.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-4">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transition from the Hearts is a nonprofit organization dedicated to 
              supporting young adults during life's most pivotal moments.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a deep belief that every young adult deserves guidance and support, 
                Transition from the Hearts emerged from a simple truth: the transition to adulthood 
                can be overwhelming, but no one should face it alone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of dedicated mentors, counselors, and volunteers work tirelessly to 
                provide resources, mentorship, and a caring community for those navigating 
                challenges in education, career, housing, and personal growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that with the right support, every young person can build a 
                foundation for a fulfilling and purposeful life.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img 
                  src="/mentor-helping.png" 
                  alt="A compassionate mentor providing support and care packages to young adults in a welcoming community setting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center">
                  <div className="text-center p-8">
                    <p className="font-display text-2xl font-semibold text-white drop-shadow-lg">
                      "From the heart,<br />for the heart"
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Values Grid */}
          <div id="mission">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
