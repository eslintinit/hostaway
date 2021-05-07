// basically pain points
import { Feature } from 'molecules'
import { features } from 'data'

export const Features = () => {
  return (
    <div className="w-full bg-gray-50">
      <div
        className="rounded-3xl max-w-4xl mx-auto px-4 py-16 sm:px-12 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-16 bg-gradient-to-br from-light-blue-400 to-indigo-500"
        style={{
          // full blue/green
          // backgroundImage: 'linear-gradient(to bottom, #3791ad, #18657d)',

          // blue/green to purple
          // backgroundImage: 'linear-gradient(to bottom, #3791ad, rgb(78 53 76))',
          // backgroundImage: 'linear-gradient(rgb(55, 145, 173), #3e183bf0)',
          backgroundImage: 'linear-gradient(rgb(55, 145, 173), #131012f0)',
        }}
      >
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Robust Property Management Software
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-50">
          You can automate almost everything with Hostaway
        </p>
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <Feature feature={feature} key={feature.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

// export const Features = () => (
//   <div>
//     <Feature />
//     <Feature />
//     <Feature />
//   </div>
// )
