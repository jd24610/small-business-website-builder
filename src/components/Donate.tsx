import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Check, ExternalLink, Target, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const AUTOBOOKS_URL = "https://app.autobooks.co/pay/transition-from-the-hearts-a-nj";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [100, 250, 300, 500];

  const impactItems = [
    { amount: 100, impact: "Home essentials and personal care items (e.g., comforter, sheets, dishes, alarm clock)" },
    { amount: 250, impact: "Support for home supplies (e.g., dresser, nightstand, kitchen table)" },
    { amount: 300, impact: "Support for key room furnishings and appliances (e.g., desk, microwave, dining set)" },
    { amount: 500, impact: "Support to furnish a young adult's home (e.g., bed, sofa, or loveseat)" },
  ];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };


  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  return (
    <section id="donate" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-medium mb-4">Support Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Make a Donation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generosity helps us continue supporting young adults through their
              most challenging transitions. Every contribution makes a difference.
            </p>
          </div>

          {/* $250,000 Fundraising Campaign Card */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-soft border-2 border-primary/20 mb-12 relative overflow-hidden">
            {/* Background decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                    <Target className="w-3.5 h-3.5" />
                    2026 Community Fundraiser
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground">
                    $250,000 Fundraising Goal
                  </h3>
                  <p className="text-muted-foreground text-base mt-2 max-w-2xl leading-relaxed">
                    Join our mission to raise <strong>$250,000</strong> to provide essential furnishings, home starter packages, and life-changing transition support for young adults aging out of foster care.
                  </p>
                </div>

                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center lg:text-right shrink-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                    Campaign Target
                  </div>
                  <div className="font-display text-3xl md:text-5xl font-extrabold text-primary">
                    $250,000
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center justify-center lg:justify-end gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    Direct Account Transfer
                  </div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Campaign Progress
                  </span>
                  <span className="text-primary font-bold">Goal: $250,000</span>
                </div>
                <Progress value={15} className="h-3.5 bg-secondary" />
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground pt-1">
                  <span>Every dollar directly impacts young adults in New Jersey</span>
                  <span className="font-medium text-foreground">100% of proceeds go directly to our account</span>
                </div>
              </div>

              {/* Trust & Direct to Account Note */}
              <div className="bg-secondary/60 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Donations go <strong className="text-foreground">directly into the official Transition From The Hearts account</strong> via Autobooks secure payment processing.
                  </p>
                </div>
                <a
                  href={AUTOBOOKS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button variant="default" size="sm" className="gap-1.5 font-semibold">
                    <Heart className="w-4 h-4 fill-current" />
                    Give to the $250K Goal
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Donation Form */}
            <div className="bg-card rounded-3xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Choose Your Gift Amount
              </h3>

              {/* Amount Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${selectedAmount === amount
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background hover:border-primary/50 text-foreground"
                      }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <a
                href={AUTOBOOKS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="donate" size="xl" className="w-full">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Donate ${customAmount || selectedAmount || 0}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <p className="text-xs text-muted-foreground text-center mt-3">
                🔒 Secure payment powered by <strong>Autobooks</strong> · Funds deposit directly into our account
              </p>
            </div>

            {/* Impact Info */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Your Impact
              </h3>
              <div className="space-y-4">
                {impactItems.map((item) => (
                  <div
                    key={item.amount}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ${selectedAmount === item.amount
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-card border-2 border-transparent"
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${selectedAmount === item.amount ? "bg-primary" : "bg-secondary"
                      }`}>
                      <Check className={`w-4 h-4 ${selectedAmount === item.amount ? "text-primary-foreground" : "text-secondary-foreground"
                        }`} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">${item.amount}</div>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-secondary rounded-2xl mt-8">
                <h4 className="font-semibold text-secondary-foreground mb-2">
                  Other Ways to Help
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Volunteer your time and skills</li>
                  <li>• Become a mentor for young adults</li>
                  <li>• Organize a fundraiser in your community</li>
                  <li>• Spread the word about our mission</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
