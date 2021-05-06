export const ValuePropositionColumnItem = ({ feature }) => {
  return (
    <div key={feature.name}>
      <dt>
        <div className="flex items-center justify-center rounded-md bg-brightOrange text-white">
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
