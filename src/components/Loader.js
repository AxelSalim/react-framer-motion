import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from "framer-motion";


const loaderVariants = {
  animationOne : {
    x: [-20, 20], 
    y: [0, -40],
    transition: {
      x: {
        repeat: Infinity, 
        duration: 0.5,  
        ease: 'easeOut',
        repeatType: 'reverse'
      },
      y: {
        repeat: Infinity,  
        duration: 0.25, 
        ease: 'easeOut',
        repeatType: 'reverse'
      }
    }
  }
}
const Loader = () => {
  return(
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate="animationOne"
      >

      </motion.div>
    </>
  )
}

export default Loader;  