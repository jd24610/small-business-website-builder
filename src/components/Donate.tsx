import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Heart, Check } from "lucide-react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [50, 100, 250, 500];

  const impactItems = [
    { amount: 50, impact: "Home essentials for a young adult (e.g., dishes, cutlery, shower curtain)" },
    { amount: 100, impact: "Supports personal care and comfort items (e.g., comforter, sheets, alarm clock)" },
    { amount: 250, impact: "Support for home supplies (e.g., dresser, nightstand, kitchen table)" },
    { amount: 500, impact: "Support to furnish a young adult's home (e.g., bed, sofa, or loveseat)" },
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

              {/* Donate Button (opens payment options) */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="donate" size="xl" className="w-full">
                    <Heart className="w-5 h-5 mr-2 fill-current" />
                    Donate ${customAmount || selectedAmount || 0}
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Choose a payment method</DialogTitle>
                    <DialogDescription>
                      Select one of the options below to complete your donation of ${customAmount || selectedAmount || 0}.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 grid gap-3">
                    <a
                      href={`https://www.paypal.com/donate?amount=${customAmount || selectedAmount || 0}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm font-medium"
                      aria-label="Donate with PayPal (opens in new tab)"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6 9h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      PayPal
                    </a>

                    <a
                      href={`https://venmo.com/?txn=pay&amount=${customAmount || selectedAmount || 0}&note=Donation`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm font-medium"
                      aria-label="Donate with Venmo (opens in new tab)"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 15l3-6 4 6 3-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Venmo
                    </a>

                    <a
                      href="https://www.apple.com/apple-pay/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border border-border bg-background hover:border-primary transition-colors text-sm font-medium"
                      aria-label="Learn about Apple Pay (opens in new tab)"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 15c1-2 3.5-2 4.5-1 1 1 1.5 2.5 1 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Apple Pay
                    </a>
                    <a
                      href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-8807"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors text-sm font-medium text-primary"
                      aria-label="Donate with Credit or Debit Card via Zeffy (opens in new tab)"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Credit / Debit Card
                    </a>
                  </div>

                  <DialogFooter className="mt-4">
                    <DialogClose asChild>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
