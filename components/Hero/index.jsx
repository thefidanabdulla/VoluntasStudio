import Image from 'next/image'
import React from 'react';
import voluntasLogo from '../../public/img/voluntasLogo.png'
import Link from 'next/link';

const Index = () => {
  return (
    <div className='w-full homepageBanner xl:h-screen md:h-[80vh] h-[60vh] flex justify-center'>
      <div className='h-full xl:w-[1200px] w-full relative '>
        <div className='absolute top-[140px]  md:top-[350px] left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 flex flex-col xl:items-start items-center'> 
          <div>
            <Image src={voluntasLogo} alt='Voluntas Logo' className='w-[250px] xl:w-[400px]'/>
          </div>
          <p className='text-white text-opacity-90 text-xl pl-2 mt-2 text-center'>Where imagination knows no bounds!</p>
          <Link href={'#homeAbout'}>
            <button className='text-white font-bold bg-[#FBD808] hover:bg-[#e2c20c] transition-all py-4 px-10 text-sm md:text-lg rounded-lg mt-4'>
              Who we are?
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index;
