import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

const channels = [
  {
    src: '/icons/bookingcom.svg',
    size: 'h-8',
  },

  {
    src:
      'https://csvcus.homeaway.com/rsrcs/cdn-logos/5.4.0/sitename/vrbo/web/logo.svg',
    size: 'h-9',
  },
  {
    src: 'https://cdn.worldvectorlogo.com/logos/homeaway-2.svg',
    size: 'h-9',
  },

  {
    src: '/icons/airbnb.svg',
    size: 'h-11',
  },
  {
    src:
      'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
    size: 'h-9',
  },
  {
    src: 'https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2',
    size: 'h-8',
  },
]

export const ValuePropositionFullscreen = ({ align, ...props }) => {
  return (
    <div className="relative bg-white py-8 overflow-hidden w-full">
      {align === 'left' && <Left {...props} />}
      {align === 'right' && <Right {...props} />}
    </div>
  )
}
const Left = ({ title, img, name, description, style = {}, ...feature }) => (
  <div className="relative" style={style}>
    <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-16">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {description ||
                `Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
              bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
              sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
              Lectus viverra dui tellus ornare pharetra.`}
            </p>
            {/*
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Get started
                    </a>
                  </div>
                  */}
          </div>
        </div>
        {/*
              <div className="mt-8 border-gray-200 pt-6">
                <blockquote>
                  <div>
                    <p className="text-base text-gray-500">
                      &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                      sed diam. Sit orci risus aenean curabitur donec aliquet.
                      Mi venenatis in euismod ut.&rdquo;
                    </p>
                  </div>
                  <footer className="mt-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                          alt=""
                        />
                      </div>
                      <div className="text-base font-medium text-gray-700">
                        Marcia Hill, Digital Marketing Manager
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
              */}
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div
          className={`pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full rounded-xl flex justify-center items-center overflow-hidden  ${
            name !== 'channel-manager' ? 'shadow-md' : ''
          }`}
          style={
            name !== 'channel-manager'
              ? {
                  minHeight: '558px',
                }
              : { minHeight: '420px' }
          }
        >
          {name === 'channel-manager' ? (
            <div className="flex flex-col w-full items-center">
              <div className="w-full mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                {channels.map((channel) => (
                  <div
                    className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 flex items-center justify-center"
                    style={
                      {
                        // filter: 'grayscale(1)',
                        // opacity: '0.7',
                      }
                    }
                  >
                    <img
                      className={channel.size}
                      src={channel.src}
                      alt="Workcation"
                    />
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm -mb-8 mt-4 hover:underline cursor-pointer">
                and many more
              </span>
            </div>
          ) : (
            <img
              className="ml-24 h-64 w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none left-auto right-auto"
              src={img}
              style={
                name === 'reporting'
                  ? { width: '100%', height: 'auto', marginLeft: 0 }
                  : {}
              }
              alt="Inbox user interface"
            />
          )}
        </div>
      </div>
    </div>
  </div>
)

const Right = ({ title, img, name, description, style = {}, ...feature }) => (
  <div className="w-full" style={style}>
    <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-16">
      <div
        className={`px-4 max-w-xl mx-auto sm:px-6 lg:py-${
          name === 'support' ? '16' : '32'
        } lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2`}
      >
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
              <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              {description ||
                `Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
              bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
              sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
              Lectus viverra dui tellus ornare pharetra.`}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div
          className={`pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full flex justify-center items-center overflow-hidden rounded-xl ${
            name === 'support' ? 'shadow-md' : ''
          }`}
          style={
            name === 'support'
              ? {
                  width: '80%',
                  margin: 'auto',
                }
              : {}
          }
        >
          <img
            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none left-auto right-auto"
            src={img}
            style={
              name === 'automation'
                ? {
                    // marginRight: '-384px',
                    // width: '286%',
                    height: '306px',
                    /* margin-bottom: 400px; */
                    marginTop: '8px',
                  }
                : name === 'reporting'
                ? {
                    width: '100%',
                    height: 'auto',
                    marginLeft: 0,
                  }
                : {}
            }
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
)
