'use client'
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import Image from "next/image"
import styles from "./header/header.module.css"
import { show } from "@/lib/animation"

const HeroCta = () => {

    const [clicked, setClick] = useState(false)
    return (
        <>
            <motion.button
                onClick={() => { setClick(true) }}
                className={styles.herobtn}
                whileHover={{ color: "#F5F5F5" }}
                whileTap={{ scale: 0.96, opacity: 0.7 }}
                transition={{ duration: 0.1 }}>Get in Touch
            </motion.button>

            <AnimatePresence>
                {clicked &&

                    <motion.div className={styles.popupDiv} {...show}>


                        <button onClick={() => setClick(false)} className={styles.exit}>×</button>
                        <ul className={styles.popupList}>
                            <li><button><a href="https://mail.google.com/mail/?view=cm&fs=1&to=mansivbusiness@gmail.com&su=Hello&body=Hi%20Mansiv," target="_blank" rel="noopener noreferrer"><Image src="images/black email.svg" alt="email" height={20} width={20} /></a></button></li>
                            <li><button><a href="https://x.com/MansivFerdous" target="_blank" rel="noopener noreferrer"><Image src="images/black twitter.svg" alt="linkedin" height={20} width={20} /></a></button></li>
                            <li><button><a href="https://www.linkedin.com/in/mansiv-business" target="_blank" rel="noopener noreferrer"><Image src="images/black linked in.svg" alt="twitter" height={20} width={20} /></a></button></li>
                            <li><button><a href="https://www.instagram.com/mansiv_ferdous" target="_blank" rel="noopener noreferrer"><Image src="images/black ig.svg" alt="instagram" height={20} width={20} /></a></button></li>
                        </ul>
                        <p>Where would you like to chat with Mansiv?</p>
                    </motion.div>
                }
            </AnimatePresence>


        </>
    )
}

export default HeroCta
