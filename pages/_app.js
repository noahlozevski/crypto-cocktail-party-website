import '../styles/global.sass'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '~/styles/createEmotionCache'

// TODO: update with preferred fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import DefaultLayout from '~/layouts/default'
import theme from '~/styles/theme'

export function reportWebVitals(metric) {
  console.log(metric)
}

const clientSideEmotionCache = createEmotionCache()

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {typeof Component.getLayout === 'function' ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <DefaultLayout>{<Component {...pageProps} />} </DefaultLayout>
      )}
    </ThemeProvider>
  </CacheProvider>
)

export default App
