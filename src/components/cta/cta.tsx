'use client'

import { useState, useEffect} from "react"
import Image from "next/image"
import styles from "./cta.module.css"

const Cta = () => {

  const[emailHref, setEmailHref] = useState("");
  
    useEffect(() => {
      let email = "mansivbusiness@gmail.com";
      let subject = "Website design | development request"
      let body = "Hi Mansiv"
  
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
      if(isMobile){
        setEmailHref(`mailto:${email}?subject=${subject}&body=${body}`);
      }else{
        setEmailHref(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`);
      }
    },[])

  return (
    <section className={styles.contactSection}>
      <h2>Lets Work Together</h2>

      <div>
        <a href="https://cal.com/mansiv-business/15min" className={styles.button} target="_blank" rel="noopener noreferrer">Book A Quick Call &rarr;</a>

        <h3>Contact Me Through Social Media:</h3>
        <ul>
          <li><a href={emailHref} target={emailHref.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer"><Image src="images/ic_outline-email.svg" alt="email" width={20} height={20}/></a></li>
          <li><a href="www.linkedin.com/in/mansiv-ferdous-b87988388" target="_blank"rel="noopener noreferrer"><Image src="images/mingcute_linkedin-line.svg" alt="linkedin" width={20} height={20}/></a></li>
          <li><a href="https://x.com/MansivFerdous" target="_blank"rel="noopener noreferrer"><Image src="images/prime_twitter.svg" alt="twitter" width={20} height={20}/></a></li>
          <li><a href="https://www.instagram.com/mansiv_ferdous" target="_blank"rel="noopener noreferrer"><Image src="images/mdi_instagram.svg" alt="instagram" width={20} height={20}/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Cta
