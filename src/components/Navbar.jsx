import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { styles } from '../styles'
import { logo,menu,close,icon } from '../assets'
import { nav } from 'framer-motion/client'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl '>

         <Link
         to='/'
          className='flex items-center gap-2 justify-start'
          onClick={()=>{
           setActive('');
           window.scrollTo(0,0);
          }}
         >
          <img src={logo} alt='logo' className='object-contain hidden sm:block' />
          <img src={icon} alt='icon' className='object-contain h-10 w-10 sm:hidden' />


         </Link>
         <ul className='list-none hidden sm:flex flex-row gap-10 mx-5'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={!toggle ? menu :close} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer mx-2'
          onClick={()=>setToggle(!toggle)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
             <ul className='list-none justify-end items-start flex-col gap-4 mx-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "text-white"
                  : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
             
          
          ))}
         </ul>

          </div>
         </div>
      </div>

    </nav>
  )
}

export default Navbar