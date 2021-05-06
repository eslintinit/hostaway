import { Button } from 'atoms'

export const CTA = () => (
  <div className="bg-gray-50 w-full">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block">Start your free trial today.</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-primary"
          >
            Get started
          </a>
        </div>
        <div className="ml-3 inline-flex">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md bg-gray-800 hover:bg-gray-900 text-white"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
)
