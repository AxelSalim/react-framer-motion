import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion } from "framer-motion";


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

const Home = () => {

  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
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
    </motion.div>
  )
}

export default Home;