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
      delay: 1.3,
      duration: 0.9,
      ease: "power1.out",
    })
  }, [])


  return (
    <section ref={heroRef} className={styles.heroSection}>
      <h1>Building Next.JS Websites That Drive real growth through Traffic and Conversions<span className={styles.heroImg} aria-hidden="true" ><div ref={imgRef}><Image src="/images/portfolioImg.png" alt="" width={300} height={300} role="presentation" /></div></span></h1>
      <p>I build UI/UX focused sites that are able to generate real traffic and revenue through conversions with Next.JS, Structured data and Semantic HTML.</p>
      <HeroCta />
    </section>
  )
}

export default Hero
