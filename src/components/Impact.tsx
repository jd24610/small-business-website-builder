import { TrendingUp, Users, GraduationCap, Home, Briefcase, Heart } from "lucide-react";

const Impact = () => {
    const impactStats = [
        {
            icon: Users,
            number: "500+",
            label: "Young Adults Supported",
            description: "Individuals who have received mentorship, resources, and guidance through our programs.",
        },
        {
            icon: GraduationCap,
            number: "85%",
            label: "Educational Success",
            description: "Of participants have enrolled in or completed educational programs with our support.",
        },
        {
            icon: Briefcase,
            number: "200+",
            label: "Career Placements",
            description: "Young adults who secured employment or internships through our career development programs.",
        },
        {
            icon: Home,
            number: "150+",
            label: "Housing Assistance",
            description: "Individuals helped with housing resources, from emergency shelter to stable housing solutions.",
        },
    ];

    const testimonials = [
        {
            quote: "Transition From The Hearts gave me the confidence and tools I needed to pursue my dreams. I'm now in college and working part-time, something I never thought possible.",
            name: "Sarah M.",
            age: 22,
            achievement: "College Student & Part-time Employee",
        },
        {
            quote: "The mentorship program changed my life. Having someone believe in me and guide me through tough decisions made all the difference.",
            name: "Marcus J.",
            age: 24,
            achievement: "Full-time Career Professional",
        },
        {
            quote: "When I aged out of foster care, I felt lost. This organization provided not just resources, but a community that truly cares. I now have stable housing and a job I love.",
            name: "Emily R.",
            age: 21,
            achievement: "Independent Living & Employed",
        },
    ];

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
                            and a community strengthened. Here's the impact we've made together.
                        </p>
                    </div>

                    {/* Impact Stats Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {impactStats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <stat.icon className="w-7 h-7 text-primary" />
                                </div>
                                <div className="font-display text-3xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                    {stat.label}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Success Stories Section */}
                    <div>
                        <div className="text-center mb-12">
                            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                Success Stories
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Real stories from real people whose lives have been transformed through our programs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.name}
                                    className="p-6 rounded-2xl bg-card shadow-card hover:shadow-soft transition-all duration-300"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Heart className="w-8 h-8 text-primary mb-4 fill-current opacity-20" />
                                    <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="border-t border-border pt-4">
                                        <p className="font-semibold text-foreground">{testimonial.name}, {testimonial.age}</p>
                                        <p className="text-sm text-primary font-medium mt-1">{testimonial.achievement}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
                            href="#donate"
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
