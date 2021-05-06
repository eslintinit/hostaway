export const Title = ({ children, className = '', ...props }) => (
  <h1
    className={`text-4xl tracking-tight font-medium text-gray-700 sm:text-5xl md:text-5xl ${className}`}
    {...props}
  >
    {children}
  </h1>
)
