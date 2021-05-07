import { Logo } from 'atoms'

export const LogosBar = () => (
  <div className="px-4 sm:px-6 lg:px-0 mt-2">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
      {partners.map((partner) => (
        <Logo
          logo={partner}
          key={partner.src}
          style={
            partner.style || {
              filter: 'grayscale(1)',
              opacity: '0.7',
            }
          }
        />
      ))}
    </div>
  </div>
)
// <Logo channel="airbnb" />
// <Logo channel="airbnb" />
// <Logo channel="airbnb" />
// <Logo channel="airbnb" />
// <Logo channel="airbnb" />
// <Logo channel="airbnb" />

const partners = [
  {
    src: '/icons/bookingcom.svg',
    size: 'h-8',
  },
  {
    src: '/icons/airbnb.svg',
    size: 'h-10',
  },

  {
    src:
      'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
    size: 'h-9',
    style: {
      opacity: 0.5,
      filter: 'grayscale(1)',
    },
  },
  {
    src:
      'https://csvcus.homeaway.com/rsrcs/cdn-logos/5.4.0/sitename/vrbo/web/logo.svg',
    size: 'h-8',
  },
  {
    src: 'https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2',
    size: 'h-7',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/homeaway-2.svg',
    size: 'h-8',
  },
]
