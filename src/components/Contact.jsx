import { useState, useEffect, useRef } from "react"
import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from "../hoc"
import emailjs from '@emailjs/browser'
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import { toast, ToastContainer,Bounce } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

//template id-template_6gym32r
//service id-service_nctuyll
//public key-Sc3gyafW9L_FgdKsu


const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState(
    {
      name: '',
      email: '',
      message: ''
    }


  );
  const [Loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_nctuyll',
      'template_6gym32r',
      {
        from_name: form.name,
        to_name: 'Pritam',
        from_email: form.email,
        to_email: 'rahulchakraborty2003@gmail.com',
        message: form.message
      },
      'Sc3gyafW9L_FgdKsu'
    )
      .then(() => {
        setLoading(false);
        setform({
          name: '',
          email: '',
          message: ''

        })
        toast.success('Message successfully sent!');
      }).catch((error) => {

        setLoading(false);
        toast.error('Failed to send , please try again later!');
        console.log(error);

      });
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me!</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name}
              onChange={handleChange}
              placeholder="What's your name ? 🧔🏻‍♀️"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />

          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email}
              onChange={handleChange}
              placeholder="Enter your email 📧"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />

          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Leave a message.</span>
            <textarea type="text" name="message" value={form.message}
              onChange={handleChange}
              placeholder="What do you have to say ? 🥱"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />

          </label>

          <button type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {Loading ? "Sending..." : "Send"}


          </button>
         
          



        </form>


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
      


    </div>
  )
}

export default SectionWrapper(Contact, "contact");