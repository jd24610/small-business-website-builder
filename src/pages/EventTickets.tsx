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
  Ticket,
  Heart,
  CheckCircle2,
  Users,
  Star,
  ArrowRight,
  Mail,
  Phone,
  User,
  Minus,
  Plus,
} from "lucide-react";
import { toast } from "sonner";

/* ---------- Zod schema ---------- */
const ticketSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    confirmEmail: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(10, "Please enter a valid phone number")
      .regex(/^[\d\s\-().+]+$/, "Please enter a valid phone number"),
    quantity: z.number().min(1).max(10),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Email addresses do not match",
    path: ["confirmEmail"],
  });

type TicketFormData = z.infer<typeof ticketSchema>;

const TICKET_PRICE = 75;

const EventTickets = () => {
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    defaultValues: { quantity: 1 },
  });

  const adjustQuantity = (delta: number) => {
    const next = Math.max(1, Math.min(10, quantity + delta));
    setQuantity(next);
    setValue("quantity", next);
  };

  const ZEFFY_BASE_URL =
    "https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-10031";

  const onSubmit = async (data: TicketFormData) => {
    setIsSubmitting(true);
    // Small delay for UX feedback, then redirect to Zeffy for real payment
    await new Promise((r) => setTimeout(r, 800));
    const total = quantity * TICKET_PRICE;
    const params = new URLSearchParams({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      amount: total.toString(),
      quantity: quantity.toString(),
      campaign: "Hearts & Hope Fundraising Gala 2026",
    });
    toast.success(
      `Redirecting to secure payment for ${quantity} ticket${quantity > 1 ? "s" : ""} — $${total.toFixed(2)}`,
      { duration: 4000 }
    );
    window.open(`${ZEFFY_BASE_URL}?${params.toString()}`, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  const total = quantity * TICKET_PRICE;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ───── Hero ───── */}
      <section
        className="relative min-h-[72vh] flex items-center overflow-hidden pt-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(20 35% 10%) 0%, hsl(15 40% 16%) 40%, hsl(38 50% 18%) 100%)",
        }}
      >
        {/* decorative circles */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, hsl(38 92% 50%) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, hsl(12 76% 61%) 0%, transparent 70%)",
          }}
        />
        {/* floating dots pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-300 text-sm font-semibold tracking-wide uppercase">
              An Evening of Fine Dining &amp; Purpose
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl"
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
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Join us for a transformative evening supporting young adults as
            they transition from foster care to independent living.
          </p>

          {/* event pills */}
          <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* ───── Main content ───── */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Left: form ── */}
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
                    <Ticket className="w-5 h-5 text-white" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Reserve Your Seat
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  Complete the form below to secure your tickets. A
                  confirmation will be sent to your email.
                </p>
              </div>

              {/* form body */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 space-y-6"
              >
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

                {/* Ticket quantity */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-1.5 font-semibold">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    Number of Tickets
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-muted rounded-xl p-1">
                      <button
                        type="button"
                        id="decrease-quantity"
                        onClick={() => adjustQuantity(-1)}
                        disabled={quantity <= 1}
                        className="w-9 h-9 rounded-lg flex items-center justify-center bg-background border border-border hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-lg font-bold text-foreground">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        id="increase-quantity"
                        onClick={() => adjustQuantity(1)}
                        disabled={quantity >= 10}
                        className="w-9 h-9 rounded-lg flex items-center justify-center bg-background border border-border hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-muted-foreground text-sm">
                      × $75.00 each
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Total & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Due</p>
                    <p className="text-3xl font-bold text-foreground">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                  <Button
                    id="purchase-tickets-btn"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="gap-2 rounded-xl px-8 text-base font-semibold"
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
                        Purchase Tickets
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  🔒 Secure payment powered by{" "}
                  <strong>Zeffy</strong> — 100% of your ticket purchase goes
                  directly to our mission.
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
            {/* Ticket card */}
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      Ticket Price
                    </p>
                    <p className="text-5xl font-bold text-white">$75</p>
                    <p className="text-white/50 text-sm">per person</p>
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

                <div className="space-y-4">
                  {[
                    {
                      icon: Calendar,
                      label: "Date",
                      value: "Saturday, October 10, 2026",
                    },
                    { icon: Clock, label: "Time", value: "5:00 PM" },
                    {
                      icon: MapPin,
                      label: "Venue",
                      value: "Pfeiffer Community Center",
                    },
                    {
                      icon: MapPin,
                      label: "Address",
                      value: "301 Blue Bell Rd, Williamstown, NJ 08094",
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-white font-medium text-sm">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* tear line */}
                <div className="relative flex items-center my-4">
                  <div className="absolute -left-7 w-5 h-5 rounded-full bg-background" />
                  <div className="flex-1 border-t-2 border-dashed border-white/20" />
                  <div className="absolute -right-7 w-5 h-5 rounded-full bg-background" />
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
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
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
                  Every ticket matters.
                </strong>{" "}
                Your attendance directly supports our mission to provide
                essential household furnishings to young adults aging out of
                the foster care system — helping them begin their next chapter
                with <em>dignity, stability, and hope.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zeffy handles payment — no local confirmation modal needed */}

      <Footer />
    </div>
  );
};

export default EventTickets;
