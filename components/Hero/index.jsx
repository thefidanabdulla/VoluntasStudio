import Image from 'next/image'
import React from 'react';
import voluntasLogo from '../../public/img/voluntasLogo.png'
import Link from 'next/link';

const Index = () => {
  return (
    <div className='w-full homepageBanner xl:h-screen md:h-[80vh] h-[50vh] flex justify-center'>
      <div className='h-full xl:w-[1200px] w-full relative '>
        <div className='absolute top-[300px] '> 
          <div>
            <Image src={voluntasLogo} alt='Voluntas Logo' className='w-[400px]'/>
          </div>
          <p className='text-white text-opacity-90 text-xl pl-2 mt-2'>Where imagination knows no bounds!</p>
          <Link href={'#homeAbout'}>
            <button className='text-white bg-[#292E32] hover:bg-[#1e2225] transition-all py-4 px-10 text-lg rounded-lg mt-4'>
              Who we are?
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index