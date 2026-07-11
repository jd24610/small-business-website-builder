import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EventBanner = () => {
  const navigate = useNavigate();

  return (
    <section id="event" className="bg-white py-10 px-4 md:px-8">
      <div
        className="max-w-7xl mx-auto rounded-3xl relative overflow-hidden py-20 md:py-28 px-8 md:px-16"
        style={{
          background:
            "linear-gradient(135deg, hsl(20 35% 10%) 0%, hsl(15 40% 16%) 50%, hsl(38 50% 18%) 100%)",
        }}
      >
      {/* Decorative glow blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(38 92% 50%) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(12 76% 61%) 0%, transparent 70%)",
        }}
      />
      {/* Dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-300 text-sm font-semibold tracking-wide uppercase">
              Upcoming Fundraising Event
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hearts &amp; Hope{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #f59e0b, #f97316)",
                }}
              >
                Fundraising Gala
              </span>
            </h2>

            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Join us for an elegant evening supporting young adults as they
              transition from foster care to independent living. Fine dining,
              live entertainment, and a silent auction —{" "}
              <strong className="text-white">your donation is your seat.</strong>
            </p>

            {/* Event details pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: Calendar, text: "Saturday, October 10, 2026" },
                { icon: Clock, text: "5:00 PM" },
                {
                  icon: MapPin,
                  text: "Pfeiffer Community Center · Williamstown, NJ",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2"
                >
                  <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                id="homepage-buy-tickets-btn"
                size="lg"
                onClick={() => navigate("/event-tickets")}
                className="gap-2 rounded-xl px-8 text-base font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(12 76% 61%), hsl(38 92% 50%))",
                }}
              >
                <Heart className="w-5 h-5" />
                Donate &amp; Attend the Gala
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-white/40 text-xs mt-4">
              🔒 Secure donation via Zeffy — 100% goes to our mission
            </p>
          </div>

          {/* Right — ticket card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, hsl(20 25% 15%), hsl(15 30% 20%))",
              }}
            >
              {/* accent bar */}
              <div
                className="h-2"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(12 76% 61%), hsl(38 92% 50%), hsl(12 76% 61%))",
                }}
              />
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      Donate to Attend
                    </p>
                    <p className="text-3xl font-bold text-white">Any Amount</p>
                    <p className="text-white/50 text-sm">your donation = your seat</p>
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(12 76% 61% / 0.3), hsl(38 92% 50% / 0.2))",
                    }}
                  >
                    <Heart className="w-8 h-8 text-amber-400 fill-amber-400/30" />
                  </div>
                </div>

                <div className="border-t border-white/10" />

                <ul className="space-y-3 text-sm text-white/70">
                  {[
                    "Elegant fine dining experience",
                    "Inspiring foster care alumni stories",
                    "Live entertainment",
                    "Silent auction",
                    "Tax-deductible contribution",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-amber-400">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* tear line */}
                <div className="relative flex items-center my-2">
                  <div className="absolute -left-8 w-5 h-5 rounded-full bg-[hsl(20,35%,10%)]" />
                  <div className="flex-1 border-t-2 border-dashed border-white/20" />
                  <div className="absolute -right-8 w-5 h-5 rounded-full bg-[hsl(20,35%,10%)]" />
                </div>

                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-widest">
                    Transition From The Hearts
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Non-profit Fundraising Gala · 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventBanner />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
