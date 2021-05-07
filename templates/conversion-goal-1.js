import { Hero, ValuePropositions, Testimonials } from 'organisms'
import { CTA } from 'molecules'

export const ConversionGoalOne = () => (
  <div className="flex flex-col items-center">
    <Hero />
    <ValuePropositions />
    <CTA withReview />
    {/*
    <Testimonials />
    */}
  </div>
)
