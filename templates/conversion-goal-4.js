import { CaseStudies } from 'organisms'
import { CTA, ValueProposition } from 'molecules'

export const ConversionGoalFour = () => (
  <div className="flex flex-col items-center">
    <ValueProposition automation fullscreen left />
    <ValueProposition reports fullscreen right />
    <ValueProposition support fullscreen left />
    <CaseStudies />
    <CTA />
  </div>
)
