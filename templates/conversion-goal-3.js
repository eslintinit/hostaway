import { MoreFeatures, Integrations, Partners } from 'organisms'
import { CTA } from 'molecules'

export const ConversionGoalThree = () => (
  <div className="flex flex-col items-center">
    <MoreFeatures />
    <Integrations />
    <Partners />
    <CTA form />
  </div>
)
