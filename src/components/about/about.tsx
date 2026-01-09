import * as motion from "motion/react-client"

import styles from "./about.module.css"

const About = () => {
  return (

    <section className={styles.aboutSection}>
      <div className={styles.aboutDiv}>
        <h2>Information about me that you might want to know before hiring.</h2>
        <motion.p
          initial={{ opacity: 0, x: "-110%" }}
          whileInView={{ opacity: 1, x: "0" }}
          viewport={{ margin: "-150px 500px", once: true }}
          transition={{ opacity: { duration: 0.2, delay: 0.1 }, x: { delay: 0, duration: 0.5 } }}>I’m Mansiv Al Ferdous.A Next.JS developer and UI/UX designer. My way of designing websites is far different than most. I don’t just focus on
          fancy UI but also UX so clients get the best experience when roaming at your site. My focus is
          simple, and that is to increase your leads through my service by generating SEO traffic and making
          clean and interactive websites that bring client clarity.</motion.p>
      </div>

      <div className="div-hr"></div>

    </section>
  )
}

export default About
