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
      const headings = gsap.utils.toArray("h1, h2");

      headings.forEach((heading: any) => {
        const split = new SplitText(heading, {
          type: "lines, words",
          linesClass: "split-line",
          wordsClass: "split-word",
        });

        gsap.from(split.words, {
          opacity: 0,
          y: 110,
          stagger: 0.05,
          duration: 0.8,
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            once : true,
          },
          onComplete: () => {
            split.revert();
          },
        });
      });
    });
  }, []);

  return null;
}