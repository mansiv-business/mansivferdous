'use client'
import { AnimatePresence , motion } from "motion/react"
import { useState, useEffect } from "react"

import { show } from "@/lib/animation"
import styles from "./header/header.module.css"


const CtaButton = () => {

    const[isClicked, setClicked] = useState(false)
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
    <>
      <button onClick={() => { setClicked(true)}} className={styles.ctabutton}>have a quick chat with Mansiv Al Ferdous</button>

      <AnimatePresence>
        {isClicked &&
        
          <motion.div className={styles.popupDiv} {...show}>
            
            
            <button onClick={() => setClicked(false)} className={styles.exit}>×</button>
            <ul className={styles.popupList}>
              <li className={styles.anchor}><button><a href={emailHref} rel="noopener noreferrer" target={emailHref.startsWith('http') ? "_blank" : "_self"} ><img src="../images/black email.svg" alt="email" /></a></button></li>
              <li className={styles.anchor}><button><a href="https://x.com/MansivFerdous" target="_blank"rel="noopener noreferrer"><img src="../images/black twitter.svg" alt="linkedin" /></a></button></li>
              <li className={styles.anchor}><button><a href="www.linkedin.com/in/mansiv-ferdous-b87988388" target="_blank"rel="noopener noreferrer"><img src="../images/black linked in.svg" alt="twitter" /></a></button></li>
              <li className={styles.anchor}><button><a href="https://www.instagram.com/mansiv_ferdous" target="_blank"rel="noopener noreferrer"><img src="../images/black ig.svg" alt="instagram" /></a></button></li>
            </ul>
            <p>Where would you like to chat with Mansiv?</p>
          </motion.div>
        }
      </AnimatePresence>


    </>
  )
}

export default CtaButton
