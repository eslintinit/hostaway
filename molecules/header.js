import { Logo, Button, HeaderLink } from 'atoms'

export const Header = () => (
  <div className="flex justify-between items-center w-full px-10 py-4">
    <Logo />
    <div className="flex justify-between items-center">
      <HeaderLink>Features</HeaderLink>
      <HeaderLink>Solutions</HeaderLink>
      <HeaderLink>Resources</HeaderLink>
      <HeaderLink>Company</HeaderLink>
    </div>
    <Button>Get started</Button>
  </div>
)
