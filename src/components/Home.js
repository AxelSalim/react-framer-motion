import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from "framer-motion";
import Loader from "./Loader";


const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 200px rgba(0, 0, 0, 0.7)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.7)",
    transition: { 
      duration: 0.5,
      repeat: Infinity,
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1, 
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition : { ease: "easeInOut" }
  }
}

const Home = () => {

  return (
    <motion.div className="home container"
    variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      
      <Link to="/base">
        <motion.button 
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;