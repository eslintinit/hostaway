import { CheckIcon } from '@heroicons/react/outline'
import { moreFeatures } from 'data'

export const MoreFeatures = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">
            All-in-one platform
          </h2>
          <p className="mt-4 text-2xl text-gray-500">
            Worry less about your properties with our powerful system
          </p>
        </div>
        <dl className="mt-32 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8">
          {moreFeatures.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
