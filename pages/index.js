import Marquee from '@/components/Marquee'
import LiquidButton from '@/components/LiquidButton'
// import Link from 'next/link'
// import c from '@/public/images/nfts/Chicken Wing.png'
// import { useRouter } from 'next/router'

// import styles from '../styles/Home.module.css'

export default () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('../public/images/nfts', false, /\.(png|jpe?g|svg)$/));
  console.log(images)

  return (
    <div id="home">
      <div className="gallery-container">
        <Marquee>
        <img src={require('@/public/images/nfts/Chicken Wing.png')}></img>
        </Marquee>
      </div>
      <LiquidButton>Connect Wallet</LiquidButton>
    </div>
  )
}
