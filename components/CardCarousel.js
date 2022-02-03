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
          <img src={require('@/public/images/scrolling-nfts/Black Hole.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Browser.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Chicken Wing.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Crypto.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Cucci.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Greece.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Green Dildo.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Macintosh.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Mario.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Microchip.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Midas.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Mondrian.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/OG Chicken.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/OG Cockette.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Poker.png')}></img>
        </div>
        <div className="card-carousel-image-container">
          <img src={require('@/public/images/scrolling-nfts/Spunky.png')}></img>
        </div>
      </CardCarouselComponent>
      </>
    // </div>
  )
}
