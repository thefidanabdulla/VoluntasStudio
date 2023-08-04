import React from 'react';
import voluntasLogo from './../../public/img/voluntasLogo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full flex justify-center bg-[#292E32]'>
      <div className='w-full xl:max-w-[1200px] px-4 xl:px-0 py-[100px]'>
        <div className='flex flex-col md:flex-row justify-center  items-center md:justify-between gap-8 flex-wrap'>
          <div className='w-[200px]'>
            <Image src={voluntasLogo} alt='voluntas logo' />
          </div>
          <div className=' flex  flex-col md:flex-row items-start gap-2 md:gap-4 flex-shrink-0'>
            <Link href={'/'} className='text-white md:text-xl underline hover:text-[#f6dc41] transition-all'>Home</Link>
            <Link href={'/about'} className='text-white md:text-xl underline hover:text-[#f6dc41] transition-all'>About</Link>
            <Link href={'/team'} className='text-white md:text-xl underline hover:text-[#f6dc41] transition-all'>Team</Link>
            <Link href={'/contact'} className='text-white md:text-xl underline hover:text-[#f6dc41] transition-all'>Contact</Link>
          </div>
          {/* <form className='flex flex-col gap-2 w-[250px]'>
            <input type='email' required placeholder='Email' className='p-2 rounded-md border-none outline-none bg-[#ffffff50] text-white' />
            <textarea  required placeholder='Message' rows={4} className='p-2 resize-none rounded-md border-none outline-none bg-[#ffffff50] text-white' ></textarea>
            <button className='w-full text-white  bg-[#FBD808] font-bold p-4 rounded-md'>Send</button>
          </form> */}
        </div>
        <div className='border-t border-[#ffffff50] mt-8 pt-8'>
        <p className='text-center text-[#ffffff80]'>
          Copyright &copy; 2023 Voluntas Studio</p>
        </div>
      </div>
    </div>
  )
}

export default Footer