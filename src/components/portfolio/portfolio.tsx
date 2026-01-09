import * as motion from "motion/react-client"
import Image from 'next/image'

import styles from "./portfolio.module.css"


const Portfolio = () => {
  return (

    <section className={styles.portfolioSection}>
      <h2>Featured Works</h2>
      <div>
          <Image
            src="/images/laptop-mockup.png"
            width={500}
            height={500}
            alt="laptop view of showcased website"
            className="img"
          />
          <p className="text">Websites with a premium User Experience.</p>
      </div>
      <div>
          <Image src="/images/mobile-mockup.png"
            alt="mobile view of showcased website"
            height={500}
            width={500}
            className="img" />
            <p className="text">Available for all types of device users.</p>
      </div>
      <div className={styles.live}>
        <h4>View Live:</h4>
        <a href="http://nextjs-mockup.vercel.app" target="_blank" rel="noopener noreferrer">nextjs-mockup.vercel.app</a>
      </div>
    </section>
  )
}

export default Portfolio
