import '../styles/global.sass'

// TODO: update with preferred fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import DefaultLayout from '../layouts/default'

// Use the layout defined at the page level, otherwise use fallback
const App = ({ Component, pageProps }) =>
  typeof Component.getLayout === 'function' ? (
    Component.getLayout(<Component {...pageProps} />)
  ) : (
    <DefaultLayout>{<Component {...pageProps} />} </DefaultLayout>
  )

export default App
