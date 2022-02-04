import Marquee from '@/components/Marquee'

export default ({ direction = 'left', ...rest }) => (
  <div className="marquee-container">
    <Marquee direction={direction} { ...rest } >
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Black Hole.png?size=475&webp')}></img>
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
      </div>
    </Marquee>
  </div>
)
