import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion, useCycle } from "framer-motion";


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
  }, 
  animationTwo: {
    y: [0, -50], 
    x: 0,
    transition: {
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

  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
  return(
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate={animation}
      >

      </motion.div>
      <div onClick={() => cycleAnimation()} className="hover:cursor-pointer">Cycle(s) Loader</div>
    </>
  )
}

export default Loader;  