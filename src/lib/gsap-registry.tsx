'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function GsapRegister() {
  useGSAP(() => {

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const headings = gsap.utils.toArray("h1, h2, h3");
      const paragraphs = gsap.utils.toArray("p, h4");
      paragraphs.forEach((paragraph: any) => {
        const split = new SplitText(paragraph, {
          type: "lines",
          linesClass: "split-line",
          mask : "lines",
        });

        gsap.from(split.lines, {
          opacity: 0.5,
          y: 110,
          ease: "power1.slow",
          delay: 0.85,
          stagger: 0.08,
          duration: 1,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
            end: "bottom 0%", 
           },
          onComplete: () => split.revert(),

        });

      })
      headings.forEach((heading: any) => {
        const split = new SplitText(heading, {
          type: "words",
          wordsClass: "split-word",
          mask: "words",
        });

        gsap.from(split.words, {
          delay: 0.1,
          opacity: 0.1,
          y: 110,
          stagger: 0.07,
          duration: 0.8,
          ease: "power1.slow",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            end: "bottom 0%",
            onLeave: () => {
            split.revert();
           },
          }
        });
      });
    });
  }, []);

  return null;
}
