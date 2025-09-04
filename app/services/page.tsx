import Header from "@/components/header"
import Footer from "@/components/footer"
import SanitaryContent from "@/components/sanitary-content"
import ContactForm from "@/components/contact-form"

export default function SanitaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SanitaryContent />
      <ContactForm />
      <Footer />
    </main>
  )
}
