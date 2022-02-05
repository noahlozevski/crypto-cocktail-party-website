import { Container, Grid, Paper, Box, Collapse } from '@mui/material'


import Noah from '@/public/images/noah.png?size=1500&webp'
import Jonah from '@/public/images/jonah.png?size=1500&webp'
import Coozy from '@/public/images/coozy.png?size=1500&webp'

export default () => (
  <div className="the-team">
    <div className="team-card ">
      <div className="img ">
        <img src={Noah}></img>
      </div>
      <div className="title">Head Dev</div>
      <div className="name">The Validator</div>
      <div className="description">Chief of Technical Operations. C++, Java, Tequila.</div>
    </div>
    <div className="team-card">
      <div className="img">
        <img src={Jonah}></img>
      </div>
      <div className="title">Artist</div>
      <div className="name">Jonah</div>
      <div className="description">CCO - Creative Cocktail Operations. Lead Artist. Double RedBull Vodka.</div>
    </div>
    <div className="team-card">
      <div className="img">
        <img src={Coozy}></img>
      </div>
      <div className="title">Project Manager</div>
      <div className="name">Coozy</div>
      <div className="description">Head of Marketing and Project Direction. Life of the party.</div>
    </div>
  </div>
)
