import { Footer } from 'components/molecules'
import {
  Hero,
  ValuePropositionsThreeColumn,
  CTACentered,
  Testimonials,
  FourColumnsGridFeatures,
  ZapierIntegrations,
  MobileAppSection,
  SimpleFeatureGrid,
  Reviews,
  Partners,
} from 'components/organisms'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ValuePropositionsThreeColumn />
      <CTACentered />
      <Testimonials />
      <FourColumnsGridFeatures />
      <ZapierIntegrations />
      <MobileAppSection />
      <CTACentered />
      <SimpleFeatureGrid />
      <Reviews />
      <CTACentered />
      <Partners />
      <Footer />
    </div>
  )
}
