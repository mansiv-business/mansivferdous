import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"
import * as motion from "motion/react-client"

import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from "@/components/hero/hero"
import About from '@/components/about/about'
import Service from '@/components/service/service'
import Portfolio from '@/components/portfolio/portfolio'
import Package from '@/components/package/package'
import Cta from '@/components/cta/cta'
import { scaleRight } from "@/lib/animation"

export const metadata: Metadata = {
  
  twitter: {
    card: "summary_large_image",
    title: "Mansiv Al Ferdous | Web Designer & Next.js Developer",
    description: "Next.js & React expert building high-performance websites.",
    creator: "@mansivbusiness"
  },
  openGraph: {
    title: "Mansiv Al Ferdous | Web Designer & Next.js Developer",
    description: "Expert Web Designer specializing in Next.js & React.",
    url: "https://mansivferdous.com",
    siteName: "Mansiv Al Ferdous' Portfolio",
    type: "website",
  },

};
const Home = () => {
  return (
    <>
      <Header />
      <div className="designed-hr"></div>
      <main>
        <Hero />
        <hr className="hidden"/>
        <About />
        <hr className="hidden" />
        <Service />
        <motion.hr {...scaleRight} transition={{ duration: 0.6, type: "tween", ease: "easeIn"}}/>
        <Portfolio />
        <motion.hr {...scaleRight} transition={{ duration: 0.6, type: "tween", ease: "easeIn"}}/>
        <Package />
        <Cta />
      </main>
      <Footer />

      <SpeedInsights />
    </>
  )
}

export default Home
