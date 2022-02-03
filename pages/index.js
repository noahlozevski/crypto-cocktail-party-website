import Marquee from '@/components/Marquee'
import TriImageViewer from '@/components/TriImageViewer'
import FloatingSvgs from '@/components/FloatingSvgs'
import Headroom from 'react-headroom'
import Tilt from 'react-parallax-tilt'
import { useState, useEffect } from 'react'
import { BANNER_HEIGHT, SCROLLER_HEIGHT } from '@/constants/styles'
import ScrollingNfts from '@/components/ScrollingNfts'
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { useTheme } from '@mui/material/styles'

import BigCock from '@/components/BigCock'
import ScrollingLogoMarquee from '@/components/ScrollingLogoMarquee'
import LiquidButton from '@/components/LiquidButton'
// import { getPhotosFromDir } from '@/plugins/utils'
import { NFT_IMAGE_SRCS } from '@/constants/images'
import { Container, Grid, Paper, Box, Collapse } from '@mui/material'
import classNames from 'classnames'
// import Link from 'next/link'
// import c from '@/public/images/nfts/Chicken Wing.png'
// import { useRouter } from 'next/router'

// import styles from '../styles/Home.module.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import CardCarousel from '@/components/CardCarousel'

export default () => {
  const [activeFaq, setActiveFaq] = useState(null)
  // const toggleGradient = (e) => (e.preventDefault(), setUseGradient((g) => !g))

  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up('sm'))
  // useEffect(() => setInterval(() => document.querySelector('#app').classList.toggle('cursor'), 3000),[])

  return (
    <div id="home">
      <div className={classNames('page', 'splash', 'solid-background')} style={{ overflow: 'hidden' }}>
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
              <Box
                className="narrow-logo-container"
                sx={{
                  height: '80px',
                }}
              >
                <img height={50} src={require('@/public/images/logo-narrow-white.svg')}></img>
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
            <BigCock />
            {/* <img className="big-cock" src={require('@/public/images/og-cutout.svg')}></img> */}
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
      <div className="page about-page orange-background ">
        {/* <ScrollingLogoMarquee /> */}
        <Container
          maxWidth="lg"
          sx={{
            // height: `calc(100vh - ${BANNER_HEIGHT}px)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: `-${BANNER_HEIGHT / 2}px`,
          }}
        >
          <Box className="about-container">
            <Paper
              className="about-info-box purple-with-black-border "
              elevation={4}
              sx={{
                borderRadius: 12,
                my: 6,
                px: 4,
                py: 4,
              }}
            >
              <Grid container spacing={{ xs: 2 }} className="">
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
                  <Box className="">
                    <h1 className="about-title">What is Crypto Cocktail Party?</h1>
                    <hr></hr>
                    <p className="about-text">Crypto Cocktail Party is a community driven project consisting of 7,777 unique Cocks & Cockettes. The main focus of the collection is to build a ‘flock’ and give back to the flock’s members. We are re-distributing 25% of our revenue back to the holders in numerous giveaways, IRL meet-ups, activities, and much more to come. </p>
                    <p className="about-text">So the real question is, do you want to join the party?</p>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // minWidth: 'fit-content'
                  }}
                >
                  <div className="cycle-container">
                    <img
                      className="cycle"
                      // src={require('@/public/images/cycle-512.gif')}
                      height={514}
                      width={512}
                      src={require('@/public/images/scrolling-nfts/Macintosh.png')}
                    ></img>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            {/* timleine view on right side of art progression */}
            {/* <Grid
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
              </Grid> */}
          </Box>
        </Container>
        <Container maxWidth="xl">
          <div className="the-team">
            <div className="team-card ">
              <div className="img ">
                <img src={require('@/public/images/scrolling-nfts/Greece.png')}></img>
              </div>
              <div className="title">Head Dev</div>
              <div className="name">The Validator</div>
              <div className="description">Solidity expert. Cocktail Enthusiast. C++, Java, Tequila. </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src={require('@/public/images/scrolling-nfts/Spunky.png')}></img>
              </div>
              <div className="title">Artist</div>
              <div className="name">Jonah</div>
              <div className="description">Double Vodka RedBull. Cocktail Enthusiast. C++, Java, Tequila.</div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src={require('@/public/images/scrolling-nfts/Browser.png')}></img>
              </div>
              <div className="title">Project Manager</div>
              <div className="name">Coozy</div>
              <div className="description">Head of Marketing and Project Direction. Always looking for a good party.</div>
            </div>
          </div>
        </Container>
        {/* <ScrollingNfts direction="right" /> */}
      </div>
      <ScrollingNfts direction="right" />
      <ScrollingNfts />
      <ScrollingNfts direction="right" />
      <ScrollingNfts />
      <ScrollingNfts direction="right" />
      <div className="page faqs green-background ">
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
          <Box className="faq-container">
            <Paper
              className="faq-info-box"
              elevation={4}
              sx={{
                borderRadius: 12,
                my: 6,
                px: 4,
                py: 4,
              }}
            >
              <h1 className="title">FAQ's</h1>
              <div className="items">
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 2 && "expanded")} onClick={() => setActiveFaq(p => p !== 2 && 2)}>WHAT IS THE TOTAL SUPPLY ?</h2>
                  <Collapse in={activeFaq === 2}>
                    <p className="answer">There will be 7,777 NFT’s in our collection.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 0 && "expanded")} onClick={() => setActiveFaq(p => p !== 0 && 0)} >WHEN IS THE OFFICIAL LAUNCH ?</h2>
                  <Collapse in={activeFaq === 0}>
                    <p className="answer">The launch date is set for the end of February. BarnPass Holders will be notified 48 hours prior to mint to give ample time to fit the launch into their schedule. The Public Sale will commence 24 hours after the conclusion of the Pre-Sale.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 1 && "expanded")} onClick={() => setActiveFaq(p => p !== 1 && 1)}>HOW DO I GET A BARNPASS ?</h2>
                  <Collapse in={activeFaq === 1}>
                    <p className="answer">You can get the BarnPass role by following the steps in the Discord. Under the #how-to-barnpass channel.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 3 && "expanded")} onClick={() => setActiveFaq(p => p !== 3 && 3)}>WHAT IS THE MINT PRICE OF CRYPTO COCKTAIL PARTY ?</h2>
                  <Collapse in={activeFaq === 3}>
                    <p className="answer">Our BarnPass Holders mint price will be .077. The Public Sale mint price is TBD.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 4 && "expanded")} onClick={() => setActiveFaq(p => p !== 4 && 4)}>HOW CAN I BUY A CRYPTO COCKTAIL PARTY NFT ?</h2>
                  <Collapse in={activeFaq === 4}>
                    <div className="answer">
                      <p>
                      You will be able to purchase to the NFT directly from this website on our Mint Date by using the MetaMask extension. If you are new to the NFT space, follow the steps below to set up your MetaMask.</p>
                      <ol>
                        <li>
                          Download the{' '}
                          <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                            metamask.io
                          </a>
                          {' '}extension on your browser
                        </li>
                        <li>Purchase Ethereum from various exchanges. You can do so on Coinbase or Opensea for example.</li>
                        <li>Transfer the Ethereum to your MetaMask wallet.</li>
                      </ol>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Paper>
            {/* timleine view on right side of art progression */}
            {/* <Grid
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
               </Grid> */}
          </Box>
          {/* <Box className="faq-container">

              <h1 className="title">FAQ's</h1>
              <div className="items">
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 2 && "expanded")} onClick={() => setActiveFaq(p => p !== 2 && 2)}>WHAT IS THE TOTAL SUPPLY ?</h2>
                  <Collapse in={activeFaq === 2}>
                    <p className="answer">There will be 7,777 NFT’s in our collection.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 0 && "expanded")} onClick={() => setActiveFaq(p => p !== 0 && 0)} >WHEN IS THE OFFICIAL LAUNCH ?</h2>
                  <Collapse in={activeFaq === 0}>
                    <p className="answer">The launch date is set for the end of February. BarnPass Holders will be notified 48 hours prior to mint to give ample time to fit the launch into their schedule. The Public Sale will commence 24 hours after the conclusion of the Pre-Sale.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 1 && "expanded")} onClick={() => setActiveFaq(p => p !== 1 && 1)}>HOW DO I GET A BARNPASS ?</h2>
                  <Collapse in={activeFaq === 1}>
                    <p className="answer">You can get the BarnPass role by following the steps in the Discord. Under the #how-to-barnpass channel.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 3 && "expanded")} onClick={() => setActiveFaq(p => p !== 3 && 3)}>WHAT IS THE MINT PRICE OF CRYPTO COCKTAIL PARTY ?</h2>
                  <Collapse in={activeFaq === 3}>
                    <p className="answer">Our BarnPass Holders mint price will be .077. The Public Sale mint price is TBD.</p>
                  </Collapse>
                </div>
                <div className="item" >
                  <h2 className={classNames("question", activeFaq === 4 && "expanded")} onClick={() => setActiveFaq(p => p !== 4 && 4)}>HOW CAN I BUY A CRYPTO COCKTAIL PARTY NFT ?</h2>
                  <Collapse in={activeFaq === 4}>
                    <div className="answer">
                      <p>
                      You will be able to purchase to the NFT directly from this website on our Mint Date by using the MetaMask extension. If you are new to the NFT space, follow the steps below to set up your MetaMask.</p>
                      <ol>
                        <li>
                          Download the{' '}
                          <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">
                            metamask.io
                          </a>
                          {' '}extension on your browser
                        </li>
                        <li>Purchase Ethereum from various exchanges. You can do so on Coinbase or Opensea for example.</li>
                        <li>Transfer the Ethereum to your MetaMask wallet.</li>
                      </ol>
                    </div>
                  </Collapse>
                </div>
              </div>
            {/* timleine view on right side of art progression */}
            {/* <Grid
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
               </Grid> */}
          {/* </Box> */}
        </Container>
        <Container maxWidth="xl">
          <div className="the-team">
            <div className="team-card">
              <div className="img">
                <img src={require('@/public/images/scrolling-nfts/Browser.png')}></img>
              </div>
              <div className="title">Head Dev</div>
              <div className="name">The Validator</div>
              <div className="description">Solidity expert. Cocktail Enthusiast. C++, Java, Tequila. </div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src={require('@/public/images/scrolling-nfts/Browser.png')}></img>
              </div>
              <div className="title">Artist</div>
              <div className="name">Jonah</div>
              <div className="description">Double Vodka RedBull. Cocktail Enthusiast. C++, Java, Tequila.</div>
            </div>
            <div className="team-card">
              <div className="img">
                <img src={require('@/public/images/scrolling-nfts/Browser.png')}></img>
              </div>
              <div className="title">Project Manager</div>
              <div className="name">Coozy</div>
              <div className="description">Head of Marketing and Project Direction. Always looking for a good party.</div>
            </div>
          </div>
        </Container>
        {/* <ScrollingNfts direction="right" /> */}
      </div>
      {/* <div className="page " */}
    </div>
  )
}
