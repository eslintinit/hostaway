import { Video, Title } from 'atoms'
import { LogosBar } from 'molecules'

export const Hero = () => (
  <div
    className="flex flex-col justify-between items-center py-2 pb-8 w-full bg-gray-50"
    style={{ height: 'calc(100vh - 56px)' }}
  >
    <div className="flex flex-col items-center w-full">
      <div className="my-8">
        <Title className="text-center">
          The{' '}
          <span className="text-brightOrange font-semibold ">All-in-One</span>{' '}
          solution <br />
          for Property Managers
        </Title>
      </div>
      <Video />
    </div>
    <div className="flex flex-col items-center w-full">
      <span className="text-gray-400 opacity-90 text-sm mb-4">
        Partnered up with 130+ companies
      </span>
      <LogosBar />
    </div>
  </div>
)
