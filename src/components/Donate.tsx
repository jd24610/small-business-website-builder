import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Check } from "lucide-react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [25, 50, 100, 250];

  const impactItems = [
    { amount: 25, impact: "Provides mentorship materials for one young adult" },
    { amount: 50, impact: "Funds a career counseling session" },
    { amount: 100, impact: "Supports a month of community programming" },
    { amount: 250, impact: "Sponsors a young adult's transition program" },
  ];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
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
                    className={`p-4 rounded-xl border-2 transition-all duration-200 font-semibold ${
                      selectedAmount === amount
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
              <Button variant="donate" size="xl" className="w-full">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Donate ${customAmount || selectedAmount || 0}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Secure donation powered by trusted payment processing
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
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ${
                      selectedAmount === item.amount
                        ? "bg-primary/10 border-2 border-primary"
                        : "bg-card border-2 border-transparent"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      selectedAmount === item.amount ? "bg-primary" : "bg-secondary"
                    }`}>
                      <Check className={`w-4 h-4 ${
                        selectedAmount === item.amount ? "text-primary-foreground" : "text-secondary-foreground"
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
