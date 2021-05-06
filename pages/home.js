import { Header, Footer } from 'molecules'
import {
  ConversionGoalOne,
  ConversionGoalTwo,
  ConversionGoalThree,
  ConversionGoalFour,
  Engagement,
} from 'templates'

const HomeNew = () => (
  <div className="flex flex-col align-center w-full">
    {/*
     */}
    <Header />
    <ConversionGoalOne />
    <ConversionGoalTwo />
    <ConversionGoalThree />
    <ConversionGoalFour />
    <Engagement />
    <Footer />
    {/*
     */}
  </div>
)

export default HomeNew
