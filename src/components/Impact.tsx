import { TrendingUp, Heart } from "lucide-react";

const Impact = () => {

    return (
        <section id="impact" className="py-20 md:py-28 bg-gradient-to-br from-secondary via-background to-warm-soft-sage/20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block text-primary font-medium mb-4">Our Impact</span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Making a Real Difference
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Every young adult we support represents a life transformed, a future brightened,
                            and a community strengthened. We are currently gathering data and stories to share with you soon.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-warm-sage/10 border border-primary/10">
                        <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                            Help Us Grow Our Impact
                        </h3>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                            With your support, we can reach even more young adults who need guidance,
                            resources, and a caring community to help them thrive.
                        </p>
                        <a
                            href="/#donate"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-warm transition-all hover:-translate-y-0.5"
                        >
                            <Heart className="w-5 h-5" />
                            Support Our Mission
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
