import { BANNER_HEIGHT } from '@/constants/styles'
import { DESCRIPTION, DISCORD_LINK, TWITTER_LINK } from '@/constants/website'
import { Container, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'

// imgs
import SmallWhiteLogo from '@/public/images/logo-icon-white.svg'
import TextLogoWide from '@/public/images/logo-white.svg'
import TextLogoNarrow from '@/public/images/logo-narrow-white.svg'
import DiscordIcon from '@/public/images/discord.svg'
import OpenSeaIcon from '@/public/images/opensea.svg'

export default () => (
  <Container maxWidth="xl" sx={{ height: BANNER_HEIGHT + 'px' }}>
    <nav className="app-nav">
      <Box className="logo-container side-container-width" sx={{ height: `${BANNER_HEIGHT}px` }}>
        <img alt={DESCRIPTION} height={40} src={SmallWhiteLogo} />
      </Box>

      <Box className="text-logo-container" sx={{ height: `${BANNER_HEIGHT}px` }}>
        <img alt={DESCRIPTION} height={40} src={TextLogoWide}></img>
      </Box>

      <Box className="narrow-logo-container" sx={{ height: `${BANNER_HEIGHT}px` }}>
        <img alt={DESCRIPTION} height={50} src={TextLogoNarrow}></img>
      </Box>

      <div className="link-container side-container-width">
        <a href={TWITTER_LINK} className="nav-link" rel="noopener noreferrer" target="_blank">
          <TwitterIcon className="nav-icon" fontSize="large" sx={{ color: 'white' }}></TwitterIcon>
        </a>
        <a href={DISCORD_LINK} className="nav-link" rel="noopener noreferrer" target="_blank">
          <img alt="discord" className="nav-icon" width={36} src={DiscordIcon}></img>
        </a>
        {/* <a href="#" className="nav-link" rel="noopener noreferrer" target="_blank">
        <img className="nav-icon" height={32} src={require('@/public/images/etherscan.svg')}></img>
      </a> */}
        <a href="https://opensea.io" className="nav-link" rel="noopener noreferrer" target="_blank">
          <img alt="opensea" className="nav-icon" height={32} src={OpenSeaIcon}></img>
        </a>
      </div>
    </nav>
  </Container>
)
