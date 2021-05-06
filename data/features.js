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

export const features = [
  {
    name: 'Unified Inbox',
    description:
      'Keep communication with your guests, staff and property owners in one place',
    icon: InboxIcon,
  },
  {
    name: 'Synced Calendars',
    description:
      "Have calendars synced across all sales channels. Don't worry about double bookings",
    icon: ReplyIcon,
  },
  {
    name: 'Manage Team Members',
    description:
      'Invite cleaners, maintaince team and other members join the platform. Make assignments and manage your team',
    icon: UsersIcon,
  },
  {
    name: 'Grow in Revenue',
    description:
      'Set dynamic pricing based on property demand. Allow guests to book from you directly. Spend less on fees',
    icon: DocumentReportIcon,
  },
  {
    name: 'Automation',
    description:
      'Automate actions as sending messages on guest check-in or assigning cleaning on guest check-out. With our robust system you can automate anything',
    icon: PencilAltIcon,
  },
  {
    name: 'Powerful reporting',
    description:
      'See monthly reports, see which properties work the best. You can track all property expenses on Hostaway',
    icon: TrashIcon,
  },
  {
    name: 'Mobile app',
    description: 'Manage business on the go',
    icon: ChatAltIcon,
  },
  {
    name: 'Best customer service',
    description: 'We available 24/7 to help you grow your business',
    icon: HeartIcon,
  },
]
