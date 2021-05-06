import { Button } from 'atoms'

export const CTA = ({ bg = 'gray-50' }) => (
  <div className={`bg-${bg} w-full`}>
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block">Schedule a demo call now</span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-primary"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>
)
