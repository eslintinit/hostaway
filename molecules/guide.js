/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

export const Guide = () => (
  <div className="relative bg-white pt-16 pb-32 overflow-hidden">
    <div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                <SparklesIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                The Complete Guide to Starting & Growing Vacation Rental
                Business
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Managing more than one vacation rental home takes a lot of time
                and energy to do properly. If you want to fulfill all their
                holiday dreams, consider listening to what other rental owners
                have to share about their successes.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex text-base font-medium rounded-md text-primary hover:underline"
                >
                  Download guide
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://uploads-ssl.webflow.com/5ddbc245d31f0fac196e214d/5ddbc245d31f0f39106e219d_Ebook-%2520The%2520Property%2520Managers%2520Guide%2520to%2520Maximizing%2520Booking%2520Income-p-500.jpeg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)
