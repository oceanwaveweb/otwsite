import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AccessibilityPage() {
    return (
        <main className="min-h-screen bg-black text-white font-satoshi">
            <Header />
            <div className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Accessibility Statement</h1>
                        <p className="text-gray-400 text-lg">Last updated: January 23, 2026</p>
                    </div>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Our Commitment</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            OTW Delivery & Distribution is committed to ensuring that our website is accessible to all visitors, including individuals with disabilities. We strive to provide a positive and inclusive digital experience for everyone by following recognized accessibility standards and best practices.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Standards and Compliance</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA, as well as applicable laws and regulations under the Americans with Disabilities Act (ADA) and Section 508 of the Rehabilitation Act. As guidelines, laws, and regulations evolve, our policies and procedures will continue to evolve as well.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Because accessibility standards and technologies are constantly changing, we regularly review and update our website to improve usability and accessibility wherever possible. For the best experience, we recommend using the most current version of your browser and assistive technology.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Ongoing Efforts</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Our team makes ongoing efforts to identify and address accessibility barriers. This includes periodic reviews and improvements to ensure the site remains user-friendly and aligned with current standards. We also continue to stay informed on accessibility updates and evolving best practices as part of our development process.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            If you experience any difficulty accessing content or using any feature on this website, or if you have feedback regarding accessibility, please contact us at <a href="mailto:otwdelivered@gmail.com" className="text-blue-500 hover:text-blue-400 transition-colors underline">otwdelivered@gmail.com</a> and we will respond as soon as possible.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Scope</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            This accessibility statement applies to all pages, images, and digital content found under the OTW Delivery & Distribution domain.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-gray-800">
                        <p className="text-gray-400">
                            Thank you for visiting. If there is anything we can do to improve your experience, please reach out.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
