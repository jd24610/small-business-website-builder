const TermsOfService = () => {
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
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: February 3, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Agreement to Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing and using the Transition From The Hearts website, you agree to be
                                bound by these Terms of Service and all applicable laws and regulations. If you
                                do not agree with any of these terms, you are prohibited from using this site.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Use of Website
                            </h2>
                            <div className="text-muted-foreground leading-relaxed space-y-4">
                                <p>
                                    This website is provided for informational purposes about our nonprofit
                                    organization and the services we offer to young adults in our community.
                                </p>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Permitted Uses</h3>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>Learning about our programs and services</li>
                                        <li>Making donations to support our mission</li>
                                        <li>Contacting us with inquiries</li>
                                        <li>Sharing our content on social media</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">Prohibited Uses</h3>
                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                        <li>Using the site for any unlawful purpose</li>
                                        <li>Attempting to gain unauthorized access to our systems</li>
                                        <li>Transmitting viruses or malicious code</li>
                                        <li>Harassing or interfering with other users</li>
                                        <li>Misrepresenting your affiliation with our organization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Donations
                            </h2>
                            <div className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    All donations made through our website are voluntary and non-refundable unless
                                    required by law. Donations support our mission to empower young adults through
                                    life's transitions.
                                </p>
                                <p>
                                    As a registered nonprofit organization, donations may be tax-deductible to the
                                    extent allowed by law. We will provide donation receipts for your records.
                                </p>
                                <p>
                                    We reserve the right to refuse or return any donation at our discretion.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Intellectual Property
                            </h2>
                            <div className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    The content on this website, including text, graphics, logos, images, and
                                    software, is the property of Transition From The Hearts and is protected by
                                    copyright and other intellectual property laws.
                                </p>
                                <p>
                                    You may not reproduce, distribute, modify, or create derivative works from our
                                    content without our express written permission, except for personal,
                                    non-commercial use or sharing to promote our mission.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Disclaimer of Warranties
                            </h2>
                            <div className="text-muted-foreground leading-relaxed space-y-3">
                                <p>
                                    This website is provided "as is" without any warranties, express or implied.
                                    We make no guarantees about the accuracy, reliability, or completeness of the
                                    information on this site.
                                </p>
                                <p>
                                    While we strive to keep the information up-to-date and correct, we make no
                                    representations or warranties of any kind about the completeness, accuracy,
                                    reliability, or availability of the website.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Limitation of Liability
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To the fullest extent permitted by law, Transition From The Hearts shall not be
                                liable for any indirect, incidental, special, consequential, or punitive damages
                                arising from your use of this website or any services we provide.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Third-Party Links
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may contain links to third-party websites. These links are provided
                                for your convenience only. We do not endorse or assume responsibility for the
                                content, privacy policies, or practices of any third-party sites.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Privacy
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your use of this website is also governed by our Privacy Policy. Please review
                                our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> to
                                understand how we collect, use, and protect your personal information.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Modifications to Terms
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. Changes will
                                be effective immediately upon posting to this page. Your continued use of the
                                website after any changes constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card mb-8">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Governing Law
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms of Service shall be governed by and construed in accordance with the
                                laws of the State of New Jersey, United States, without regard to its conflict
                                of law provisions.
                            </p>
                        </div>

                        <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/20">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                                Contact Information
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="text-muted-foreground">
                                <p className="font-semibold text-foreground">Transition From The Hearts</p>
                                <p>1119 Picasso Court</p>
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

export default TermsOfService;
