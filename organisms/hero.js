import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Video, Title } from 'atoms'
import { LogosBar } from 'molecules'
import { features } from 'data'

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
  HomeIcon,
  SpeakerphoneIcon,
  RssIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  IdentificationIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

// className = 'h-8 w-auto'
const HostawayLogo = () => (
  <img
    className="h-7 w-auto -mt-1"
    src="/hostaway.svg"
    alt=""
    style={{
      filter: 'contrast(0.95) brightness(1.1)',
    }}
  />
)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const resources = [
  {
    name: 'Blog',
    href: '#',
    description:
      'Get a better understanding of where your traffic is coming from.',
    icon: RssIcon,
  },
  {
    name: 'Guide',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: BookOpenIcon,
  },
  {
    name: 'Podcasts',
    href: '#',
    description: "Your customers' data will be safe and secure.",
    icon: SpeakerphoneIcon,
  },
  {
    name: 'Live talks',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: PresentationChartLineIcon,
  },
]

const solutions = [
  {
    name: 'For Companies',
    href: '#',
    description:
      'Get a better understanding of where your traffic is coming from.',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'For Individuals',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: UserGroupIcon,
  },
  {
    name: 'For Hotels',
    href: '#',
    description: "Your customers' data will be safe and secure.",
    icon: HomeIcon,
  },
  {
    name: 'For Growth',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: ChartBarIcon,
  },
  {
    name: 'For Marketing',
    href: '#',
    description:
      'Build strategic funnels that will drive your customers to convert',
    icon: SpeakerphoneIcon,
  },
]

// const features = [
//   {
//     name: 'Analytics',
//     href: '#',
//     description:
//       'Get a better understanding of where your traffic is coming from.',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'Engagement',
//     href: '#',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     icon: CursorClickIcon,
//   },
//   {
//     name: 'Security',
//     href: '#',
//     description: "Your customers' data will be safe and secure.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: 'Integrations',
//     href: '#',
//     description: "Connect with third-party tools that you're already using.",
//     icon: ViewGridIcon,
//   },
//   {
//     name: 'Automations',
//     href: '#',
//     description:
//       'Build strategic funnels that will drive your customers to convert',
//     icon: RefreshIcon,
//   },
// ]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'About us',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: IdentificationIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'About', href: '#' },
]

export const Hero = () => {
  return (
    <div className="bg-gray-50 w-full">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full opacity-10"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4 opacity-10"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-3 pb-6">
          <Popover>
            {({ open }) => (
              <>
                <div className="mx-auto px-3 sm:px-0 w-full">
                  <Header />
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryDark">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-0 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-secondaryDark bg-gray-50 hover:bg-gray-100 hover:text-secondaryDark"
                        style={{ color: '#19a7c7' }}
                      >
                        Book a demo call
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <div
            className="mt-16 mx-auto max-w-4xl px-4 sm:mt-10 sm:px-6"
            style={{
              transform: 'scale(0.9)',
              // height: 360
            }}
          >
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-bold text-someGray sm:text-5xl md:text-6xl">
                <span className="block">
                  The <span className="text-brightOrange">All-In-One</span>{' '}
                  solution
                </span>
                <span className="block">for Property Managers</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full" />
          </div>
          <div
            className="max-w-4xl mx-auto px-4 sm:px-6"
            style={{
              height: 360,
            }}
          >
            <Video />
          </div>
        </div>
      </div>
      <div className="bg-gray-000 mt-1">
        <div className="max-w-7xl mx-auto pb-16 px-4 sm:py-16 sm:pt-24 sm:px-6 lg:px-0 flex flex-col items-center w-full">
          <span className="text-gray-400 opacity-90 text-sm mb-4">
            Partnered up with 130+ companies
          </span>
          {/*
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide -mt-2 mb-4">
            Trusted by over 26,000 forward-thinking companies
          </h2>
          */}
          <LogosBar />
        </div>
      </div>
    </div>
  )
}

// <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
//   <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
//     <img
//       className="h-12"
//       src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
//       alt="Tuple"
//     />
//   </div>
//   <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
//     <img
//       className="h-12"
//       src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
//       alt="Mirage"
//     />
//   </div>
//   <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
//     <img
//       className="h-12"
//       src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
//       alt="StaticKit"
//     />
//   </div>
//   <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
//     <img
//       className="h-12"
//       src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
//       alt="Transistor"
//     />
//   </div>
//   <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
//     <img
//       className="h-12"
//       src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
//       alt="Workcation"
//     />
//   </div>
// </div>

// const Header = () => (
//   <nav
//     className="relative flex items-center justify-between sm:h-10 md:justify-center"
//     aria-label="Global"
//   >
//     <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
//       <div className="flex items-center justify-between w-full md:w-auto">
//         <a href="#">
//           <span className="sr-only">Workflow</span>
//           <img
//             style={{ filter: 'contrast(2.2)' }}
//             className="h-8 w-auto sm:h-8"
//             src="data:image/png;base64,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"
//             alt=""
//           />
//         </a>
//         <div className="-mr-2 flex items-center md:hidden">
//           <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryDark">
//             <span className="sr-only">Open main menu</span>
//             <MenuIcon className="h-6 w-6" aria-hidden="true" />
//           </Popover.Button>
//         </div>
//       </div>
//     </div>
//     <div className="hidden md:flex md:space-x-10">
//       {navigation.map((item) => (
//         <a
//           key={item.name}
//           href={item.href}
//           className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer hover:cursor-pointer"
//           style={{ transform: 'scale(1.10)', cursor: 'pointer' }}
//         >
//           {item.name}
//         </a>
//       ))}
//     </div>
//     <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
//       <span className="inline-flex rounded-md shadow-sm">
//         <a
//           href="#"
//           className="text-sm inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-secondaryDark border border-gray-200 bg-white hover:text-primary hover:border-primary"
//           style={{ transform: 'scale(1.05)' }}
//         >
//           Book a demo
//         </a>
//       </span>
//     </div>
//   </nav>
// )

const Header = () => (
  <Popover className="relative w-full">
    {({ open }) => (
      <>
        <div className="mx-auto px-4 sm:px-6 pt-0">
          <div className="flex justify-between items-center py-0 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <HostawayLogo />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryDark">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryDark',
                      )}
                    >
                      <span>Features</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-1 h-4 w-4 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-2xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {features.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-secondaryDark"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryDark',
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-1 h-4 w-4 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-secondaryDark"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryDark',
                      )}
                    >
                      <span>Resources</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-1 h-4 w-4 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-secondaryDark"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryDark',
                      )}
                    >
                      <span>Company</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-1 h-4 w-4 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {company.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-secondaryDark"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                Recent Posts
                              </h3>
                              <ul className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li
                                    key={item.id}
                                    className="text-sm truncate"
                                  >
                                    <a
                                      href={item.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-medium text-secondaryDark hover:text-secondaryDark"
                              >
                                {' '}
                                View all posts{' '}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Login
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondaryDark hover:bg-secondaryDark"
                style={{ background: '#1397b5' }}
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            static
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-0">
                <div className="flex items-center justify-between">
                  <div>
                    <HostawayLogo />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondaryDark">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-secondaryDark"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)
