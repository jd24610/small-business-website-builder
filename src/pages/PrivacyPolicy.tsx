const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <a
                            href="/"
                            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
                        >
                            ← Back to Home
                        </a>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Our Commitment to Privacy
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                At Transition From The Hearts, we are committed to protecting your privacy and
                                ensuring the security of your personal information. This Privacy Policy explains
                                how we collect, use, and safeguard your data when you interact with our website
                                and services.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Information We Collect
                            </h2>
                            <div className="text-muted-foreground leading-relaxed space-y-4">
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                                    <p>
                                        When you contact us or make a donation, we may collect:
                                    </p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Name and contact information (email, phone number)</li>
                                        <li>Donation amount and payment information</li>
                                        <li>Messages or inquiries you send to us</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Automatic Information</h3>
                                    <p>
                                        We may automatically collect certain technical information when you visit our website:
                                    </p>
                                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                        <li>Browser type and version</li>
                                        <li>Device information</li>
                                        <li>IP address and location data</li>
                                        <li>Pages visited and time spent on our site</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                How We Use Your Information
                            </h2>
                            <div className="text-muted-foreground leading-relaxed">
                                <p className="mb-3">We use the information we collect to:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Process donations and provide receipts</li>
                                    <li>Respond to your inquiries and requests</li>
                                    <li>Send updates about our programs and impact (with your consent)</li>
                                    <li>Improve our website and services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Data Security
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement appropriate technical and organizational measures to protect your
                                personal information against unauthorized access, alteration, disclosure, or
                                destruction. However, no method of transmission over the Internet is 100% secure,
                                and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Third-Party Services
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may use third-party service providers to process donations or analyze website
                                traffic. These providers have their own privacy policies and are responsible for
                                their own data practices. We encourage you to review their privacy policies.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Your Rights
                            </h2>
                            <div className="text-muted-foreground leading-relaxed">
                                <p className="mb-3">You have the right to:</p>
                                <ul className="list-disc list-inside ml-4 space-y-2">
                                    <li>Access the personal information we hold about you</li>
                                    <li>Request correction of inaccurate information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Withdraw consent for data processing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Cookies
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may use cookies to enhance your browsing experience. You can control
                                cookie settings through your browser preferences. Disabling cookies may affect
                                certain features of our website.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Children's Privacy
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website is not intended for children under 13 years of age. We do not
                                knowingly collect personal information from children under 13. If you believe
                                we have collected information from a child under 13, please contact us immediately.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Changes to This Policy
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any
                                changes by posting the new Privacy Policy on this page and updating the "Last
                                updated" date.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/20">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Contact Us
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you have any questions about this Privacy Policy or our data practices,
                                please contact us:
                            </p>
                            <div className="text-muted-foreground">
                                <p className="font-semibold text-foreground">Transition From The Hearts</p>
                                <p>119 Picasso Court</p>
                                <p>Williamstown, New Jersey 08094</p>
                                <p className="mt-2">Email: [Contact email to be added]</p>
                                <p>Phone: [Contact phone to be added]</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
