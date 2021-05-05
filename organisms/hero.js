import { Video, Title } from 'atoms'
import { LogosBar } from 'molecules'

export const Hero = () => (
  <div
    className="flex flex-col justify-between items-center py-8 pb-12 w-full"
    style={{ height: 'calc(100vh - 56px)' }}
  >
    <div className="flex flex-col items-center w-full">
      <div className="my-8">
        <Title>
          The{' '}
          <span className="text-brightOrange font-semibold">All-in-One</span>{' '}
          solution <br />
          for Property Managers
        </Title>
      </div>
      <Video />
    </div>
    <LogosBar />
  </div>
)
