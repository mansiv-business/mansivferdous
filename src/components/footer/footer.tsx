'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./footer.module.css"
import Image from "next/image"

const Footer = () => {

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
    <footer className={styles.footer}>

  <small>
    &copy; 2025 Mansiv Al Ferdous. All rights reserved.
  </small>


  <nav aria-label="Secondary site navigation">
    <Link href="/blogs">Resources: Blog</Link>
  </nav>


  <nav aria-label="Social media profiles">
    <ul>
        <li><a className={styles.linkItem} href={emailHref} rel="noopener noreferrer" target={emailHref.startsWith('http') ? "_blank" : "_self"} ><Image src="../images/ic_outline-email.svg" alt="email" height={20} width={20}/></a></li>
        <li><a className={styles.linkItem} href="https://www.instagram.com/mansiv_ferdous" target="_blank"rel="noopener noreferrer"><Image src="../images/mdi_instagram.svg" alt="instagram" height={20} width={20}/></a></li>
        <li><a className={styles.linkItem} href="https://x.com/MansivFerdous" target="_blank"rel="noopener noreferrer"><Image src="../images/prime_twitter.svg" alt="twitter" height={20} width={20}/></a></li>
        <li><a className={styles.linkItem} href="www.linkedin.com/in/mansiv-ferdous-b87988388" target="_blank" rel="noopener noreferrer"><Image src="../images/mingcute_linkedin-line.svg" alt="linkedin" height={20} width={20}/></a></li>
    </ul>
  </nav>
</footer>
  )
}

export default Footer
