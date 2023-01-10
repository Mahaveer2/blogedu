import { motion,AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Layout } from '../components'
import '../styles/globals.scss'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function MyApp({ Component, pageProps }) {
  return <Layout>
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
>
    <Component {...pageProps} />
    </motion.main>
    </Layout>
}

export default MyApp
