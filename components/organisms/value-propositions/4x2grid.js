// basically pain points
import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Unified Inbox',
    description:
      'Centralize communication with your guests, cleaners, maintenance team and property owners.',
    icon: InboxIcon,
  },
  {
    name: 'Synced Calendars',
    description: 'Have calendars synced across all sales channels',
    icon: ReplyIcon,
  },
  {
    name: 'Manage Team Members',
    description: 'Make an assignments, automate back-and-forth routine',
    icon: UsersIcon,
  },
  {
    name: 'Grow in Revenue',
    description: 'Set dynamic pricing based on demand',
    icon: DocumentReportIcon,
  },
  {
    name: 'Powerful automation',
    description: 'Automate tasks',
    icon: PencilAltIcon,
  },
  {
    name: 'Quorter reports',
    description: 'Insightful graphs',
    icon: TrashIcon,
  },
  {
    name: 'Customer support',
    description: "We're always here to help",
    icon: ChatAltIcon,
  },
  {
    name: 'Manage on-the-go',
    description: 'Mobile app',
    icon: HeartIcon,
  },
]

export const FourColumnsGridFeatures = () => {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Easy Property Managementent
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-indigo-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
