import { Button, Input } from 'atoms'

export const SubscribeForm = () => (
  <div className="bg-white pt-16 sm:pt-24 w-full">
    <div className="relative sm:py-16">
      <div aria-hidden="true" className="hidden sm:block">
        <svg
          className="absolute top-8 left-1/2 -ml-3"
          width={404}
          height={392}
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
            height={392}
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative rounded-2xl px-6 py-10 bg-secondaryDark overflow-hidden shadow-xl sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="text-secondaryDark text-opacity-90"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                style={{ color: '#3791ad' }}
              />
              <path
                className="text-indigo-700 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                style={{ color: '#1b768c3d' }}
              />
            </svg>
          </div>
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Never miss a beat!
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-100">
                Subscribe for more news from Property Rental industry. <br />
                We provide something new and useful each week!
              </p>
            </div>
            <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="cta_email" className="sr-only">
                  Email address
                </label>
                <input
                  id="cta_email"
                  type="email"
                  className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                  style={{
                    background: '#a0def1',
                    color: '#135a6fcc',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// export const SubscribeForm = () => (
//   <div className="flex">
//     <Input />
//     <Button className="ml-2">Subscribe</Button>
//   </div>
// )
