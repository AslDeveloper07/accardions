import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import './../index.css'

const Accordion  = ({title, content}) => {
  const [isOpen, setIsOpen]=useState(false)
  return (
    <motion.div
    className='accardion container'
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.2}}
    >
<div className='accardion-header '>
  <h4>salom mening ismim Asilbek</h4>
</div>
    </motion.div>
  )
}

export default Accordion