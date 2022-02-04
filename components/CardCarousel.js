import CardCarouselComponent from '@/components/card-carousel/CardCarouselComponent'

// // class MyCarousel {
// const CONTAINER_STYLE = {
//   position: 'relative',
//   height: '100vh',
//   width: '100%',
//   display: 'flex',
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'middle',
// }

// const CARD_STYLE = {
//   height: '200px',
//   width: '200px',
//   paddingTop: '80px',
//   textAlign: 'center',
//   background: '#52C0F5',
//   color: '#FFF',
//   fontFamily: 'sans-serif',
//   fontSize: '12px',
//   textTransform: 'uppercase',
//   borderRadius: '10px',
//   boxSizing: 'border-box',
// }

export default () => {
  return (
    // <div className="card-carousel-container">
    <>
      <CardCarouselComponent autoplay autoplay_speed={1500} baseZIndex={2}>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Black Hole.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Browser.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Chicken Wing.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Crypto.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Cucci.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Greece.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Green Dildo.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Macintosh.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Mario.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Microchip.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Midas.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Mondrian.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/OG Chicken.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/OG Cockette.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Poker.png?size=1500&webp')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Spunky.png?size=1500&webp')}></img>
        </div>
      </CardCarouselComponent>
      </>
    // </div>
  )
}
