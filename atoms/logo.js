export const Logo = ({ channel = 'hostaway' }) => {
  if (channel !== 'hostaway') return <SalesChannelLogo />

  return (
    <div>
      <span />
      Hostaway
    </div>
  )
}

const SalesChannelLogo = () => (
  <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
    <img
      className="h-12"
      src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
      alt="Workcation"
    />
  </div>
)
