import Marquee from '@/components/Marquee'
import BlackHole from '@/public/images/scrolling-nfts/Black Hole.png?size=800&webp'
import Browser from '@/public/images/scrolling-nfts/Browser.png?size=800&webp'
import ChickenWing from '@/public/images/scrolling-nfts/Chicken Wing.png?size=800&webp'
import Crypto from '@/public/images/scrolling-nfts/Crypto.png?size=800&webp'
import Cucci from '@/public/images/scrolling-nfts/Cucci.png?size=800&webp'
import Greece from '@/public/images/scrolling-nfts/Greece.png?size=800&webp'
import GreenDildo from '@/public/images/scrolling-nfts/Green Dildo.png?size=800&webp'
import Macintosh from '@/public/images/scrolling-nfts/Macintosh.png?size=800&webp'
import Mario from '@/public/images/scrolling-nfts/Mario.png?size=800&webp'
import Microchip from '@/public/images/scrolling-nfts/Microchip.png?size=800&webp'
import Midas from '@/public/images/scrolling-nfts/Midas.png?size=800&webp'
import Mondrian from '@/public/images/scrolling-nfts/Mondrian.png?size=800&webp'
import OgChicken from '@/public/images/scrolling-nfts/OG Chicken.png?size=800&webp'
import OgCockette from '@/public/images/scrolling-nfts/OG Cockette.png?size=800&webp'
import Poker from '@/public/images/scrolling-nfts/Poker.png?size=800&webp'
import Spunky from '@/public/images/scrolling-nfts/Spunky.png?size=800&webp'

export default ({ direction = 'left', ...rest }) => (
  <div className="marquee-container">
    <Marquee direction={direction} { ...rest } >
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={BlackHole}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Browser}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={ChickenWing}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Crypto}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Cucci}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Greece}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={GreenDildo}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Macintosh}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Mario}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Microchip}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Midas}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Mondrian}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={OgChicken}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={OgCockette}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Poker}></img>
      <img className="scrolling-nft" alt="Crypto Cocktail Party Chicken" src={Spunky}></img>
      {/* <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Black Hole.png?size=800&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Browser.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Chicken Wing.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Crypto.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Cucci.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Greece.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Green Dildo.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Macintosh.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Mario.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Microchip.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Midas.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Mondrian.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/OG Chicken.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/OG Cockette.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Poker.png?size=475&webp')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Spunky.png?size=475&webp')}></img>
        </div>
      </div> */}
    </Marquee>
  </div>
)
