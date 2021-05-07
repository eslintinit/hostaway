const faqs = [
  {
    id: 1,
    question: "What's the pricing?",
    answer:
      "It is very common for changes to be made for multiple dates at once. We've made that easy for you: Bulk Updating Rates and Availability in the Calendar",
  },
  {
    id: 2,
    question: 'Do you have a mobile app?',
    answer:
      'Yes, you can set a minimum stay up to 200 days in the calendar. These will sync with API connected channels that support this update',
  },
  {
    id: 3,
    question:
      'I have a team of 50 with many hiearchy levels. Is it suitable for us?',
    answer:
      'Hostaway has a fantastic connection with many different channels and as a result, we sync with them often: Channel Sync Timing',
  },
  {
    id: 4,
    question: 'I have just 3 properties. Can I use this software?',
    answer:
      'We have two great ways to manage your calendar - in single listing view or multi-calendar view: How to Manage Your Calendar',
  },
  {
    id: 5,
    question: "I'm about to be convienced. Please say me something good",
    answer:
      "We've made it easy for you to block dates on your calendar to ensure that guests aren't able to access your properties on those days: How to Manually Block Dates",
  },
  {
    id: 6,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

export const FAQ = () => (
  <div className="bg-white w-full">
    <div className="max-w-7xl mx-auto pb-16 pt-0 px-4 sm:pb-24 sm:px-6 lg:px-8">
      <div className="mt-12">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-24 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
)
