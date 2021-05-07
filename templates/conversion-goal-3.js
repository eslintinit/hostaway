import { MoreFeatures, Integrations, Partners, CaseStudies } from 'organisms'
import { CTA, ValueProposition } from 'molecules'
import { fullscreenFeatures } from 'data'

export const ConversionGoalThree = () => (
  <div className="flex flex-col items-center w-full">
    <MoreFeatures />
    {fullscreenFeatures.map((feature) => (
      <ValueProposition
        name={feature.name}
        title={feature.title}
        img={feature.image}
        icon={feature.icon}
        description={feature.description}
        fullscreen
        align={feature.align}
        style={feature.style || {}}
      />
    ))}
    {/*
    <div>Badges</div>
    */}
    <CTA form />
    <CaseStudies />
  </div>
)

// <ValueProposition
//   feat="automation"
//   title="Automate everything"
//   img="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/01/zapier.jpg"
//   description={
//     <span>
//       Now that Hostaway has integrated with Zapier, property managers can
//       automate huge parts of their businesses by integrating{' '}
//       <a
//         href="https://zapier.com/apps/hostaway/integrations"
//         target="_blank"
//         className="text-primary hover:underline cursor-pointer"
//       >
//         with 3000+ web applications!
//       </a>
//       <br />
//       <br />
//       The list of integrations includes Google Drive, Gmail, Slack,
//       Salesforce, MailChimp, Dropbox, Trello, Quickbooks, and thousands
//       more.
//     </span>
//   }
//   fullscreen
//   left
// />
// <ValueProposition
//   feat="automation"
//   title="Automate everything"
//   img="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2020/01/zapier.jpg"
//   description={
//     <span>
//       Now that Hostaway has integrated with Zapier, property managers can
//       automate huge parts of their businesses by integrating{' '}
//       <a
//         href="https://zapier.com/apps/hostaway/integrations"
//         target="_blank"
//         className="text-primary hover:underline cursor-pointer"
//       >
//         with 3000+ web applications!
//       </a>
//       <br />
//       <br />
//       The list of integrations includes Google Drive, Gmail, Slack,
//       Salesforce, MailChimp, Dropbox, Trello, Quickbooks, and thousands
//       more.
//     </span>
//   }
//   fullscreen
//   right
// />
// {/*
// <Partners />
// */}
// <ValueProposition
//   title="Powerful reporting"
//   img="https://www.liftylife.ca/wp-content/uploads/2021/02/image.png"
//   fullscreen
//   description={
//     <div className="flex flex-col">
//       <span>
//         <strong className="font-medium text-secondaryDark">
//           Our customers' success is our success!
//         </strong>
//         <br /> <br />
//         Believe it or not, this is one of our values at Hostaway and this is
//         what everyone who joins Hostaway team learns on day one! We take
//         pride in providing industry-leading customer care, to make sure we
//         help our customers as much as we can with growth of their business.
//         <br /> <br />
//         Deal just with one company, Hostaway, and have a dedicated person
//         for all your enquiries. All your questions in one place.
//         <br /> <br />
//         <a className="text-primary hover:underline cursor-pointer font-medium">
//           Let's get in touch!
//         </a>
//       </span>
//       {/*
//       <div className="flex justify-between items-center">
//         <img
//           src="https://ci5.googleusercontent.com/proxy/sxvIOmN1juOF1VVKJqTdDlHeSLk36vKmI3mykpO0Rex3z-zGx01P5A_kV25N9AdrUwXHmKVe-s5qBmNycCbAYKKZ5UxOXXltlras9oilBhWtqE7ei_VhT4JIusc8mfqQNnALjOvo68RG6zW5RwwyHZ4Whib4_8Cr3Ne-ReIlKbpqBAaLF1U=s0-d-e1-ft#https://hs-3883982.f.hubspotstarter.net/hub/3883982/hubfs/download-1.png?width=246&upscale=true&name=download-1.png"
//           className="w-24 h-auto"
//         />
//       </div>
//       */}
//     </div>
//   }
//   left
// />
// <ValueProposition
//   title="Excellent support"
//   img="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
//   fullscreen
//   description={
//     <div className="flex flex-col">
//       <span>
//         <strong className="font-medium text-secondaryDark">
//           Our customers' success is our success!
//         </strong>
//         <br /> <br />
//         Believe it or not, this is one of our values at Hostaway and this is
//         what everyone who joins Hostaway team learns on day one! We take
//         pride in providing industry-leading customer care, to make sure we
//         help our customers as much as we can with growth of their business.
//         <br /> <br />
//         Deal just with one company, Hostaway, and have a dedicated person
//         for all your enquiries. All your questions in one place.
//         <br /> <br />
//         <a className="text-primary hover:underline cursor-pointer font-medium">
//           Let's get in touch!
//         </a>
//       </span>
//       {/*
//       <div className="flex justify-between items-center">
//         <img
//           src="https://ci5.googleusercontent.com/proxy/sxvIOmN1juOF1VVKJqTdDlHeSLk36vKmI3mykpO0Rex3z-zGx01P5A_kV25N9AdrUwXHmKVe-s5qBmNycCbAYKKZ5UxOXXltlras9oilBhWtqE7ei_VhT4JIusc8mfqQNnALjOvo68RG6zW5RwwyHZ4Whib4_8Cr3Ne-ReIlKbpqBAaLF1U=s0-d-e1-ft#https://hs-3883982.f.hubspotstarter.net/hub/3883982/hubfs/download-1.png?width=246&upscale=true&name=download-1.png"
//           className="w-24 h-auto"
//         />
//       </div>
//       */}
//     </div>
//   }
//   right
// />
