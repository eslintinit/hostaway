import { BlogPosts, Support, FAQ } from 'organisms'
import { Podcast, Guide, SubscribeForm, CTA } from 'molecules'

const premierPartners = [
  {
    src: '/icons/bookingcom.svg',
    size: 'h-9',
  },
]

const preferredPartners = [
  {
    src:
      'https://csvcus.homeaway.com/rsrcs/cdn-logos/5.4.0/sitename/vrbo/web/logo.svg',
    size: 'h-10',
  },
  {
    src: 'https://adthink.com/wp-content/uploads/2020/01/homeaway.png',
    size: 'h-16',
  },
]

const officialPartners = [
  {
    src: '/icons/airbnb.svg',
    size: 'h-11',
  },
  {
    src:
      'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
    size: 'h-10',
  },
  {
    src: 'https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2',
    size: 'h-9',
  },
]

export const Engagement = () => (
  <div className="flex flex-col items-center pb-20">
    {/*
    <Podcast />
     */}
    <Guide />
    <BlogPosts />
    <SubscribeForm />
    <FAQ />
    {/*
    <div className="mt-32 border-t w-full">
      <div className="flex flex-col items-center mb-12">
        <div className="flex flex-col items-center  py-16 pt-24 border-b w-full">
          <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Our <span className="">Premier</span> partners
          </h2>
          <Logos logos={premierPartners} />
        </div>
        <div className="flex flex-col items-center  py-16 pt-24 border-b w-full">
          <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Preferred partners
          </h2>
          <Logos logos={preferredPartners} />
        </div>
        <div className="flex flex-col items-center py-16 pt-24 w-full">
          <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Official partners
          </h2>
          <Logos logos={officialPartners} />
        </div>
      </div>
    </div>
    */}
    <CTA bg="white" />
  </div>
)

export default function Logos({ logos }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-12 grid-cols-2 md:grid-cols-6 lg:grid-cols-${
            logos.length > 6 ? 7 : logos.length
          } auto-cols-max`}
        >
          {logos.map((logo) => (
            <div
              className="col-span-1 flex justify-center items-center md:col-span-2 lg:col-span-1"
              key={logo.src}
            >
              <img className={logo.size} src={logo.src} alt="Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
