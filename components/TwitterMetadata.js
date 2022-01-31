import { TITLE, SHORT_DESCRIPTION, URL } from '../constants/website'

// Used for preview links (messaging platforms mainly)
// info: https://ogp.me/
const OpenGraphMetadata = () => (
  <>
    <meta property="twitter:card" content={URL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={SHORT_DESCRIPTION} />
    <meta property="og:image" content={URL + 'images/og.png'} />
    {/* helps it read as 'the crypto cocktail party' */}
    <meta property="og:determiner" content="the" />
    <meta property="og:locale" content="en_US" />
    {/* <meta property="og:site_name" content={TITLE} /> */}
  </>
)
export default OpenGraphMetadata
