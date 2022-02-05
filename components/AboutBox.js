import { Container, Grid, Paper, Box, Collapse } from '@mui/material'

export default () => (
  <Box className="about-container">
    <Paper className="about-info-box purple-with-black-border " elevation={0} sx={{ borderRadius: 12, my: 8, px: 4, py: 4 }}>
      <Grid container spacing={{ xs: 2 }} className="">
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box className="">
            <h1 className="about-title">What is Crypto Cocktail Party?</h1>
            <hr></hr>
            <p className="about-text">Crypto Cocktail Party is a community driven project consisting of 7,777 unique Cocks & Cockettes. The main focus of the collection is to build a ‘flock’ and give back to the flock’s members. We are re-distributing 25% of our revenue back to the holders in numerous giveaways, IRL meet-ups, activities, and much more to come. So the real question is, are you going to join the party?</p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <div className="cycle-container">
            <img className="cycle" height={514} width={512} src={require('@/public/images/scrolling-nfts/Macintosh.png?size=1500&webp')}></img>
          </div>
        </Grid>
      </Grid>
    </Paper>
  </Box>
)