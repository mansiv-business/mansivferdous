'use client'
import { useState, useEffect } from "react"
import styles from "./header.module.css"
import { AnimatePresence, motion } from "motion/react";
import { show } from "@/lib/animation";
import Image from "next/image";
import Link from "next/link";


const Header = () => {

  const [isVisible, setVisible] = useState(false);
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
      <header className={styles.header}>
        <nav className={styles.navBar}>

          <Link href="/">Mansiv Ferdous</Link>

          <button className={styles.ctaNav} onClick={() => setVisible(true)}>Have a Quick Chat</button>

        </nav>
      </header>
      <AnimatePresence>
        {isVisible &&
        
          <motion.div className={styles.popupDiv} {...show}>
            
            
            <button onClick={() => setVisible(false)} className={styles.exit}>×</button>
            <ul className={styles.popupList}>
              <li><button><a href={emailHref} rel="noopener noreferrer" target={emailHref.startsWith('http') ? "_blank" : "_self"}><Image src="../images/black email.svg" alt="email" height={20} width={20}/></a></button></li>
              <li><button><a href="https://x.com/MansivFerdous" target="_blank"rel="noopener noreferrer"><Image src="../images/black twitter.svg" alt="linkedin" height={20} width={20}/></a></button></li>
              <li><button><a href="www.linkedin.com/in/mansiv-ferdous-b87988388" target="_blank"rel="noopener noreferrer"><Image src="../images/black linked in.svg" alt="twitter" height={20} width={20}/></a></button></li>
              <li><button><a href="https://www.instagram.com/mansiv_ferdous" target="_blank"rel="noopener noreferrer"><Image src="../images/black ig.svg" alt="instagram" height={20} width={20}/></a></button></li>
            </ul>
            <p>Where would you like to chat with Mansiv?</p>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default Header
