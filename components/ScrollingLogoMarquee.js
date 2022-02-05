import Marquee from '@/components/Marquee'
import TextLogoWide from '@/public/images/logo-white.svg'
import Cup1 from '@/public/images/drinks/cup1.png?size=75&webp'
import Cup2 from '@/public/images/drinks/cup2.png?size=75&webp'
import Cup3 from '@/public/images/drinks/cup3.png?size=75&webp'

export default ({ direction = 'left' }) => {
  const text = (
    <div className="text-logo-container">
      <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
    </div>
  )
  const cup1 = (
    <div className="drink-container">
      <img className="drink" alt="" src={Cup1} />
    </div>
  )
  const cup2 = (
    <div className="drink-container">
      <img className="drink" alt="" src={Cup2} />
    </div>
  )
  const cup3 = (
    <div className="drink-container">
      <img className="drink" alt="" src={Cup3} />
    </div>
  )

  return (
    <div className="marquee-container marquee-container-text">
      <Marquee direction={direction} speed={40}>
        <div className="coming-soon-marquee ">
        {text}
        {cup1}
        {text}
        {cup2}
        {text}
        {cup3}
        {text}
        {cup1}
        {text}
        {cup2}
        {text}
        {cup3}

          {/*
        <span className="text-logo-container">
          <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
        </span>

        <span className="drink-container">
          <svg className="drink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.03 248.22">
            <path d="M54.71,108.16A39.7,39.7,0,0,0,69.37,97.85l65.15,30.9,37.35,92.46L157.65,227a11,11,0,1,0,8.26,20.45l14.23-5.74,24.76-10,14.23-5.75a11,11,0,1,0-8.27-20.45l-14.22,5.75-37.36-92.46,39.13-104A10.89,10.89,0,0,0,184.14.82L71,46.54a39.79,39.79,0,1,0-16.27,61.62Z" fill="#3eb3ff" />
          </svg>
        </span>

        <span className="text-logo-container">
          <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
        </span>

        <span className="drink-container">
          <svg className="drink reversed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.99 252.04">
            <path d="M19.83,130.24c16,4.84,54.52,13,54.52,13l34.22,84.7L95.85,233a9.86,9.86,0,0,0,7.39,18.29L116,246.18h0l22.14-9,12.72-5.13a9.86,9.86,0,0,0-7.39-18.29L130.71,219l-34.22-84.7s22.06-32.59,30.22-47.19a16.66,16.66,0,0,0-1.61-18.63L69.56,0H55.67L0,22.49l8.05,93.23A16.66,16.66,0,0,0,19.83,130.24Z" fill="#3eb3ff" />
          </svg>
        </span>

        <span className="text-logo-container">
          <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
        </span> */}

          {/* <div className="drink-container">
            <img className="drink" alt="" src={Cup1} />
          </div> */}
          {/*
        <span className="text-logo-container">
          <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
        </span>
        <span className="drink-container">
          <svg className="drink reversed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.76 264.11">
            <path d="M114.57,257.52a10.53,10.53,0,0,0,13.72,5.82l12.89-5.21,23.68-9.56.7-.29,13.6-5.49a10.54,10.54,0,0,0-7.9-19.55l-13.6,5.5-.7.28-36.59-90.55L148,106a60.2,60.2,0,0,0-12.16-88.86L110.48,0,7.63,41.55,1.3,71.47a60.2,60.2,0,0,0,5.86,40.92h0a60.2,60.2,0,0,0,47.12,31.45L96.7,148l36.59,90.54-12.9,5.21A10.55,10.55,0,0,0,114.57,257.52Z" fill="#3eb3ff" />
          </svg>
        </span>
        <span className="text-logo-container">
          <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
        </span>
        <span className="drink-container">
          <svg className="drink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.61 263.13">
            <path d="M164.05,225.83,151.33,231l-.66.26-28-69.33-6.23-15.42S157.34,127,106,0L0,42.84c51.29,127,94.28,112.59,94.28,112.59l6.23,15.42h0l28,69.33-12.06,4.87a9.84,9.84,0,0,0-.43,18.08h8.35l11.53-4.66,22.15-9,.66-.26,12.72-5.14a9.86,9.86,0,0,0-7.39-18.29Z" fill="#3eb3ff" />
          </svg>
        </span>
        <span className="text-logo-container">
          <img className="text-logo" alt="Crypto Cocktail Party" src={TextLogoWide}></img>
        </span>
        <span className="drink-container">
          <svg className="drink reversed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.65 228.64">
            <path d="M23.59,107.89a9.46,9.46,0,0,1,12.22,5L96,228.64l30.61-12.36L166.87,200l28.78-11.63L159.76,62.72a9.46,9.46,0,0,1,5.35-12l.09,0L149.75,0,0,60.5l23.59,47.39Z" fill="#3eb3ff" />
          </svg>
        </span>
         */}
        </div>
      </Marquee>
    </div>
  )
}
