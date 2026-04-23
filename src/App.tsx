import { BrandsSection } from '@/components/BrandsSection'
import { ContactSection } from '@/components/ContactSection'
import { HeroSection } from '@/components/HeroSection'
import { PartsDeskSection } from '@/components/PartsDeskSection'
import { PartsMarquee } from '@/components/PartsMarquee'
import { PromoDealsSection } from '@/components/PromoDealsSection'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteNav } from '@/components/SiteNav'
import { WhatsAppChatButton } from '@/components/WhatsAppChatButton'
import { WorkshopSection } from '@/components/WorkshopSection'

export default function App() {
  return (
    <>
      <div className="ruban-grain" aria-hidden />
      <SiteNav />
      <main>
        <HeroSection />
        <PromoDealsSection />
        <PartsMarquee />
        <PartsDeskSection />
        <WorkshopSection />
        <BrandsSection />
        <ContactSection />
      </main>
      <WhatsAppChatButton />
      <SiteFooter />
    </>
  )
}
