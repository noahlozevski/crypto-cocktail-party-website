import {
  TITLE,
  SHORT_DESCRIPTION,
  URL,
  TWITTER_TITLE,
  TWITTER_DESCRIPTION,
  TWITTER_HANDLE,
} from '../constants/website'

// Used for preview links (messaging platforms mainly)
// info: https://ogp.me/
const OpenGraphMetadata = () => (
  <>
    <meta property="og:url" content={URL} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={SHORT_DESCRIPTION} />
    <meta property="og:image" content={URL + 'images/og.png'} />
    <meta property="og:image:secure_url" content={URL + 'images/og.png'} />
    {/* TODO: add image dimensions */}
    {/* <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="600" /> */}

    {/* helps it read as 'the crypto cocktail party' */}
    <meta property="og:determiner" content="the" />
    <meta property="og:locale" content="en_US" />
    {/* <meta property="og:site_name" content={TITLE} /> */}

    {/* Twitter : https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
    {/* This affects how links to this page show up in the card layout when linking things */}
    <meta property="twitter:title" content={TWITTER_TITLE} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content={TWITTER_HANDLE} />
    <meta property="twitter:creator" content={TWITTER_HANDLE} />
    <meta property="twitter:description" content={TWITTER_DESCRIPTION} />
    {/* <meta property="twitter:image" content="" />  -> ** Supports ipfs ** */}
  </>
)
export default OpenGraphMetadata
