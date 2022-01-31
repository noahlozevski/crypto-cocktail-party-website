import Head from 'next/head'
import OpenGraphMetadata from './OpenGraphMetadata'
import { TITLE, DESCRIPTION } from '../constants/website'

const HTMLHead = ({ children }) => (
  <Head>
    {/* properly load device with TODO: research what else has to change here */}
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />
    {/* TODO: Update with real image / colors */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="icon" href="/favicon.ico" />
    <OpenGraphMetadata />
    {children}
  </Head>
)

export default HTMLHead
