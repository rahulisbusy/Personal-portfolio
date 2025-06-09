import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Feedback items would go here */}
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          "Feedbacks will be added soon!"
        </motion.p>
      </div>



    </div>
  )
}

export default Feedbacks