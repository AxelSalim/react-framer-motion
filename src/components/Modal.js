import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0}
}


const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait" >
      {showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <h2>Notion Integration</h2>
          <p>This feature is currently in development.</p>
          <Link to="/home" className="close-modal">
              Close
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;