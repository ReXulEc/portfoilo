import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />

          <title>Mert Doğu.</title>
          <meta name="title" content="Mert Doğu" />
          <meta name="description" content="Front-end developer and loves writing shitcode." />
          <meta name="keywords" content="rexulec, mert, dogu, mert dogu, front-end, frontend" />

          <meta property="og:site_name" content="rexulec" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rexulec.com/" />
          <meta property="og:title" content="Mert Doğu" />
          <meta property="og:description" content="Front-end developer and loves writing shitcode." />

          <meta property="twitter:title" content="Mert Doğu" />
          <meta property="twitter:description" content="Front-end developer and loves writing shitcode." />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
