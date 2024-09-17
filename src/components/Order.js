import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';


const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  }, 
  visible: {
    opacity: 1,
    x: 0, 
    transition: { 
      type: 'spring', 
      // delay: 0.5,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  },
  exit: {
    x: '-100vw',
    transition : { ease: "easeInOut" }
  }
}


const childVariants = {
  hidden: {
    opacity: 0,
  }, 
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);      
    }, 5000);
  }, [setShowModal])

  const [showTitle, setShowTitle] = useState(true);
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h2 className="text-3xl font-bold">Thank you for your order :)</h2>
      <motion.p variants={childVariants} className="text-xl" >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;