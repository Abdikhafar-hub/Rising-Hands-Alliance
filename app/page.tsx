import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Values from "@/components/values"
import Projects from "@/components/projects"
import CallToAction from "@/components/call-to-action"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <Values />
      <section id="programs">
        <Projects />
      </section>
      <section id="donate">
        <CallToAction />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}

