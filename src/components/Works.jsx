import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { max } from 'three/tsl'
import { vercel } from '../assets'

const Projectcard = ({ index, name, description, tags, image, source_code_link, deployment_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >

        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full  rounded-2xl'
          />
          <div className='absolute inset-0 flex gap-1 justify-end m-3 card-img_hover'>
            {/* Vercel link button */}
            <button
              onClick={() => window.open(deployment_link, "_blank")}
              className='bg-white w-10 h-10 rounded-full flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
            >
              <img
                src={vercel}
                alt="vercel"
                className='w-3/4 h-3/4 object-contain'
              />
            </button>

            {/* Github link button */}
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'
            >
              <img
                src={github}
                alt="github"
                className='w-3/4 h-3/4 object-contain'
              />
            </button>
          </div>
        </div>
        <div className='p-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
          </div>

          <div className='mt-2 flex flex-wrap gap-2 ml-4'>
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}


          </div>



      </Tilt>



    </motion.div>


  )

}

const Works = () => {
  return (

    <>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Pretty Basic Stuffs!!</h2>

      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Each project I've built is a reflection of my passion for turning ideas into functional, user-centric solutions. From dynamic full-stack web applications to AI-powered tools, I focus on solving real-world problems with clean architecture, scalable backend systems, and responsive frontends. Whether it's crafting intuitive interfaces or optimizing server logic, my work balances creativity with performance. Explore some of my featured projects that demonstrate not just what I’ve built, but how I think.
        </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <Projectcard key={project.name} index={index} {...project} />



        ))}
      </div>




    </>
  )
}

export default SectionWrapper(Works, "");