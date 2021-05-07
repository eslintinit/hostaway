import Head from 'next/head'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hostaway</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="/css/index.css" />

        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://www.hostaway.com/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="https://www.hostaway.com/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="https://www.hostaway.com/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="https://www.hostaway.com/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="https://www.hostaway.com/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://www.hostaway.com/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="https://www.hostaway.com/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://www.hostaway.com/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.hostaway.com/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://www.hostaway.com/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.hostaway.com/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://www.hostaway.com/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.hostaway.com/favicon-16x16.png"
        />
        <link rel="manifest" href="https://www.hostaway.com/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>Hostaway - The All-in-One solution for property managers</title>
        <link
          data-react-helmet="true"
          rel="canonical"
          href="https://www.hostaway.vercel.com/"
        />
        <meta
          data-react-helmet="true"
          name="og:url"
          content="https://hostaway.vercel.com"
        />
        <meta
          data-react-helmet="true"
          name="keywords"
          content="Vacation rental software, Channel management software, Vacation rental management, Channel manager, Short-term rental management, Property management software, Airbnb channel manager, Booking.com channel manager, Homeaway channel manager, Expedia channel manager, TripAdvisor channel manager, Unified Guest message inbox"
        />
        <meta data-react-helmet="true" property="og:locale" content="en_US" />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:title"
          content="Hostaway - The All-in-One solution for property managers"
        />
        <meta
          data-react-helmet="true"
          property="og:description"
          content="Manage unlimited vacation rental channel reservations from check-in to check-out on one platform."
        />
        <meta
          data-react-helmet="true"
          property="og:site_name"
          content="Hostaway"
        />
        <meta
          data-react-helmet="true"
          property="fb:app_id"
          content={966242223397117}
        />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="/static/logo_orange_gradient-837507fc3ba52ac2e7b0e702cae461bf.png"
        />
        <meta
          data-react-helmet="true"
          property="og:image:secure_url"
          content="/static/Vacation-rental-software-multi-device-286e5eefbe7a4978dac7e113b71f8d7d.png"
        />
        <meta
          data-react-helmet="true"
          property="twitter:card"
          content="/static/Vacation-rental-software-multi-device-286e5eefbe7a4978dac7e113b71f8d7d.png"
        />
        <meta
          data-react-helmet="true"
          property="twitter:description"
          content="With Hostaway you succesfully manage unlimited vacation rental channel reservations from check-in to check-out by one platform."
        />
        <meta
          data-react-helmet="true"
          property="twitter:title"
          content="Manage your vacation rental properties like a Pro"
        />
        <meta
          data-react-helmet="true"
          property="twitter:site"
          content="@Hostaway"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
