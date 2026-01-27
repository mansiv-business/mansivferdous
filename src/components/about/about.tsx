import styles from "./about.module.css"
import Image from "next/image"

const About = () => {
  return (

    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutDiv}>
        <h2>Information about me that you might want to know before hiring.</h2>
        <p className="p">I’m Mansiv Al Ferdous. A Next.JS developer and UI/UX designer. My way of designing websites is far different than most. I don’t just focus on
          fancy UI but also UX so clients get the best experience when roaming at your site. My focus is
          simple, and that is to increase your leads through my service by generating SEO traffic and making
          clean and interactive websites that bring client clarity.</p>
      </div>

      <div className={styles.imageDiv}>
        <Image src="/images/portfolioImg.png" alt="profile image" className={styles.heroImg} width={500} height={500} />
      </div>
    </section>
  )
}

export default About
