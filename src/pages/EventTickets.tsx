import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  CheckCircle2,
  Star,
  ArrowRight,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { toast } from "sonner";

/* ---------- Zod schema ---------- */
const galaSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    confirmEmail: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(10, "Please enter a valid phone number")
      .regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number"),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Email addresses do not match",
    path: ["confirmEmail"],
  });

type GalaFormData = z.infer<typeof galaSchema>;

const SUGGESTED_AMOUNTS = [50, 75, 100, 250, 500];
const ZEFFY_BASE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-10031";

const EventTickets = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(75);
  const [customAmount, setCustomAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GalaFormData>({ resolver: zodResolver(galaSchema) });

  const donationAmount =
    customAmount ? parseFloat(customAmount) : (selectedAmount ?? 0);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const onSubmit = async (data: GalaFormData) => {
    if (!donationAmount || donationAmount <= 0) {
      toast.error("Please choose or enter a donation amount.");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    const params = new URLSearchParams({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      amount: donationAmount.toString(),
      campaign: "Hearts & Hope Fundraising Gala 2026",
    });
    toast.success(
      `Redirecting to secure donation of $${donationAmount.toFixed(2)} — thank you!`,
      { duration: 4000 }
    );
    window.open(
      `${ZEFFY_BASE_URL}?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ───── Hero card ───── */}
      <section className="bg-white pt-24 pb-0 px-4 md:px-8">
        <div
          className="max-w-4xl mx-auto rounded-3xl relative overflow-hidden bg-[hsl(35,60%,95%)] border border-border/50"
        >
          {/* decorative circles */}
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, hsl(38 92% 50% / 0.3) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, hsl(12 76% 61% / 0.2) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 px-8 py-12 md:py-16 flex flex-col items-center text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-2 bg-white/60 border border-black/5 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-foreground/80 text-sm font-semibold tracking-wide uppercase">
                An Evening of Fine Dining &amp; Purpose
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4 max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hearts &amp; Hope{" "}
              <span className="text-primary">
                Fundraising Gala
              </span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mb-10 leading-relaxed">
              Your donation is your seat at the table. Join us for a
              transformative evening — every contribution directly supports young
              adults transitioning from foster care to independent living.
            </p>

            {/* event pills */}
            <div className="flex flex-wrap justify-center gap-3">
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
                  className="flex items-center gap-2 bg-white/80 border border-black/5 shadow-sm rounded-full px-4 py-2"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-foreground/90 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Main content ───── */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: donation form ── */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-3xl shadow-card border border-border overflow-hidden">
              {/* form header */}
              <div
                className="p-8 border-b border-border"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(12 76% 61% / 0.08), hsl(38 92% 50% / 0.06))",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(12 76% 61%), hsl(38 92% 50%))",
                    }}
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Donate &amp; Reserve Your Seat
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Choose your donation amount below — your contribution is your
                  support for the Gala and our mission.
                </p>
              </div>

              {/* form body */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 space-y-6"
              >
                {/* Donation amount */}
                <div className="space-y-3">
                  <Label className="font-semibold text-base flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-primary" />
                    Choose Your Donation Amount
                  </Label>

                  {/* Preset amounts */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {SUGGESTED_AMOUNTS.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountClick(amount)}
                        className={`py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${
                          selectedAmount === amount
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background hover:border-primary/50 text-foreground"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      placeholder="Or enter a custom amount"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Live total */}
                  {donationAmount > 0 && (
                    <div
                      className="flex items-center justify-between rounded-xl px-5 py-3"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(12 76% 61% / 0.08), hsl(38 92% 50% / 0.06))",
                      }}
                    >
                      <span className="text-sm text-muted-foreground font-medium">
                        Your donation total
                      </span>
                      <span className="text-2xl font-bold text-foreground">
                        ${donationAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="flex items-center gap-1.5 font-semibold"
                    >
                      <User className="w-3.5 h-3.5 text-primary" />
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      {...register("firstName")}
                      className={
                        errors.firstName
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-xs">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="flex items-center gap-1.5 font-semibold"
                    >
                      <User className="w-3.5 h-3.5 text-primary" />
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Smith"
                      {...register("lastName")}
                      className={
                        errors.lastName
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-xs">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="flex items-center gap-1.5 font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    {...register("email")}
                    className={
                      errors.email
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Confirm Email */}
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmEmail"
                    className="flex items-center gap-1.5 font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5 text-primary" />
                    Confirm Email Address
                  </Label>
                  <Input
                    id="confirmEmail"
                    type="email"
                    placeholder="jane@example.com"
                    {...register("confirmEmail")}
                    className={
                      errors.confirmEmail
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                  />
                  {errors.confirmEmail && (
                    <p className="text-destructive text-xs">
                      {errors.confirmEmail.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-1.5 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    {...register("phone")}
                    className={
                      errors.phone
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* CTA */}
                <Button
                  id="donate-gala-btn"
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || donationAmount <= 0}
                  className="w-full gap-2 rounded-xl text-base font-semibold py-6"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(12 76% 61%), hsl(15 55% 50%))",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing…
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5 fill-white/30" />
                      Donate
                      {donationAmount > 0
                        ? ` $${donationAmount.toFixed(2)}`
                        : ""}{" "}
                      &amp; Reserve My Seat
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Secure payment powered by{" "}
                  <strong>Zeffy</strong> — 100% of your donation goes directly
                  to our mission.
                </p>

                {/* Donate alternative */}
                <div className="relative flex items-center gap-3">
                  <div className="flex-1 border-t border-border" />
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    or
                  </span>
                  <div className="flex-1 border-t border-border" />
                </div>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Not attending but still want to help?
                  </p>
                  <button
                    type="button"
                    id="goto-donate-btn"
                    onClick={() => navigate("/#donate")}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    Make a Donation Instead
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Right: sidebar ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Donation impact card */}
            <div
              className="rounded-3xl overflow-hidden shadow-warm"
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
              <div className="p-7 space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-2">
                    Your Donation Impact
                  </p>
                  <div className="space-y-3">
                    {[
                      { amount: "$50", impact: "Home essentials (dishes, cutlery, shower curtain)" },
                      { amount: "$75", impact: "Personal care & comfort items (comforter, sheets)" },
                      { amount: "$100", impact: "Kitchen & bedroom basics (alarm clock, towels)" },
                      { amount: "$250", impact: "Furniture support (dresser, nightstand, table)" },
                      { amount: "$500", impact: "Furnish a full home (bed, sofa, or loveseat)" },
                    ].map(({ amount, impact }) => (
                      <div key={amount} className="flex gap-3">
                        <span className="text-amber-400 font-bold text-sm w-12 shrink-0">
                          {amount}
                        </span>
                        <p className="text-white/70 text-sm">{impact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* tear line */}
                <div className="relative flex items-center my-4">
                  <div className="absolute -left-7 w-5 h-5 rounded-full bg-background" />
                  <div className="flex-1 border-t-2 border-dashed border-white/20" />
                  <div className="absolute -right-7 w-5 h-5 rounded-full bg-background" />
                </div>

                <div className="space-y-3">
                  {[
                    { icon: Calendar, label: "Date", value: "Saturday, October 10, 2026" },
                    { icon: Clock, label: "Time", value: "5:00 PM" },
                    { icon: MapPin, label: "Venue", value: "Pfeiffer Community Center" },
                    { icon: MapPin, label: "Address", value: "301 Blue Bell Rd, Williamstown, NJ 08094" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-white font-medium text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <p className="text-white/40 text-xs uppercase tracking-widest">
                    Transition From The Hearts
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    Non-profit Fundraising Gala · 2026
                  </p>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="bg-card rounded-3xl border border-border p-7 shadow-card">
              <h3
                className="font-bold text-foreground text-lg mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Elegant fine dining experience",
                  "Inspiring stories from foster care alumni",
                  "Live entertainment",
                  "Silent auction benefiting our mission",
                  "Networking with community leaders",
                  "Tax-deductible charitable contribution",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission note */}
            <div
              className="rounded-3xl p-7"
              style={{
                background:
                  "linear-gradient(135deg, hsl(12 76% 61% / 0.08), hsl(38 92% 50% / 0.06))",
              }}
            >
              <Heart className="w-6 h-6 text-primary mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  Your donation is your ticket.
                </strong>{" "}
                Every dollar goes directly toward providing essential household
                furnishings to young adults aging out of the foster care system
                — helping them begin their next chapter with{" "}
                <em>dignity, stability, and hope.</em>
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventTickets;
