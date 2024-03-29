import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

// import createEmotionServer from '@emotion/server/create-instance'
// import createEmotionCache from '~/styles/createEmotionCache'

import { DESCRIPTION } from '~/constants/website'
import theme from '~/styles/theme'

// const G_TAG = '549QSDETHG' // dev
const G_TAG = 'EJ52H0RZGF' //  prod

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* properly load device with TODO: research what else has to change here */}
          <meta name="description" content={DESCRIPTION} />
          {/* TODO: Update with real image / colors */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${G_TAG}');
            `}
          </Script>

          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-549QSDETHG"></script>
          <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-${G_TAG}');` }}></script> */}

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// MyDocument.getInitialProps = async (ctx) => {
//   const originalRenderPage = ctx.renderPage

//   const cache = createEmotionCache()
//   const { extractCriticalToChunks } = createEmotionServer(cache)

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
//     })

//   const initialProps = await Document.getInitialProps(ctx)
//   // This is important. It prevents emotion to render invalid HTML.
//   // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
//   const emotionStyles = extractCriticalToChunks(initialProps.html)
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ))

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       ...emotionStyleTags,
//     ],
//   }
// }
