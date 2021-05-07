import ReactPlayer from 'react-player/youtube'
import { LightBulbIcon } from '@heroicons/react/outline'

// <div className="flex flex-col w-full items-center mb-48 mt-8">
//   <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-6">
//     Watch a webinar from our CEO
//   </h2>
//   <div
//     className="flex justify-center w-min-content h-80 bg-white rounded-2xl shadow-lg bg-clip-border"
//     style={{ zIndex: 1 }}
//   >
//     <ReactPlayer
//       url="https://www.youtube.com/watch?v=0Q_vebnCuvA&ab_channel=Hostaway"
//       controls
//     />
//   </div>
// </div>
export const Webinar = () => (
  <div className="relative mb-60 mt-8">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-0 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-16">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
              <LightBulbIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Watch a webinar hosted by our CEO
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              In the times of Covid-19 the travel industry is shifting. Learn
              how to depend less on major OTAs and keep your business alive
            </p>
          </div>
        </div>
        <div className="mt-8 border-gray-200 border-t pt-6">
          <blockquote>
            <div>
              <p className="text-base text-gray-500">
                &ldquo;The problem is X. In this talk we gonna cover A, B and
                C&rdquo;
              </p>
            </div>
            <footer className="mt-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://www.hostaway.com/static/marcus-60f466f60bcd0ad1ca8684cc45fb78ba.jpg"
                    alt=""
                  />
                </div>
                <div className="text-base font-medium text-gray-700">
                  Marcus Räder, Hostaway CEO
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div
          className="flex justify-center w-min-content h-80 bg-white rounded-2xl shadow-lg bg-clip-border mt-20"
          style={{ zIndex: 1 }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=0Q_vebnCuvA&ab_channel=Hostaway"
            controls
          />
        </div>
      </div>
    </div>
  </div>
)
