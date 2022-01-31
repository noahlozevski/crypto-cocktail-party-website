import Head from 'next/head'
import OpenGraphMetadata from './OpenGraphMetadata'
import { TITLE } from '../constants/website'

const HTMLHead = ({ children }) => (
  <Head>
    <title>{TITLE}</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />

    <OpenGraphMetadata />

    {children}
  </Head>
)

export default HTMLHead
