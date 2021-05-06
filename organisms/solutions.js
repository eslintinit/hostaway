import { Solution } from 'molecules'
import { solutions } from 'data'

export const Solutions = () => (
  <div className="bg-gray-50 w-full">
    {/* Header */}
    <div className="relative pb-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 md:text-5xl lg:text-6xl">
          Solutions
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
          malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
          Dui, amet, nec sit pulvinar.
        </p>
      </div>
    </div>

    {/* Overlapping cards */}
    <section
      className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <h2 className="sr-only" id="contact-heading">
        Learn more
      </h2>
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        {solutions.map((link) => (
          <div
            key={link.name}
            className="flex flex-col bg-white rounded-2xl shadow-xl"
          >
            <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
              <div className="absolute top-0 p-5 inline-block bg-primary rounded-xl shadow-lg transform -translate-y-1/2">
                <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
              <p className="mt-4 text-base text-gray-500">{link.description}</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
              <a
                href={link.href}
                className="text-base font-medium text-secondaryDark hover:underline"
              >
                Learn more<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)

// export const Solutions = () => (
//   <div className="grid grid-cols-2">
//     <Solution />
//     <Solution />
//     <Solution />
//     <Solution />
//   </div>
// )
