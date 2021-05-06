import { CaseStudies } from 'organisms'
import { CTA, ValueProposition, Stats } from 'molecules'

export const ConversionGoalFour = () => (
  <div className="flex flex-col items-center">
    <ValueProposition
      feat="automation"
      title="Automate everything"
      img="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/01/zapier.jpg"
      fullscreen
      right
    />
    <ValueProposition
      title="Powerful reporting"
      img="https://www.liftylife.ca/wp-content/uploads/2021/02/image.png"
      fullscreen
      left
    />
    <ValueProposition
      title="Excellent support"
      img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      fullscreen
      right
    />
    <CaseStudies />
    <CTA />
    {/*
    <div className="grid grid-cols-4 w-full px-64">
      <span>For hotets</span>
      <span>For hotets</span>
      <span>For hotets</span>
      <span>For hotets</span>
    </div>
    <Stats />
    */}
  </div>
)
