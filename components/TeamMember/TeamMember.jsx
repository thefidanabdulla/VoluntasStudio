import Image from 'next/image'
import React from 'react'

const TeamMember = ({name, profession, img}) => {
  return (
    <div className='w-[250px] '>
      <div className='w-[250px] h-[350px] overflow-hidden'>
        <Image src={img} alt={`Voluntas team ${name} ${profession} `} className='w-full h-full object-cover rounded-md'  />
      </div>
      <h2 className='w-full text-center mt-4 text-2xl font-semibold text-[#757575]'>{name}</h2>
      <p className='text-center text-[#757575]'>{profession}</p>
    </div>
  )
}

export default TeamMember