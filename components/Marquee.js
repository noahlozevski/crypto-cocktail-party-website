import Marquee from 'react-fast-marquee'

export default ({
  play = true,
  pauseOnHover = false,
  pauseOnClick = false,
  direction = 'left',
  speed = 50,
  showGradient = false,
  children,
}) => (
  <Marquee
    className="marquee"
    play={play}
    pauseOnHover={pauseOnHover}
    pauseOnClick={pauseOnClick}
    direction={direction}
    speed={speed}
    delay={0}
    loop={0} // infinite
    gradient={showGradient}
  >
    {children}
  </Marquee>
)
