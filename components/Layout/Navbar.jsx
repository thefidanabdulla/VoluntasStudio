import Image from 'next/image'
import React from 'react';
import voluntasLogo from '../../public/img/voluntasLogo.png';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed xl:max-w-[1200px] w-full  top-0 left-1/2 -translate-x-1/2 xl:px-0 px-4 z-10'>
      <div className='w-full p-4 md:py-5 md:px-10 rounded-bl-lg rounded-br-lg bg-[#292E32] flex items-center justify-between'>
        <div className=''>
          <Image src={voluntasLogo} alt='voluntas logo' className='w-[100px]' />
        </div>
        <div>
          <div className='flex items-center gap-4'>
            <Link href={'/'} className='text-white text-xl hover:text-[#f6dc41] transition-all'>Home</Link>
            <Link href={'/team'} className='text-white text-xl hover:text-[#f6dc41] transition-all'>Team</Link>
            <Link href={'/contact'} className='text-white text-xl hover:text-[#f6dc41] transition-all'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar