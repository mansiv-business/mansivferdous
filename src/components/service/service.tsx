import styles from "./service.module.css"



const Service = () => {
  return (
     <section className={styles.serviceSection}>
          <h2>What I Provide</h2>
          <div>
            <article>
              <div>
                <h3>Web Design and Development</h3>
                <p>Unlike others I don’t just see websites as a fancy place to discover businesses. That is why
                  I highly focus on the building websites that give both client clarity and satisfaction
                  through stratetgic layouts and animations.</p>
              </div>
              <h4>With Responsive Design and Organized Content</h4>
            </article>

            <article>
              <div>
                <h3>Conversion Focused Copywriting</h3>
                <p>Most designers focus on UI and UX only. But just animations and wonderful layout can’t
                  convert visitors into customers. And that is why I take my time and prepare the best
                  writings possible that can bring client clarity and satisfaction alongside SEO traffic.</p>
              </div>
              <h4>With Comprehensive and Conversion focused Copywriting.</h4>
            </article>

            <article>
              <div>
                <h3>Search Engine Optimization</h3>
                <p>SEO is no longer limited to google search. That is why I focus on websites that can be
                  recommended by AI ChatBots like ChatGPT as well as in Google’s search results.</p>
              </div>
              <h4>With Structured Data, Proper HTML tags, Sitemap, Optimized images and more.</h4>
            </article>

            <article>
              <div>
                <h3>Seamless User Experience</h3>
                <p>An unoptimized website with heavy animations can make you lose clients. And that is where I
                  come, I build websites using React with Next.js to build excellent user interactive sites
                  with lag-free experience.</p>
              </div>
              <h4>With Fast User Interface and Excellent User Experience, Deployed on <a
                href="https://vercel.com/">Vercel</a> or <a href="https://www.netlify.com/">Netlify</a>.</h4>
            </article>

            <article>
              <div>
                <h3>Further Support for your website</h3>
                <p className={styles.serviceDiv5}>Hosting a website might be problematic after buying. And that is why I provide further
                  support for your website after development to keep it up to date with a monthly payment.</p>
              </div>
              <h4>With updated features and optimized SEO.</h4>
            </article>
          </div>
        </section>
  )
}

export default Service
