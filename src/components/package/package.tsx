import * as motion from "motion/react-client"

import styles from "./package.module.css"
import { comeUp } from "@/lib/animation"


const Package = () => {
  return (
    <section className={styles.packageSection}>
      <h2>Packages</h2>
      <p>Every website I make includes my full service — same quality, same performance. Only the number of pages
        changes the price.</p>

      <div className={styles.packages}>
        <motion.article {...comeUp} transition={{type: "tween", duration: 0.4,}}>
          <h3><img src="images/rocket-icon.svg" alt="" aria-hidden="true" width="45px" height="45px"/> Landing Pages</h3>

          <div className={styles.packageDesc}>
            <div>
              <p><strong>Estimated delivery time : </strong> <time dateTime="P7D">1 Week</time></p>

              <p><strong>Price: </strong> $900</p>
              <p>maintenance fee: free</p>

            </div>
            <p>A landing page is always lighter than a regular website. It loads quick, explains quick -
              resulting to quick client clarity and quick conversions.</p>
          </div>
        </motion.article>

        <motion.article {...comeUp} transition={{type: "tween", duration: 0.4,}}>
          <h3><img src="images/chart-increasing-icon.svg" alt="" aria-hidden="true" width="45px" height="45px"/> Promotional Websites</h3>

          <div className={styles.packageDesc}>
            <div>
              <p><strong>Estimated delivery time : </strong> <time dateTime="P3W">3 Weeks</time>.</p>

              <p><strong>Price: </strong> $1200</p>
              <p>maintenance fee: $100/month</p>

            </div>
            <p>A promotional site always has one simple goal and that is to bring general interest towards
              your agency and potentially boosting your sales.</p>
          </div>
        </motion.article>

        <motion.article {...comeUp} transition={{type: "tween", duration: 0.4,}}>
          <h3><img src="images/globe-icon.svg" alt="" aria-hidden="true" width="45px" height="45px"/> Business Websites</h3>

          <div className={styles.packageDesc}>
            <div>
              <p><strong>Estimated delivery time : </strong><time dateTime="P1M">1 Month</time>.</p>

              <p><strong>Price: </strong> $1500-$2000</p>
              <p>Maintenance Fee: $250/month</p>

            </div>
            <p>Sometimes you might want to establish your business online from the root. And that is where I
              come to make you a full scale business website for your agency.</p>
          </div>
        </motion.article>

      </div>
      <p className={styles.custom}>Custom Order available upon request.</p>
    </section>
  )
}

export default Package
