'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function GsapRegister() {
  useGSAP(() => {
  document.fonts.ready.then(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const headings = gsap.utils.toArray("h2, h3");
      const paragraphs = gsap.utils.toArray(".p, h4");
      paragraphs.forEach((paragraph: any) => {
        const split = new SplitText(paragraph, {
          type: "lines",
          linesClass: "split-line",
          mask : "lines",
        });

        gsap.from(split.lines, {
          rotation : 10,
          scaleY: 0.1,
          opacity: 0.2,
          y: 130,
          ease: "sine.out",
          stagger: 0.07,
          duration: 1.3,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 100%",
            once: true,
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
          opacity: 0.1,
          y: 150,
          stagger: 0.07,
          duration: 1,
          ease: "sine.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 100%",
            once: true,
          },
          onComplete: () => split.revert(),
        });
      });
    });

  })
  }, []);

  return null;
}

/*'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function GsapRegister() {
  useGSAP(() => {

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const headings = gsap.utils.toArray("h2, h3");
      const paragraphs = gsap.utils.toArray(".p, h4");
      paragraphs.forEach((paragraph: any) => {
        const split = new SplitText(paragraph, {
          type: "lines",
          linesClass: "split-line",
          mask : "lines",
        });

        gsap.from(split.lines, {
          opacity: 0.1,
          y: 150,
          ease: "sine.out",
          delay: 0.08,
          stagger: 0.07,
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
          y: 150,
          stagger: 0.07,
          duration: 0.7,
          ease: "sine.out",
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

*/
