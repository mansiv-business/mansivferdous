import Image from "next/image"
import { Metadata } from 'next'

import styles from "../website-pricing-breakdown-2026/individualBlog.module.css"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"


export const metadata: Metadata = {
  title: "Website Design Process: From Discovery to Launch. A Transparent look at our methodology",
  description: "Learn the complete website design process from discovery to launch. A transparent look at how I build conversion-focused sites with Next.js in 2026.",

  twitter: {
    card: "summary_large_image",
    title: "Website Design Process: From Discovery to Launch.",
    description: "Learn the complete website design process from discovery to launch. A transparent look at how I build conversion-focused sites in 2026.",
    creator: "@MansivFerdous"
  },
  openGraph: {
    title: "Website Design Process: From Discovery to Launch.",
    description: "Learn the complete website design process from discovery to launch. A transparent look at how I build conversion-focused sites in 2026.",
    url: "https://mansivferdous.com",
    siteName: "Mansiv Al Ferdous' Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "/blogs/website-design-process",
  },
}
const Page = () => {
    return (
        <>
            <Header />
            <div className='designed-hr'></div>
            <main className={styles.main}>
                <article>
                    <header>
                        <span>A transparent look at Mansiv Al Ferdous's webdesign process. <Image src="/images/portfolioImg.png" alt="author's image" width={50} height={50} /></span>
                        <h1>Website Design Process: From Discovery to Launch</h1>
                        <h2 className={styles.headerP}>A transparent look at the methodology behind high-converting digital experiences.</h2>

                        <p className={styles.headerP}><strong>The Reality:</strong> Most clients think they need a 'beautiful website'. What they actually need is a strategic digital asset that generates leads, ranks on search engines, and converts visitors into customers—all of which requires a transparent process and strategy.</p>
                        <Image src="/images/blog2-logo.svg" height={200} width={376} alt='website cost breakdown image' className={styles.img} />

                    </header>

                    <section className={styles.individualBlogSection}>
                        <h2>TL;DR: The Complete Website Design Journey</h2>
                        <p>Building a successful website takes 1-16 weeks depending on complexity. The process involves four phases: Discovery & Strategy, Design & Prototyping, Development & Integration, and Launch & Optimization. Unlike traditional agencies, I prioritize conversion-focused copywriting and SEO from day one—not as afterthoughts.</p>
                    </section>

                    <section className={styles.individualBlogSection}>
                        <header>
                            <h2>Phase 1: Discovery & Strategy (The Blueprint)</h2>
                            <p><strong className={styles.hP}>The Goal:</strong> Align your business objectives with what your target audience actually needs.</p>

                            <p>This phase prevents building the wrong thing or building the right thing wrong. Here's how we avoid both.</p>
                        </header>

                        <h3>Key Activities: </h3>
                        <dl>
                            <dt>Stakeholder Workshops</dt>
                            <dd>Strategic conversations about your revenue goals, target markets, and competitive positioning. We define what specific actions you want visitors to take and what business outcomes define success.</dd>

                            <dt>Competitor Analysis</dt>
                            <dd>I analyze what's actually driving conversions in your industry. Which CTAs get clicks? What messaging resonates? Where are the gaps we can exploit to differentiate you?</dd>

                            <dt>User Persona Mapping</dt>
                            <dd>Detailed profiles of your ideal customers. A B2B software buyer behaves completely differently than a consumer shopper. Understanding these personas shapes your site's navigation, language, and content structure.</dd>

                            <dt>Sitemap &amp; Information Architecture</dt>
                            <dd>This determines page hierarchy and how pages connect through internal links. Good architecture creates intuitive navigation for humans while giving search engines and AI chatbots clear content relationships.</dd>

                            <dt>Content Strategy</dt>
                            <dd>I plan conversion-focused copy during discovery, not after design. Every page gets a predetermined purpose (inform, convert, nurture) and clear messaging hierarchy. When copy and design develop together, they reinforce each other.</dd>
                        </dl>

                        <aside aria-label="Transparency Note">
                            <h4 style={{ marginTop: "10dvh" }}>Transparency Note: </h4>
                            <p style={{ marginTop: "2dvh" }}>Discovery takes 2-5 days for smaller projects, up to 2 weeks for complex sites. This prevents scope creep by documenting exactly what we're building and why.</p>
                        </aside>

                        <p><strong className={styles.hP}>Deliverable: </strong>Discovery document with user personas, competitive analysis, approved sitemap, content strategy, and project roadmap with milestones.</p>

                    </section>

                    <section className={styles.individualBlogSection}>
                        <header>
                            <h2>Phase 2: Design & Prototyping (The Visuals)</h2>
                            <p><strong className={styles.hP}>The Goal:</strong> Transform strategy into a visual language that guides users toward conversion.</p>

                            <p>Design is visual problem-solving. Every color, font choice, and spacing decision either helps or hinders your visitor's journey to becoming a customer.</p>
                        </header>

                        <section>
                            <h3>The Process</h3>
                            <dl>
                                <dt>Wireframing (Structure First)</dt>
                                <dd>Low-fidelity layouts that map out page structure and content placement. These answer: Where should CTAs be positioned? How many clicks to convert? Is the information hierarchy clear? We make structural decisions first, then layer on aesthetics.</dd>

                                <dt>Visual Design (The Polish)</dt>
                                <dd>
                                    High-fidelity design including:
                                    <ul>
                                        <li><strong>Moodboards:</strong> Reference images and style examples that establish visual direction.</li>
                                        <li><strong>Typography Systems:</strong> Font selections balancing readability with brand personality.</li>
                                        <li><strong>Strategic Color Palettes:</strong> Colors chosen for brand alignment, accessibility standards, and conversion psychology.</li>
                                        <li><strong>Component Design:</strong> Buttons, cards, forms designed once and used consistently.</li>
                                    </ul>
                                </dd>
                            </dl>
                        </section>


                        <article>
                            <h3>2026 Design Principles: </h3>
                            <ul>
                                <li><strong>Mobile-first approach:</strong> Design for small screens first (60%+ of traffic is mobile).</li>
                                <li><strong>Micro-animations:</strong> Subtle movements that guide attention without slowing performance.</li>
                                <li><strong>Accessibility-first:</strong> Proper contrast, readable fonts, semantic structure.</li>
                                <li><strong>Performance-optimized visuals:</strong> Modern formats (WebP/AVIF) and lazy loading.</li>
                            </ul>
                        </article>


                        <p><strong className={styles.hP}>Deliverable:</strong> High-fidelity designs for all pages, design system documentation, and development-ready assets.</p>

                    </section>

                    <section className={styles.individualBlogSection}>
                        <header>
                            <h2>Phase 3: Development & Integration (The Build)</h2>
                            <p><strong className={styles.hP}>The Goal:</strong> Transform approved designs into a blazing-fast, SEO-optimized website.</p>
                        </header>

                        <article>
                            <h3>Tech Stack & Why It Matters:</h3>
                            <section>
                                <h4><a href="https://nextjs.org/" target="_blank" rel="noopener">Next.js (React Framework)</a> — Solves critical problems:</h4>
                                <ul>
                                    <li><strong>Server-side rendering:</strong> Pages load instantly—users see content immediately.</li>
                                    <li><strong>Built-in SEO optimization:</strong> Dynamic meta tags and automatic sitemaps for better rankings.</li>
                                    <li><strong>Automatic image optimization:</strong>  Images compressed and served in modern formats (crucial for Google's speed benchmarks).</li>
                                    <li><strong>Clean, maintainable code:</strong> Clean, maintainable code: Features built faster, issues fixed quicker.</li>
                                </ul>
                            </section>

                            <section>
                                <h4>Deployment on <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>/<a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a> — Provides:</h4>
                                <ul>
                                    <li><strong>Global CDN:</strong> Site loads fast whether someone's in New York or Tokyo.</li>
                                    <li><strong>Automatic HTTPS and security:</strong> Enterprise-level protection.</li>
                                    <li><strong>Automatic image optimization:</strong>  Images compressed and served in modern formats (crucial for Google's speed benchmarks).</li>
                                    <li><strong>Zero-downtime deployments:</strong> Updates happen invisibly.</li>
                                </ul>
                            </section>
                        </article>

                        <article>
                            <h3>Focus Areas During Development: </h3>
                            <section>
                                <h4>Mobile Responsiveness: </h4>
                                <p> Built mobile and desktop design together using CSS Grid and Flexbox. Adapts beautifully to any screen size.</p>
                            </section>

                            <section>
                                <h4>SEO Optimization — Built into the foundation:</h4>
                                <ul>
                                    <li>Semantic HTML5 with proper heading hierarchy.</li>
                                    <li>Schema.org structured data (helps AI agents understand and recommend your content).</li>
                                    <li>Optimized meta tags, Open Graph images, XML sitemaps.</li>
                                    <li>Clean URL structure and strategic internal linking.</li>
                                </ul>
                            </section>

                            <section>
                                <h4>Performance Engineering — Speed impacts rankings and conversions:</h4>
                                <ul>
                                    <li>Lazy loading and code splitting.</li>
                                    <li>Optimized font loading and caching.</li>
                                    <li><strong>Target:</strong> Lighthouse scores above 90.</li>
                                </ul>
                            </section>

                            <section>
                                <h4>Accessibility Implementation: </h4>
                                <p> WCAG 2.1 AA compliance, keyboard navigation, screen reader optimization, proper contrast ratios.</p>
                            </section>
                        </article>

                        <p><strong className={styles.hP}>Timeline:</strong> 2-10 days for landing pages to 4-8 weeks for complex business websites.</p>

                    </section>

                    <section className={styles.individualBlogSection}>
                        <header>
                            <h2>Phase 4: Launch & Optimization (The Deployment)</h2>
                            <p><strong className={styles.hP}>The Goal:</strong> Deploy with confidence, then continuously improve based on real user data.</p>
                        </header>

                        <section>
                            <h3>Pre-Launch Quality Assurance: </h3>
                            <ul>
                                <li>Cross-browser and device testing.</li>
                                <li>Performance benchmarking and Core Web Vitals testing.</li>
                                <li>Every form, link, and button verified.</li>
                                <li>SEO pre-flight (meta tags, sitemap, analytics setup).</li>
                            </ul>

                        </section>

                        <section>
                            <h3>The Launch Process: </h3>
                            <ol>
                                <li><strong>Soft Launch to Staging —</strong> Deploy to a private testing environment for your final review and approval before going public.</li>
                                <li><strong>DNS Configuration —</strong> Set up your domain properly to ensure your site switches over without any downtime or broken links.</li>
                                <li><strong>Production Deployment —</strong> Make your site live to the world with monitoring systems in place to catch any issues immediately.</li>
                                <li><strong>Post-Launch Monitoring —</strong>  Active monitoring for 48-72 hours to ensure everything performs as expected under real traffic.</li>
                            </ol>

                        </section>

                        <article>
                            <h3>The "Transparent" Edge: Launch is Just the Beginning</h3>
                            <p>Your first launch is an educated hypothesis. Real optimization happens with actual user data.</p>


                            <h4>Post-Launch Activities:</h4>
                            <ul>
                                <li><strong>Analytics Review:</strong> Traffic patterns, user flows, conversion funnels.</li>
                                <li><strong>Heatmap Analysis:</strong> Where users click, scroll, and what they ignore.</li>
                                <li><strong>A/B Testing:</strong> Testing headlines, CTAs, and layouts to find what converts better.</li>
                                <li><strong>Performance Monitoring:</strong> Ongoing speed optimization.</li>
                                <li><strong>Content Updates:</strong>  Refining based on search trends and feedback.</li>
                            </ul>

                            <p>This is why I offer ongoing maintenance. Your website should evolve with your business, not sit static.</p>

                        </article>

                    </section>


                    <section className={styles.individualBlogSection}>
                        <h2>The Timeline Matrix</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Project Type</th>
                                    <th scope='col'>Complexity</th>
                                    <th scope='col'>Timeline (based on my project)</th>
                                    <th scope='col'>Starting Price (for my services)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>Landing Page</th>
                                    <td>Single-purpose page with clear CTA and conversion focus.</td>
                                    <td>1-2 Weeks</td>
                                    <td>$900</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Promotional Site</th>
                                    <td>3-5 pages with brand storytelling and animation.</td>
                                    <td>3-5 Weeks</td>
                                    <td>$1,200</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Business Website</th>
                                    <td>10+ pages with blog, services, and SEO foundation.</td>
                                    <td>4-6 Weeks</td>
                                    <td>$1,500-$2,000</td>
                                </tr>
                                <tr>
                                    <th scope='row'>Custom Web App</th>
                                    <td>Complex UX, database integration, user authentication.</td>
                                    <td>Depends</td>
                                    <td>Custom Quote</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong className={styles.hP}>Timeline Variables:</strong> Content readiness, revision rounds, third-party integrations, custom functionality, and client feedback turnaround time.</p>
                    </section>

                    <section className={styles.individualBlogSection}>
                        <h2>Why Transparency Matters: The "Mansiv Method"</h2>
                        <p>I share my complete process and pricing publicly because I treat clients as partners, not transactions.</p>

                        <h3>The benefits:</h3>
                        <dl>
                            <dt>No Surprise Costs</dt>
                            <dd>You know upfront what you're paying for and why. If scope changes, we discuss it before proceeding.</dd>

                            <dt>Better Outcomes</dt>
                            <dd>When you understand the strategy behind decisions, you provide better feedback. Informed clients create stronger results.</dd>

                            <dt>Long-Term Partnership</dt>
                            <dd>Transparency builds trust for productive relationships beyond the initial build.</dd>

                            <dt>Educated Decision-Making</dt>
                            <dd>Understanding the differences helps you choose the right solution for your needs and budget.</dd>
                        </dl>

                    </section>

                    <section className={styles.individualBlogSection}>
                        <h2>What Makes My Process Different?</h2>

                        <dl>
                            <dt>SEO & Copywriting Aren't Afterthoughts</dt>
                            <dd>I integrate conversion-focused copy and search optimization from discovery. Your site doesn't just look professional—it ranks well and converts visitors.</dd>

                            <dt>Built for Speed & Performance</dt>
                            <dd><a href="https://nextjs.org/">Next.js</a> ensures fast loading anywhere. Speed impacts both SEO rankings and user retention.</dd>

                            <dt>AI-Ready Structure </dt>
                            <dd>Proper semantic HTML and structured data ensure AI chatbots like ChatGPT can understand and recommend your content.</dd>

                            <dt>Ongoing Support & Evolution</dt>
                            <dd>Monthly maintenance keeps your site secure, fast, and up-to-date with evolving standards.</dd>
                        </dl>

                    </section>

                    <section className={styles.individualBlogSection}>
                        <h2>Ready to Start Your Project?</h2>
                        <p><a href="https://cal.com/mansiv-business/15min" target="_blank" rel="noopener noreferrer">Start Your Project &rarr;</a> Book a 15-minute call to discuss your specific goals and timeline.</p>
                        <p><strong>Questions about the process?</strong> Reach out via email or Instagram.</p>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Page
