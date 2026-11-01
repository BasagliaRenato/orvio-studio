import { ContactSection } from '@/components/home/contact-section'
import { Hero } from '@/components/home/hero'
import { ProcessSection } from '@/components/home/process-section'
import { ServicesSection } from '@/components/home/services-section'
import { StudioSection } from '@/components/home/studio-section'
import { WorkSection } from '@/components/home/work-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <StudioSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </>
  )
}
