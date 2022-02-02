import Marquee from '@/components/Marquee'

export default ({ direction = 'left' }) => (
  <div className="marquee-container">
    <Marquee direction={direction}>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Black Hole.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Browser.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Chicken Wing.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Crypto.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Cucci.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Greece.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Green Dildo.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Macintosh.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Mario.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Microchip.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Midas.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Mondrian.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/OG Chicken.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/OG Cockette.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Poker.png')}
      ></img>
      <img
        className="scrolling-nft"
        src={require('@/public/images/scrolling-nfts/Spunky.png')}
      ></img>
    </Marquee>
  </div>
)
