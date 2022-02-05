import _ from 'lodash'
import Marquee from '@/components/Marquee'
import TriImageViewer from '@/components/TriImageViewer'
import FloatingSvgs from '@/components/FloatingSvgs'
import Headroom from 'react-headroom'
import { useState, useEffect } from 'react'
import { BANNER_HEIGHT, SCROLLER_HEIGHT } from '@/constants/styles'
import ScrollingNfts from '@/components/ScrollingNfts'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

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
import FastMarquee from 'react-fast-marquee'
// import styles from '../styles/Home.module.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import CardCarousel from '@/components/CardCarousel'
import NavBar from '@/components/NavBar'
import Faqs from '@/components/pages/Faqs'
import Roadmap from '@/components/pages/Roadmap'
import TheTeam from '@/components/TheTeam'
import AboutBox from '@/components/AboutBox'

export default () => {
  // const toggleGradient = (e) => (e.preventDefault(), setUseGradient((g) => !g))
  const theme = useTheme()
  const smAndUp = useMediaQuery(theme.breakpoints.up('sm'))
  // useEffect(() => setInterval(() => document.querySelector('#app').classList.toggle('cursor'), 3000),[])

  return (
    <div id="home">
      <div className={classNames('page', 'splash', 'solid-background')} style={{ overflow: 'hidden' }}>
        {/* header */}
        {/* <Headroom style={{ zIndex: 2 }}>
          <NavBar />
        </Headroom> */}

        <div className="sticky-header">
          <NavBar />
          {smAndUp && (
            <FastMarquee className="film-strip-boxes" loop={0} play={true} speed={40} pauseOnHover={false} pauseOnClick={false} gradient={false} direction="right">
              {_.range(0, 200).map((i) => (
                <span key={i} className="film-box"></span>
              ))}
              {/* <div className="film-box">
            </div> */}
            </FastMarquee>
          )}
        </div>

        <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 8, lg: 10 }, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 0 }, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <BigCock />
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', mt: { xs: 2, md: -5, lg: 'auto' }, mb: { xs: 4, md: 0 } }}>
            <div className="mint-info-container">
              <div className="mint-info">0 / 7777 Minted</div>
              <div className="mint-info-coming-soon">Coming Late Feb!</div>

              <div className="connect-button-wrapper">
                <LiquidButton>Connect Wallet</LiquidButton>
              </div>
              <Box sx={{ display: { xs: 'none', md: 'initial' }, height: { md: 280, lg: 450 } }}>
                <CardCarousel />
              </Box>
            </div>
          </Grid>
        </Container>

        <ScrollingLogoMarquee />

        <FloatingSvgs />
      </div>
      <div className="page about-page orange-background ">
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AboutBox />
        </Container>
      </div>

      {/* <ScrollingNfts direction="right" />
      <ScrollingNfts />
      <ScrollingNfts direction="right" /> */}

      <ScrollingNfts speed={40} />
      <div className="page roadmap blue-background">
        <div className="caution-tape-divider reverse remove-top-border"></div>
        <Roadmap />
        <div className="caution-tape-divider"></div>
      </div>

      <div className="page team green-background ">
        <Container maxWidth="xl" sx={{}}>
          <Box sx={{ py: 8 }}>
          <Box className="team-info-box" elevation={0} sx={{ borderRadius: 12, px: 4, py: 4 }}>
            <h1 className="box-title">The Team</h1>
          <TheTeam />
          </Box>
          </Box>
        </Container>
      </div>
      <div className="caution-tape-divider alternate reverse"></div>

      <div className="page faqs green-background ">
        <Faqs />
      </div>

      <div className="footer">
        <NavBar />
      </div>
    </div>
  )
}
