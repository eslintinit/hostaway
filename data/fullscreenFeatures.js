import {
  PresentationChartBarIcon,
  ChipIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  SupportIcon,
} from '@heroicons/react/outline'

export const fullscreenFeatures = [
  {
    name: 'channel-manager',
    title: 'Operate across 85+ channels',
    description: (
      <div className="flex flex-col">
        Hostaway’s powerful channel manager automatically ensures calendar
        availability and rates are up-to-date and consistent across all sites,
        so you no longer have to do manual cross checking. Track and manage
        listings across multiple channels from one place. Leverage multiple
        channels to increase bookings, with less effort.
        <br />
        <br />
        <a className="text-secondaryDark hover:underline font-medium cursor-pointer">
          See all supported channels
        </a>
      </div>
    ),
    icon: ChipIcon,
    image: '',
    align: 'left',
  },
  {
    name: 'automation',
    title: 'Automate everything',
    description: (
      <span>
        Now that Hostaway has integrated with Zapier, property managers can
        automate huge parts of their businesses by integrating{' '}
        <a
          href="https://zapier.com/apps/hostaway/integrations"
          target="_blank"
          className="text-primary text-medium hover:underline cursor-pointer"
        >
          with 3000+ web applications!
        </a>
        <br />
        <br />
        The list of integrations includes Google Drive, Gmail, Slack,
        Salesforce, MailChimp, Dropbox, Trello, Quickbooks, and thousands more.
      </span>
    ),
    icon: SparklesIcon,
    image:
      'https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/01/zapier.jpg',
    align: 'right',
  },
  {
    style: { marginTop: 108, marginBottom: 108 },
    name: 'reporting',
    title: 'Experience your growth',
    description:
      'Set rates like a pro. Use our partner integrations with Beyond Pricing, PriceLabs or Wheelhouse to know exactly the right rate to charge to maximize booking revenue. Develop a complete pricing strategy and update prices instantly for open dates to maximize occupancy.',
    icon: PresentationChartBarIcon,
    image: 'https://www.liftylife.ca/wp-content/uploads/2021/02/image.png',
    align: 'left',
  },
  {
    name: 'support',
    title: 'Excellent support',
    description: (
      <div className="flex flex-col">
        <span>
          <strong className="font-medium text-secondaryDark">
            Our customers' success is our success!
          </strong>
          <br /> <br />
          Believe it or not, this is one of our values at Hostaway and this is
          what everyone who joins Hostaway team learns on day one! We take pride
          in providing industry-leading customer care, to make sure we help our
          customers as much as we can with growth of their business.
          <br /> <br />
          <span className="font-medium text-gray-800">
            Deal with just one company
          </span>
          . Hostaway will provide you a dedicated person for all your enquiries.
          All your questions in one place.
          <br /> <br />
          <a className="text-primary hover:underline cursor-pointer font-medium">
            Let's get in touch!
          </a>
        </span>
        {/*
          <div className="flex justify-between items-center">
            <img
              src="https://ci5.googleusercontent.com/proxy/sxvIOmN1juOF1VVKJqTdDlHeSLk36vKmI3mykpO0Rex3z-zGx01P5A_kV25N9AdrUwXHmKVe-s5qBmNycCbAYKKZ5UxOXXltlras9oilBhWtqE7ei_VhT4JIusc8mfqQNnALjOvo68RG6zW5RwwyHZ4Whib4_8Cr3Ne-ReIlKbpqBAaLF1U=s0-d-e1-ft#https://hs-3883982.f.hubspotstarter.net/hub/3883982/hubfs/download-1.png?width=246&upscale=true&name=download-1.png"
              className="w-24 h-auto"
            />
          </div>
          */}
      </div>
    ),
    icon: SupportIcon,
    image:
      'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    align: 'right',
  },
]
