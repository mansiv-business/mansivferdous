import Image from "next/image"
import Link from "next/link"
import { Metadata } from 'next';


import styles from "./blog.module.css"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
export const metadata: Metadata = {
  title: "Mansiv Al Ferdous | My blog posts",
  description: "A list of blogs to dive deep into the fundamentals of websites and webdesign by Mansiv Al Ferdous. A Next.js based developer",
}
const Page = () => {
  return (
    <>
      <Header />
      <div className="designed-hr"></div>
      <main className={styles.main}>
        <h1 className={styles.h1}>My Blogs</h1>
        <p className={styles.hP}>Know the latest news about websites and webdesign</p>

        <section className={styles.blogSection}>
          <h2>Recent blogs</h2>

          <div>
            <article>
              <Image src="/images/blog1-logo.svg" height={200} width={376} alt="" className={styles.img} />
              <h3>How Much Does a Website Cost? 2026 Pricing Breakdown for [Business / SaaS]</h3>
              <p>Website pricing confuses most business owners—and for good reason. The cost to build a website ranges from as low as $120 to upward of $50,000, depending on what you actually need. The type of website you're building, the features ...</p>
              <Link href="/blogs/website-pricing-breakdown-2026" className={styles.button}>View Blog <img src="images/arrow.svg" /></Link>
            </article>

            <article>
              <Image src="/images/blog2-logo.svg" height={200} width={376} alt="" className={styles.img} />
              <h3>Website Design Process: From Discovery to Launch. A transparent look at our methodology.</h3>
              <p>Building a successful website takes 1-16 weeks depending on complexity. The process involves four phases: Discovery & Strategy, Design & Prototyping, Development & Integration, and Launch & Optimization ...</p>
              <Link href="/blogs/website-pricing-breakdown-2026" className={styles.button}>View Blog <img src="images/arrow.svg" /></Link>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Page

