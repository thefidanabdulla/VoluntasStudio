import Image from 'next/image'
import React, { useState } from 'react';
import voluntasLogo from '../../public/img/voluntasLogo.png';
import Link from 'next/link';
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md'

const Navbar = () => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  return (
    <div className='fixed  xl:max-w-[1200px] w-full  top-0 left-1/2 -translate-x-1/2 xl:px-0 px-4 z-10 '>
      <div className='w-full p-4 md:py-5 md:px-10 rounded-bl-lg border border-[#ffffff50] rounded-br-lg bg-[#292E32] flex items-center justify-between relative'>
        <Link href={'/'} className=''>
          <Image src={voluntasLogo} alt='voluntas logo' className='w-[100px]' />
        </Link>
        <div>
          <div className='md:flex items-center gap-2 md:gap-4 hidden'>
            <Link href={'/'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>Home</Link>
            <Link href={'/about'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>About</Link>
            <Link href={'/team'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>Team</Link>
            <Link href={'/contact'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>Contact</Link>
          </div>
          <button onClick={() => setIsSidebarMenuOpen(true)} className='flex md:hidden text-white text-2xl'>
            <FaBars />
          </button>
          {isSidebarMenuOpen && <SideNavbar isSidebarMenuOpen={isSidebarMenuOpen} setIsSidebarMenuOpen={setIsSidebarMenuOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar;


const SideNavbar = ({setIsSidebarMenuOpen, isSidebarMenuOpen}) => {
  return(
    <div className={`h-screen w-[250px] pt-[20px] px-10 border-l transition-all duration-300 border-[#ffffff30] fixed right-0 top-0 bg-[#292E32] ${isSidebarMenuOpen ? 'translate-x-0' : 'translate-x-[-300px]'}`}>
      <button onClick={() => setIsSidebarMenuOpen(false)} className='text-white text-2xl mb-10'>
        <MdClose className='text-white'/>
      </button>
      <div className='flex flex-col  gap-2 md:gap-4'>
        <Link href={'/'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>Home</Link>
        <Link href={'/about'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>About</Link>
        <Link href={'/team'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>Team</Link>
        <Link href={'/contact'} className='text-white md:text-xl text-sm hover:text-[#f6dc41] transition-all'>Contact</Link>
      </div>
    </div>
  )
}