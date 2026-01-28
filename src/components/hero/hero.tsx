"use client"

import { useGSAP } from "@gsap/react"
import HeroCta from "../heroCta"

import styles from "./hero.module.css"
import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const Hero = () => {

  const heroRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {

    const hero = heroRef.current
    const Img = imgRef.current

    const splitHeading = new SplitText(h1Ref.current, {
      type: "words",
      linesClass: "split-word",
      mask: "words",
    });

    const splitPara = new SplitText(pRef.current, {
      type: "lines",
      linesClass: "split-word",
      mask: "lines",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top 90%",
        once: true,
      },
      defaults: {
        ease: "sine.out",
        stagger: 0.07,
      },
    });

    tl.from(splitHeading.words, { y: 150, opacity: 0.1, rotation: 10, duration: 1.1,})
    tl.from(splitPara.lines, { y: 110, opacity: 0.1, rotation: 7, scaleY: 0.2, })
    tl.from(Img, {
        xPercent: -110,
        duration: 0.8,
      })

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

      return () => {
        splitHeading.revert();
        splitPara.revert();
    };
  }, [])


  return (
    <section ref={heroRef} className={styles.heroSection}>
      <h1 ref={h1Ref} >Building Next.JS Websites That Drive Real Growth Through Traffic and Conversions<span className={styles.heroImg} aria-hidden="true" ><div ref={imgRef}><Image src="/images/portfolioImg.png" alt="" width={300} height={300} role="presentation" /></div></span></h1>
      <p ref={pRef}>I build UI/UX focused sites that are able to generate real traffic and revenue through conversions with Next.JS, Structured data and Semantic HTML.</p>
      <HeroCta />
    </section>
  )
}

export default Hero

