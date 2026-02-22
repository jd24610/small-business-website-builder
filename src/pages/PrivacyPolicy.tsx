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
                            Privacy Notice
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: February 3, 2026
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none space-y-6">

                        {/* Intro */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <p className="text-muted-foreground leading-relaxed">
                                Transition from the Hearts, Inc. ("Transition from the Hearts," "we," "us," or "our") recognizes the importance of protecting the privacy of our donors and understands the priority you place on the security of your information. This Privacy Notice is designed to inform you about our information practices regarding the collection, use, disclose, and the safeguarding of your information when you visit our website at{" "}
                                <a href="https://transitionfromthehearts.org" className="text-primary hover:underline">https://transitionfromthehearts.org</a>{" "}
                                (the "Site") and participate in our fundraisers or donate to our organization (collectively, "Activities"). By participating in the Activities, you consent to the practices described in this Privacy Notice.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                You may participate in the Activities without submitting personal information. If you choose to provide personal information, we will handle it in accordance with this Privacy Notice and applicable law.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">We collect the following categories of information:</p>

                            <h3 className="font-semibold text-foreground mb-2">A. Information You Provide Directly</h3>
                            <p className="text-muted-foreground leading-relaxed mb-2">This includes information you voluntarily submit, such as:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>Name, email address, phone number, and mailing address</li>
                                <li>Donation information (amount, date, payment method type) and billing address</li>
                                <li>Event registrations or newsletter signups</li>
                                <li>Stories, photos, or other content you choose to submit</li>
                                <li>Any information you send via email or contact forms</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We may ask you to provide certain personal information when you use the Site. In general, we collect personal information you voluntarily provide when, for example, you register to use the Site, modify your profile, contact us or otherwise interact with our services.
                            </p>

                            <h3 className="font-semibold text-foreground mb-2">B. Information Collected Automatically</h3>
                            <p className="text-muted-foreground leading-relaxed mb-2">When you visit the Site, we automatically collect:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Device identifiers</li>
                                <li>Pages visited and referring URLs</li>
                                <li>Time and date of visits</li>
                                <li>Cookie and tracking information</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We use this information to operate, secure, and improve the Site. We do not link IP addresses to personally identifiable information unless required for security or legal compliance. We may use analytics tools to understand how visitors use the Site.
                            </p>

                            <h3 className="font-semibold text-foreground mb-2">C. Cookies and Similar Technologies</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We may use cookies and similar technologies to help us administer our website. A cookie is a data file that is placed on your computer or mobile device when you access our website that uniquely identifies your browser or device. This information allows us to remember your preferences and collect technical information about your use of our website. You are not required to accept cookies; however, disabling cookies may cause some services not to function properly. By using the Site, you are consenting to the placement of cookies in your browser according to this Privacy Notice.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-2">We use personal information for the following purposes:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>Processing donations and issuing acknowledgments</li>
                                <li>Communicating with you about events, updates, and organizational activities</li>
                                <li>Responding to inquiries</li>
                                <li>Operating, maintaining, and improving the Site and Activities</li>
                                <li>Protecting the security and integrity of our systems</li>
                                <li>Complying with legal obligations</li>
                                <li>Supporting our mission and organizational operations</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                We do not sell personal information to third parties. You may unsubscribe from our email communications at any time by using the link provided in our emails or by contacting us directly.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. How We Share Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">We may share information in the following circumstances:</p>

                            <h3 className="font-semibold text-foreground mb-2">A. Service Providers</h3>
                            <p className="text-muted-foreground leading-relaxed mb-2">We may share information with trusted third-party vendors who assist with:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>Payment processing</li>
                                <li>Email communications</li>
                                <li>Device identifiers</li>
                                <li>Pages visited and referring URLs</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mb-6">These providers may only use information as necessary to perform services for us.</p>

                            <h3 className="font-semibold text-foreground mb-2">B. Legal Requirements</h3>
                            <p className="text-muted-foreground leading-relaxed mb-2">We may disclose information:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>When required by law or legal process</li>
                                <li>To comply with government investigations</li>
                                <li>To enforce our Terms &amp; Conditions</li>
                                <li>To protect against misuse or unauthorized use of the Site</li>
                                <li>To protect the rights, safety, or property of Transition from the Hearts, our users, or others</li>
                            </ul>

                            <h3 className="font-semibold text-foreground mb-2">C. With Your Consent</h3>
                            <p className="text-muted-foreground leading-relaxed">We may share information for any purpose you explicitly authorize.</p>
                        </div>

                        {/* Section 4 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Third-Party Websites and Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Site may contain links to third-party websites or services (e.g., donation platforms, retailers, partner organizations). Once you leave the Site, you will be subject to the privacy policy of those websites, which may differ from our own. We encourage you to read the privacy policies of these websites so that you fully understand their information practices.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed mb-2">
                                We use reasonable administrative, technical, and physical safeguards to protect personal information. However, no method of transmission or storage is completely secure. You provide information at your own risk.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                In the event of a data security incident involving personal information, Transition from the Hearts, Inc. will comply with all applicable laws regarding investigation, mitigation, and notification.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Your Privacy Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have certain rights regarding your personal information.</p>

                            <h3 className="font-semibold text-foreground mb-2">A. California Residents (CCPA/CPRA)</h3>
                            <p className="text-muted-foreground leading-relaxed mb-2">If you reside in California, you may have the right to:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>Know what personal information we collect and how we use it</li>
                                <li>Request deletion of personal information</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Opt out of the sale or sharing of personal information (we do not sell personal information)</li>
                                <li>Limit the use of sensitive personal information</li>
                                <li>Not be discriminated against for exercising your rights</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Transition from the Hearts does not collect or use sensitive personal information. To exercise these rights, contact us at{" "}
                                <a href="mailto:youthfurnishings@transitionfromthehearts.org" className="text-primary hover:underline">youthfurnishings@transitionfromthehearts.org</a>.
                            </p>

                            <h3 className="font-semibold text-foreground mb-2">B. European Union / United Kingdom (GDPR)</h3>
                            <p className="text-muted-foreground leading-relaxed mb-2">If you are located in the EU or UK, you may have the right to:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1 mb-4">
                                <li>Access your personal information</li>
                                <li>Request correction or deletion</li>
                                <li>Object to or restrict processing</li>
                                <li>Withdraw consent</li>
                                <li>Data portability</li>
                                <li>Lodge a complaint with a supervisory authority</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                Our legal bases for processing include consent, legitimate interests, and compliance with legal obligations. Your information may be transferred to and processed in the United States.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Site is not directed to children under 13 and we do not knowingly collect personal information from children under 13 without parental consent. If we discover that such information has been inadvertently collected, we will promptly delete that information.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Retention of Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-2">We retain personal information only as long as necessary to:</p>
                            <ul className="list-disc list-inside ml-4 text-muted-foreground space-y-1">
                                <li>Fulfill the purposes described in this Privacy Notice</li>
                                <li>Comply with legal obligations</li>
                                <li>Resolve disputes</li>
                                <li>Maintain appropriate business records</li>
                            </ul>
                        </div>

                        {/* Section 9 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Social Media</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Some areas of the Site may use plugins from social media platforms such as "Tweet" from X and "Like" from Facebook. If you utilize these functions, these social media platforms may collect information about your visit to the Site and connect that information to your account. For more information, please review their privacy policies.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div className="bg-card rounded-2xl p-8 shadow-card">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Notice</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We may need to change this Privacy Notice occasionally in order to address new issues and reflect changes on our website. To ensure that you have the most recent Privacy Notice, please refer back to this page periodically. Where required by law, we will provide additional notice.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                If you object to any such changes, you should discontinue use of the Site. Your continued use of the Site after changes are posted constitutes acceptance of the updated Privacy Notice.
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary/20">
                            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                If you do not want to receive email or other communications from us, or if you have questions or comments on our Privacy Notice, please contact us at:
                            </p>
                            <div className="text-muted-foreground space-y-1">
                                <p className="font-semibold text-foreground">Transition from the Hearts, Inc.</p>
                                <p>1119 Picasso Court</p>
                                <p>Williamstown, NJ 08094</p>
                                <p className="mt-2">
                                    Email:{" "}
                                    <a href="mailto:youthfurnishings@transitionfromthehearts.org" className="text-primary hover:underline">
                                        youthfurnishings@transitionfromthehearts.org
                                    </a>
                                </p>
                                <p>Phone: (856) 668-0777</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
