// <img src="/case-studies.png" className="absolute opacity-30" />
export const CaseStudies = () => (
  <div className="flex flex-col items-center relative w-full mb-32 mt-16">
    <div
      className="grid grid-cols-2 bg-green-50 rounded-2xl w-10/12 py-12 px-6 shadow-xs"
      style={{
        // background: '#dcfdff',
        background: '#def6ff',
        // background: '#dcf7ff'
      }}
    >
      <div className="flex flex-col justify-between px-8">
        <span className="font-md font-semibold text-secondaryDark uppercase text-sm tracking-widest">
          Customer Success Stories
        </span>
        <div className="flex flex-col justify-between my-12">
          <span className="text-2xl font-extrabold text-gray-800">
            <span className="text-primary">Read our client stories</span> and
            see how
            <br />
            we're helping to transform their business
          </span>

          <span className="my-6 text-lg text-gray-600 opacity-90">
            “We found Hostaway to be the perfect option for our property
            management side of the business. Hostaway went above and beyond
            meeting with us to get us started and through the first few months
            of operation. Now we deal primarily with the customer service via
            the app, and they get back to us immediately.”
          </span>
          <div className="">
            <span className="text-gray-600 text-md font-semibold">
              Kim Omber
            </span>
            {', '}
            <span className="text-gray-600 opacity-70 text-md font-medium">
              Hostkeep CEO
            </span>
          </div>
        </div>
        <span className="text-secondaryDark hover:underline font-medium text-lg cursor-pointer">
          Read Case Study
        </span>
      </div>
      <div className="flex justify-center items-center px-4">
        <img src="/case-studies-team.png" className="shadow-2xl rounded-2xl" />
      </div>
    </div>
  </div>
)
