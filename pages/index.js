import Marquee from '@/components/Marquee'
import TriImageViewer from '@/components/TriImageViewer'
import FloatingSvgs from '@/components/FloatingSvgs'
import Headroom from 'react-headroom'
import Tilt from 'react-parallax-tilt'
import { useState } from 'react'
import { BANNER_HEIGHT, SCROLLER_HEIGHT } from '@/constants/styles'
import ScrollingNfts from '@/components/ScrollingNfts'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { useTheme } from '@mui/material/styles'

import ScrollingLogoMarquee from '@/components/ScrollingLogoMarquee'
import LiquidButton from '@/components/LiquidButton'
// import { getPhotosFromDir } from '@/plugins/utils'
import { NFT_IMAGE_SRCS } from '@/constants/images'
import { Container, Grid, Paper, Box } from '@mui/material'
import classNames from 'classnames'
// import Link from 'next/link'
// import c from '@/public/images/nfts/Chicken Wing.png'
// import { useRouter } from 'next/router'

// import styles from '../styles/Home.module.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import CardCarousel from '@/components/CardCarousel'

export default () => {
  // const [useGradient, setUseGradient] = useState(false)
  // const toggleGradient = (e) => (e.preventDefault(), setUseGradient((g) => !g))

  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <div id="home">
      <div className={classNames('page', 'splash',  'solid-background')} style={{ overflow: 'hidden' }}>
        {/* header */}
        {/* <ScrollingLogoMarquee /> */}
        <Headroom
          style={{
            // backdrop: !pinned ? 'blur(5px)' : undefined,
            zIndex: 2,
            // backgroundColor: !pinned ? '#76767673' : undefined,
            // webkitTransition: 'all .5s ease-in-out',
            // mozTransition: 'all .5s ease-in-out',
            // oTransition: 'all .5s ease-in-out',
            // transition: 'all .5s ease-in-out',
          }}
          // onPin={() => setPinned(false)}
          // onUnfix={() => setPinned(true)}
        >
          <Container maxWidth="xl" sx={{ height: BANNER_HEIGHT + 'px' }}>
            <nav className="app-nav">
              <Box
                className="logo-container side-container-width"
                sx={{
                  // width: {
                  //   xs: '200px',
                  //   lg: ''
                  // }
                  // verticalAlign: 'middle',

                  // mx: {
                  //   'auto'
                  // },
                  height: '80px',
                }}
              >
                <img height={40} src={require('@/public/images/logo-icon-white.svg')}></img>
              </Box>

              <Box
                className="text-logo-container"
                sx={{
                  // width: {
                  //   xs: '200px',
                  //   lg: ''
                  // }
                  // verticalAlign: 'middle',

                  // mx: {
                  //   'auto'
                  // },
                  height: '80px',
                }}
              >
                <img height={40} src={require('@/public/images/logo-white.svg')}></img>
              </Box>
              <div className="link-container side-container-width">
                <a href="#" className="nav-link" rel="noopener noreferrer" target="_blank">
                  <TwitterIcon className="nav-icon" fontSize="large" sx={{ color: 'white' }}></TwitterIcon>
                </a>
                <a href="https://discord.gg/Effcv4Ph" className="nav-link" rel="noopener noreferrer" target="_blank">
                  <img className="nav-icon" width={36} src={require('@/public/images/discord.svg')}></img>
                </a>
                {/* <a href="#" className="nav-link" rel="noopener noreferrer" target="_blank">
                <img className="nav-icon" height={32} src={require('@/public/images/etherscan.svg')}></img>
              </a> */}
                <a href="#" className="nav-link" rel="noopener noreferrer" target="_blank">
                  <img className="nav-icon" height={32} src={require('@/public/images/opensea.svg')}></img>
                </a>
              </div>
              {/* <TwitterIcon fontSize="large" sx={{ color: 'white' }}></TwitterIcon> */}
            </nav>
          </Container>
        </Headroom>
        <Container
          maxWidth="xl"
          sx={{
            pt: {
              xs: 4,
              md: 12,
              lg: 16,
            },
            // height: `max-content`,
            // minHeight: {
            //   md: '',
            //   // xs: 'max-content',
            //   // xs: `calc(100vh - ${BANNER_HEIGHT}px)`,
            //   // lg: `calc(100vh - ${BANNER_HEIGHT}px)`,
            //   // md: '100vh'
            // },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            // marginTop: `-${BANNER_HEIGHT / 2}px`,
          }}
        >
          {/* <Grid container spacing={{ xs: 2, lg: 2 }} sx={{
            alignItems:
          }}> */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              order: {
                xs: 2,
                md: 0,
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <img className="big-cock" src={require('@/public/images/og-cutout.svg')}></img>
            {/* <div className="big-cock__container">
              </div> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              flexDirection: 'column',
              // my: {
              //   xs: 'auto',
              //   md: ''
              // },
              mt: {
                xs: 2,
                md: -5,
                lg: 'auto',
              },
              mb: {
                xs: 4,
                md: 0,
              },
            }}
          >
            <div className="mint-info-container">
              <div className="mint-info">0 / 7777 Minted</div>
              <div className="connect-button-wrapper">
                <LiquidButton>Connect Wallet</LiquidButton>
              </div>
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'initial',
                  },
                  height: {
                    md: 280,
                    lg: 450,
                  },
                }}
              >
                <CardCarousel />
              </Box>
            </div>

            {/* <Tilt
                {...{
                  // glareEnable: true,
                  // glareMaxOpacity: 0.45,
                  // glareColor: 'white',
                  // glarePosition: 'all',
                  // perspective: 2000,
                  tiltMaxAngleX: 5,
                  tiltMaxAngleY: 5,
                  scale: 1.01,
                  style: {
                    zIndex: 1,
                    borderRadius: 12,
                    // overflow: 'hidden',
                  },
                }}
              >
                <Paper
                  elevation={16}
                  sx={{
                    background: 'none',
                    zIndex: 1,
                    overflow: 'hidden',
                    borderRadius: '12px',
                  }}
                >
                  <div className="cycle-container">
                    <img
                      className="cycle"
                      src={require('@/public/images/cycle-512.gif')}
                      height={514}
                      width={512}
                      // src={require('@/public/images/scrolling-nfts/Cucci.png')}
                    ></img>
                  </div>
                </Paper>
              </Tilt> */}
          </Grid>
          {/* <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                className="logo-container"
                sx={{
                  // width: {
                  //   xs: '200px',
                  //   lg: ''
                  // }
                  // verticalAlign: 'middle',
                  mr: 'auto',
                  height: '200px',
                }}
              >
                <img height={200} src={require('@/public/images/logo-text-pic.png')}></img>
              </Box>

              <div className="mint-info-container">
                <div className="mint-info">0 / 7777 Cocks Minted</div>
                <LiquidButton>Connect Wallet</LiquidButton>
              </div>
            </Grid> */}
          {/* </Grid> */}
        </Container>

        {/* sticky to bottom of page from container height */}
        <ScrollingLogoMarquee />

        {/* <ScrollingNfts direction="right" /> */}
        <FloatingSvgs />
      </div>
      <div className="page split-background about-page">
        {/* <ScrollingLogoMarquee /> */}
        <Container
          maxWidth="md"
          sx={{
            // height: `calc(100vh - ${BANNER_HEIGHT}px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: `-${BANNER_HEIGHT / 2}px`,
          }}
        >
          <Box className="about-container">
            <Grid container spacing={{ xs: 2 }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Paper
                  className="about-info-box purple-with-black-border"
                  elevation={4}
                  sx={{
                    borderRadius: 12,
                    my: 6,
                    px: 4,
                    py: 4,
                  }}
                >
                  <Box className="">
                    <h1 className="about-title">Whats with all this Cock Business?</h1>
                    <p className="about-text">
                      Lorem Ipsum is simply dummy text of the printing and printer took a galley of type and scrambled it to make a type specimen
                      book. It has survived not only five printer took a galley of type and scrambled it to make a type specimen book. It has survived
                      not only five
                    </p>
                  </Box>
                </Paper>
              </Grid>
              {/* timleine view on right side of art progression */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <div className="cycle-container">
                  <img
                    className="cycle"
                    src={require('@/public/images/cycle-512.gif')}
                    height={514}
                    width={512}
                    // src={require('@/public/images/scrolling-nfts/Cucci.png')}
                  ></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* <ScrollingNfts direction="right" /> */}
        {/* <ScrollingNfts direction="right" /> */}
      </div>
    </div>
  )
}
