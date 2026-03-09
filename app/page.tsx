import Navbar from '@/components/Navbar'
import WhatsappFloatingButton from '@/components/WhatsappFloatingButton'
import About from '@/components/sections/About'
import Appointments from '@/components/sections/Appointments'
import Faq from '@/components/sections/Faq'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Locations from '@/components/sections/Locations'
import Treatments from '@/components/sections/Treatments'

export default function Page() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft"
      >
        Ir al contenido
      </a>

      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Treatments />
        <Locations />
        <Appointments />
        <Faq />
      </main>

      <Footer />
      <WhatsappFloatingButton />
    </>
  )
}
