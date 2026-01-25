"use client"

import { useGSAP } from "@gsap/react"
import HeroCta from "../heroCta"

import styles from "./hero.module.css"
import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {

  const heroRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {

    const hero = heroRef.current
    const Img = imgRef.current
    gsap.fromTo(hero, {
      scale: 1,
    },
      {
        scale: 0.1,
        opacity: 0,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom 50%",
          scrub: true,
        },
      })
    gsap.from(Img, {
      xPercent: -110,
      scrollTrigger: {
        trigger: hero,
        start: "top 90%",
        once: true,
      },
      delay: 1.2,
      duration: 0.9,
      ease: "power1.slow",
    })
  }, [])


  return (
    <section ref={heroRef} className={styles.heroSection}>
      <h1>Get a Website That Builds social Authority and Conversion by Mansiv Al Ferdous <span className={styles.heroImg} aria-hidden="true" ><div ref={imgRef}><Image src="/images/portfolioImg.png" alt="" width={300} height={300} role="presentation" /></div></span></h1>
      <p>I build websites that doesn’t just showcase your work in a way that attracts clients, but I also focus on
        copywriting and organized content so your business can by found at the top of most search engines.</p>
      <HeroCta />
    </section>
  )
}

export default Hero
