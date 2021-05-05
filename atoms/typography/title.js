export const Title = ({ children, ...props }) => (
  <h1
    className="text-4xl tracking-tight font-medium text-gray-800 sm:text-5xl md:text-6xl"
    {...props}
  >
    {children}
  </h1>
)
