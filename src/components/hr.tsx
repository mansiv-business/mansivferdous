'use client'
import { motion } from "motion/react"
import { scaleRight } from "@/lib/animation"

const Hr = () => {
  return (
    <>
      <motion.hr {...scaleRight} transition={{ duration: 0.6, type: "tween", ease: "easeIn"}}/>
    </>
  )
}

export default Hr
