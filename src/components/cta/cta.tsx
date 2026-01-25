import Image from "next/image"
import styles from "./cta.module.css"

const Cta = () => {
  return (
    <section className={styles.contactSection}>
      <h2>Lets Work Together</h2>

      <div>
        <a href="https://cal.com/mansiv-business/15min" className={styles.button} target="_blank" rel="noopener noreferrer">Book A Quick Call &rarr;</a>

        <h3>Contact Me Through Social Media:</h3>
        <ul>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mansivbusiness@gmail.com&su=Hello&body=Hi%20Mansiv," target="_blank"rel="noopener noreferrer"><Image src="images/ic_outline-email.svg" alt="email" width={20} height={20}/></a></li>
          <li><a href="https://www.linkedin.com/in/mansiv-business" target="_blank"rel="noopener noreferrer"><Image src="images/mingcute_linkedin-line.svg" alt="linkedin" width={20} height={20}/></a></li>
          <li><a href="https://x.com/MansivFerdous" target="_blank"rel="noopener noreferrer"><Image src="images/prime_twitter.svg" alt="twitter" width={20} height={20}/></a></li>
          <li><a href="https://www.instagram.com/mansiv_ferdous" target="_blank"rel="noopener noreferrer"><Image src="images/mdi_instagram.svg" alt="instagram" width={20} height={20}/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Cta
