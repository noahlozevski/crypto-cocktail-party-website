import Marquee from '@/components/Marquee'

export default ({ direction = 'left' }) => (
  <div className="marquee-container">
    <Marquee direction={direction} >
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Black Hole.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Browser.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Chicken Wing.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Crypto.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Cucci.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Greece.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Green Dildo.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Macintosh.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Mario.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Microchip.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Midas.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Mondrian.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/OG Chicken.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/OG Cockette.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Poker.png')}></img>
        </div>
      </div>
      <div className="film">
        <div className="film__frame">
          <img className="scrolling-nft" src={require('@/public/images/scrolling-nfts/Spunky.png')}></img>
        </div>
      </div>
    </Marquee>
  </div>
)
