import HeroCta from "../heroCta"

import styles from "./hero.module.css"
import Image from "next/image"

const Hero = () => {
  return (
     <section className={styles.heroSection}>
          <h1>Get a Website That Builds social Authority and Conversion by Mansiv Al Ferdous<Image src="/images/portfolio_image double edited.png" alt="profile image" className={styles.heroImg} width={300} height={300} /></h1>
          <p>I build websites that doesn’t just showcase your work in a way that attracts clients, but I also focus on
            copywriting and organized content so your business can by found at the top of most search engines.</p>
          <HeroCta/>
        </section>
  )
}

export default Hero
