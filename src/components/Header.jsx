import React, { useEffect, useState } from 'react'
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoPerson } from 'react-icons/io5'
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MdEmail } from 'react-icons/md'


const navItems=[
  {
    links:"Home", path:"home",
  },
  {
    links:"About", path:"about",
  },
  {
    links:"Products", path:"products",
  },
  {
    links:"Testimonials", path:"home",
  },
  {
    links:"Contact", path:"contact",
  },
]

const Header = () => {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });

    AOS.refresh();

  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!istMenuOpen);
  }

  const closeMenu =() =>{
    setIsMenuOpen(false);
  }


  return (
    <>
    <div className='w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6'>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaPhoneVolume  className='size-[18px] '/><span>+91 628 251 8803</span></h1>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaMapMarkerAlt  className='size-[18px] '/><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid.</span></h1>
      <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><MdEmail  className='size-[18px] '/><span>shopyfy2024@gmail.com</span></h1>
    </div>

    <nav className='w-full bg-gray-100 flex justify-between items-center gap0-1 lg:px-16 px-6 py-5 sticky top-0 z-50'>
      <h1 className='text-themepurple font-bold lg:text-[30px] text-3xl underline italic'>Trendify</h1>
      <ul className='lg:flex justify-center gap-10 hidden'>
        {
      navItems.map(({links,path})=>(
        <Link key={path} className='text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{links}</Link>
      ))
        }
      </ul>

    </nav>
    </>
  )
}

export default Header
