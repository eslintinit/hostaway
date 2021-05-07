export const ValuePropositionColumnItem = ({ feature }) => {
  // return (
  //   <div key={feature.name} className="pt-6">
  //     <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
  //       <div className="-mt-6">
  //         <div>
  //           <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
  //             <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
  //           </span>
  //         </div>
  //         <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
  //           {feature.name}
  //         </h3>
  //         <p className="mt-5 text-base text-gray-500">
  //           Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
  //           magna sit morbi lobortis.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div key={feature.name}>
      <dt>
        <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-md bg-brightOrange text-white">
          <feature.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
          {feature.name}
        </p>
      </dt>
      <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
    </div>
  )
}
