import { ValueProposition } from 'molecules'
import { valuePropositions } from 'data'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Push to Deploy', icon: CloudUploadIcon },
  { name: 'SSL Certificates', icon: LockClosedIcon },
  { name: 'Simple Queues', icon: RefreshIcon },
  { name: 'Advanced Security', icon: ShieldCheckIcon },
  { name: 'Powerful API', icon: CogIcon },
  { name: 'Database Backups', icon: ServerIcon },
]

export const ValuePropositions = () => {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32 w-full">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        {/*
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Deploy faster
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valuePropositions.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex w-64 h-48 items-center justify-center p-3 bg-gray-white rounded-md shadow-md"></span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// export const ValuePropositions = () => (
//   <div className="py-12 bg-white">
//     <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//       <h2 className="sr-only">A better way to send money.</h2>
//       <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
//         {valuePropositions.map((feature) => (
//           <ValueProposition feature={feature} key={feature.name} />
//         ))}
//       </dl>
//     </div>
//   </div>
// )
