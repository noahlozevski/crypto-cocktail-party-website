import Marquee from '@/components/Marquee'
import Headroom from 'react-headroom'
import Tilt from 'react-parallax-tilt'
// import { useState } from 'react'
import ScrollingNfts from '@/components/ScrollingNfts'
import TimelineView from '@/components/TimelineView'

import ScrollingLogoMarquee from '@/components/ScrollingLogoMarquee'
import LiquidButton from '@/components/LiquidButton'
// import { getPhotosFromDir } from '@/plugins/utils'
import { NFT_IMAGE_SRCS } from '@/constants/images'
import { Container, Grid, Paper, Box } from '@mui/material'
// import Link from 'next/link'
// import c from '@/public/images/nfts/Chicken Wing.png'
// import { useRouter } from 'next/router'

// import styles from '../styles/Home.module.css'
import TwitterIcon from '@mui/icons-material/Twitter'

const bannerHeight = 80 // px
const scrollerHeight = 150 // px
export default () => {
  // const [pinned, setPinned] = useState(true);

  return (
    <div id="home">
      <div className="page gradient-backdrop" style={{ overflow: 'hidden' }}>
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
          <Container maxWidth="lg" sx={{ height: bannerHeight + 'px' }}>
            <nav className="app-nav">
              <Box
                className="logo-container"
                sx={{
                  // width: {
                  //   xs: '200px',
                  //   lg: ''
                  // }
                  // verticalAlign: 'middle',
                  mr: 'auto',
                  height: '80px',
                }}
              >
                <img
                  height={60}
                  src={require('@/public/images/logo-text-pic.png')}
                ></img>
              </Box>
              <a
                href="#"
                className="nav-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon
                  className="nav-icon"
                  fontSize="large"
                  sx={{ color: 'white' }}
                ></TwitterIcon>
              </a>
              <a
                href="#"
                className="nav-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="nav-icon"
                  width={36}
                  src={require('@/public/images/discord.svg')}
                ></img>
              </a>
              <a
                href="#"
                className="nav-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="nav-icon"
                  height={32}
                  src={require('@/public/images/etherscan.svg')}
                ></img>
              </a>
              <a
                href="#"
                className="nav-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className="nav-icon"
                  height={32}
                  src={require('@/public/images/opensea.svg')}
                ></img>
              </a>
              {/* <TwitterIcon fontSize="large" sx={{ color: 'white' }}></TwitterIcon> */}
            </nav>
          </Container>
        </Headroom>
        <Container
          maxWidth="xl"
          sx={{
            height: `calc(100vh - ${bannerHeight * 2}px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: `-${bannerHeight / 2}px`,
          }}
        >
          <Grid container spacing={{ xs: 2, lg: 6 }}>
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
              <Tilt
                {...{
                  // glareEnable: true,
                  // glareMaxOpacity: 0.45,
                  // glareColor: 'white',
                  glarePosition: 'all',
                  perspective: 2000,
                  tiltMaxAngleX: 10,
                  tiltMaxAngleY: 10,
                  scale: 1.03,
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
                {/* <div className="cycle-container">
                  <img
                    className="cycle"
                    // src={require('@/public/images/cycle-512.gif')}
                    height={514}
                    width={512}
                    src={require('@/public/images/scrolling-nfts/Cucci.png')}
                  ></img>
                </div> */}
              </Tilt>
            </Grid>
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
              <div className="mint-info-container">
                <div className="mint-info">0 / 7777 Cocks Minted</div>
                <LiquidButton>Connect Wallet</LiquidButton>
              </div>
            </Grid>
          </Grid>
        </Container>

        {/* sticky to bottom of page from container height */}
        <ScrollingLogoMarquee />

        {/* <ScrollingNfts direction="right" /> */}
        {/* <ScrollingNfts direction="right" /> */}
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 226.03 248.22"
        >
          <path
            d="M54.71,108.16A39.7,39.7,0,0,0,69.37,97.85l65.15,30.9,37.35,92.46L157.65,227a11,11,0,1,0,8.26,20.45l14.23-5.74,24.76-10,14.23-5.75a11,11,0,1,0-8.27-20.45l-14.22,5.75-37.36-92.46,39.13-104A10.89,10.89,0,0,0,184.14.82L71,46.54a39.79,39.79,0,1,0-16.27,61.62Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 156.99 252.04"
        >
          <path
            d="M19.83,130.24c16,4.84,54.52,13,54.52,13l34.22,84.7L95.85,233a9.86,9.86,0,0,0,7.39,18.29L116,246.18h0l22.14-9,12.72-5.13a9.86,9.86,0,0,0-7.39-18.29L130.71,219l-34.22-84.7s22.06-32.59,30.22-47.19a16.66,16.66,0,0,0-1.61-18.63L69.56,0H55.67L0,22.49l8.05,93.23A16.66,16.66,0,0,0,19.83,130.24Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 148.59 252.9"
        >
          <path
            d="M37.64,130.38a33.49,33.49,0,0,0,31.12,19.11l32.18,79.65L88.42,234.2a9.7,9.7,0,0,0,7.27,18l12.52-5.06,21.79-8.8,12.52-5.06a9.7,9.7,0,1,0-7.27-18l-12.52,5.06L90.55,140.69a32.84,32.84,0,0,0,7.58-39L50.28,0,0,20.31l36.22,106.4A34.76,34.76,0,0,0,37.64,130.38Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 203.85 277.69"
        >
          <path
            d="M188.42,234.15,173.93,240l-.75.3-38.45-95.16c13-9.66,19.21-23.7,14-44.63,23.08-19.58,32.2-45.13,18.24-79.67L121.49,39.22,119,4.57a4.93,4.93,0,1,0-9.83.72l2.75,37.81L0,88.3c14,34.54,38.26,46.58,68.46,44.63,10.78,18.7,25,24.46,41.05,22.4L148,250.5l-13.73,5.55a11.23,11.23,0,1,0,8.41,20.82l13.74-5.55,25.21-10.19.75-.3L196.83,255a11.23,11.23,0,0,0-8.41-20.83Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 196.3 246.22"
        >
          <path
            d="M149.12,242.15,174.18,232l.75-.3,14.39-5.82A11.16,11.16,0,1,0,181,205.22L166.57,211l-.75.31-38.57-95.47C164.38,94.34,181.41,59.38,157.42,0L0,63.6C24,123,60.52,136.3,102.19,126l38.57,95.46L127.11,227A11.16,11.16,0,0,0,121,241.5a11,11,0,0,0,3.68,4.72h14.42Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.76 264.11"
        >
          <path
            d="M114.57,257.52a10.53,10.53,0,0,0,13.72,5.82l12.89-5.21,23.68-9.56.7-.29,13.6-5.49a10.54,10.54,0,0,0-7.9-19.55l-13.6,5.5-.7.28-36.59-90.55L148,106a60.2,60.2,0,0,0-12.16-88.86L110.48,0,7.63,41.55,1.3,71.47a60.2,60.2,0,0,0,5.86,40.92h0a60.2,60.2,0,0,0,47.12,31.45L96.7,148l36.59,90.54-12.9,5.21A10.55,10.55,0,0,0,114.57,257.52Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 177.61 263.13"
        >
          <path
            d="M164.05,225.83,151.33,231l-.66.26-28-69.33-6.23-15.42S157.34,127,106,0L0,42.84c51.29,127,94.28,112.59,94.28,112.59l6.23,15.42h0l28,69.33-12.06,4.87a9.84,9.84,0,0,0-.43,18.08h8.35l11.53-4.66,22.15-9,.66-.26,12.72-5.14a9.86,9.86,0,0,0-7.39-18.29Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 195.65 228.64"
        >
          <path
            d="M23.59,107.89a9.46,9.46,0,0,1,12.22,5L96,228.64l30.61-12.36L166.87,200l28.78-11.63L159.76,62.72a9.46,9.46,0,0,1,5.35-12l.09,0L149.75,0,0,60.5l23.59,47.39Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 226.03 248.22"
        >
          <path
            d="M54.71,108.16A39.7,39.7,0,0,0,69.37,97.85l65.15,30.9,37.35,92.46L157.65,227a11,11,0,1,0,8.26,20.45l14.23-5.74,24.76-10,14.23-5.75a11,11,0,1,0-8.27-20.45l-14.22,5.75-37.36-92.46,39.13-104A10.89,10.89,0,0,0,184.14.82L71,46.54a39.79,39.79,0,1,0-16.27,61.62Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 156.99 252.04"
        >
          <path
            d="M19.83,130.24c16,4.84,54.52,13,54.52,13l34.22,84.7L95.85,233a9.86,9.86,0,0,0,7.39,18.29L116,246.18h0l22.14-9,12.72-5.13a9.86,9.86,0,0,0-7.39-18.29L130.71,219l-34.22-84.7s22.06-32.59,30.22-47.19a16.66,16.66,0,0,0-1.61-18.63L69.56,0H55.67L0,22.49l8.05,93.23A16.66,16.66,0,0,0,19.83,130.24Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 148.59 252.9"
        >
          <path
            d="M37.64,130.38a33.49,33.49,0,0,0,31.12,19.11l32.18,79.65L88.42,234.2a9.7,9.7,0,0,0,7.27,18l12.52-5.06,21.79-8.8,12.52-5.06a9.7,9.7,0,1,0-7.27-18l-12.52,5.06L90.55,140.69a32.84,32.84,0,0,0,7.58-39L50.28,0,0,20.31l36.22,106.4A34.76,34.76,0,0,0,37.64,130.38Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 203.85 277.69"
        >
          <path
            d="M188.42,234.15,173.93,240l-.75.3-38.45-95.16c13-9.66,19.21-23.7,14-44.63,23.08-19.58,32.2-45.13,18.24-79.67L121.49,39.22,119,4.57a4.93,4.93,0,1,0-9.83.72l2.75,37.81L0,88.3c14,34.54,38.26,46.58,68.46,44.63,10.78,18.7,25,24.46,41.05,22.4L148,250.5l-13.73,5.55a11.23,11.23,0,1,0,8.41,20.82l13.74-5.55,25.21-10.19.75-.3L196.83,255a11.23,11.23,0,0,0-8.41-20.83Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 196.3 246.22"
        >
          <path
            d="M149.12,242.15,174.18,232l.75-.3,14.39-5.82A11.16,11.16,0,1,0,181,205.22L166.57,211l-.75.31-38.57-95.47C164.38,94.34,181.41,59.38,157.42,0L0,63.6C24,123,60.52,136.3,102.19,126l38.57,95.46L127.11,227A11.16,11.16,0,0,0,121,241.5a11,11,0,0,0,3.68,4.72h14.42Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 185.76 264.11"
        >
          <path
            d="M114.57,257.52a10.53,10.53,0,0,0,13.72,5.82l12.89-5.21,23.68-9.56.7-.29,13.6-5.49a10.54,10.54,0,0,0-7.9-19.55l-13.6,5.5-.7.28-36.59-90.55L148,106a60.2,60.2,0,0,0-12.16-88.86L110.48,0,7.63,41.55,1.3,71.47a60.2,60.2,0,0,0,5.86,40.92h0a60.2,60.2,0,0,0,47.12,31.45L96.7,148l36.59,90.54-12.9,5.21A10.55,10.55,0,0,0,114.57,257.52Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 177.61 263.13"
        >
          <path
            d="M164.05,225.83,151.33,231l-.66.26-28-69.33-6.23-15.42S157.34,127,106,0L0,42.84c51.29,127,94.28,112.59,94.28,112.59l6.23,15.42h0l28,69.33-12.06,4.87a9.84,9.84,0,0,0-.43,18.08h8.35l11.53-4.66,22.15-9,.66-.26,12.72-5.14a9.86,9.86,0,0,0-7.39-18.29Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 195.65 228.64"
        >
          <path
            d="M23.59,107.89a9.46,9.46,0,0,1,12.22,5L96,228.64l30.61-12.36L166.87,200l28.78-11.63L159.76,62.72a9.46,9.46,0,0,1,5.35-12l.09,0L149.75,0,0,60.5l23.59,47.39Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 226.03 248.22"
        >
          <path
            d="M54.71,108.16A39.7,39.7,0,0,0,69.37,97.85l65.15,30.9,37.35,92.46L157.65,227a11,11,0,1,0,8.26,20.45l14.23-5.74,24.76-10,14.23-5.75a11,11,0,1,0-8.27-20.45l-14.22,5.75-37.36-92.46,39.13-104A10.89,10.89,0,0,0,184.14.82L71,46.54a39.79,39.79,0,1,0-16.27,61.62Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 156.99 252.04"
        >
          <path
            d="M19.83,130.24c16,4.84,54.52,13,54.52,13l34.22,84.7L95.85,233a9.86,9.86,0,0,0,7.39,18.29L116,246.18h0l22.14-9,12.72-5.13a9.86,9.86,0,0,0-7.39-18.29L130.71,219l-34.22-84.7s22.06-32.59,30.22-47.19a16.66,16.66,0,0,0-1.61-18.63L69.56,0H55.67L0,22.49l8.05,93.23A16.66,16.66,0,0,0,19.83,130.24Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 148.59 252.9"
        >
          <path
            d="M37.64,130.38a33.49,33.49,0,0,0,31.12,19.11l32.18,79.65L88.42,234.2a9.7,9.7,0,0,0,7.27,18l12.52-5.06,21.79-8.8,12.52-5.06a9.7,9.7,0,1,0-7.27-18l-12.52,5.06L90.55,140.69a32.84,32.84,0,0,0,7.58-39L50.28,0,0,20.31l36.22,106.4A34.76,34.76,0,0,0,37.64,130.38Z"
            fill="#3eb3ff"
          />
        </svg>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 203.85 277.69"
        >
          <path
            d="M188.42,234.15,173.93,240l-.75.3-38.45-95.16c13-9.66,19.21-23.7,14-44.63,23.08-19.58,32.2-45.13,18.24-79.67L121.49,39.22,119,4.57a4.93,4.93,0,1,0-9.83.72l2.75,37.81L0,88.3c14,34.54,38.26,46.58,68.46,44.63,10.78,18.7,25,24.46,41.05,22.4L148,250.5l-13.73,5.55a11.23,11.23,0,1,0,8.41,20.82l13.74-5.55,25.21-10.19.75-.3L196.83,255a11.23,11.23,0,0,0-8.41-20.83Z"
            fill="#3eb3ff"
          />
        </svg>
      </div>
      <div className="page split-background about-page">
        {/* <ScrollingLogoMarquee /> */}
        <Container
          maxWidth="md"
          sx={{
            // height: `calc(100vh - ${bannerHeight}px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: `-${bannerHeight / 2}px`,
          }}
        >
          <Box className="about-container">
            <Grid container spacing={{ xs: 2 }}>
              <Grid
                item
                xs={12}
                // md={6}
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
                    <h1 className="about-title">
                      Whats with all this Cock Business?
                    </h1>
                    <p className="about-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                    </p>
                  </Box>
                </Paper>
              </Grid>
              {/* timleine view on right side of art progression */}
              <Grid
                item
                xs={12}
                // md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >

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
