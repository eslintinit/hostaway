import { ValueProposition } from 'molecules'
import { valuePropositions } from 'data'

export const ValuePropositions = () => {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-40 lg:pb-64 w-full">
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
              <ValueProposition feature={feature} />
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
