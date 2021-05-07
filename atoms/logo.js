export const Logo = ({ channel = 'hostaway', logo, style = {} }) => {
  if (logo) return <SalesChannelLogo logo={logo} style={style} />

  return (
    <div>
      <span />
      Hostaway
    </div>
  )
}

const SalesChannelLogo = ({ logo, style }) => (
  <div
    className="col-span-2 flex justify-center items-center md:col-span-3 lg:col-span-1"
    style={style}
  >
    <img className={`w-auto ${logo.size}`} src={logo.src} alt="Logo" />
  </div>
)
