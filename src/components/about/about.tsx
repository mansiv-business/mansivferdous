import * as motion from "motion/react-client"

import styles from "./about.module.css"
import { scaleRight } from "@/lib/animation"

const About = () => {
  return (

    <section className={styles.aboutSection}>
      <div className={styles.aboutDiv}>
        <h2>Information about me that you might want to know before hiring.</h2>
        <p>I’m Mansiv Al Ferdous.A Next.JS developer and UI/UX designer. My way of designing websites is far different than most. I don’t just focus on
          fancy UI but also UX so clients get the best experience when roaming at your site. My focus is
          simple, and that is to increase your leads through my service by generating SEO traffic and making
          clean and interactive websites that bring client clarity.</p>
      </div>

      <motion.div className="div-hr" {...scaleRight}></motion.div>

    </section>
  )
}

export default About
