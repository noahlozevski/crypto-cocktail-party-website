import Tilt from 'react-parallax-tilt'
import { Container, Grid, Paper, Box, Collapse } from '@mui/material'

export default () => (
  <Tilt
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
        {/* <img className="cycle" src={require('@/public/images/cycle-512.gif')} height={514} width={512}></img> */}
      </div>
    </Paper>
  </Tilt>
)
