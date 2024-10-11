import React from 'react'

import { FaArrowRightLong } from "react-icons/fa6";

import Image, { StaticImageData } from 'next/image'

interface ServiceCardProps {
  imgSrc: StaticImageData,
  title: string,
  desc: string,
}

const ServiceCardLayout = ({ imgSrc, title, desc }: ServiceCardProps) => {
  return (
    <>
      {/* single service card layout  */}
      <div className='bg-background py-5 px-7 rounded-[8px] hover:bg-custom-gradient transition-all ease-in duration-500 group'>
        <div className='mb-4'>
          <Image
            src={imgSrc}
            alt='service icon'
            className='w-[90px] object-cover transition-transform duration-300 transform group-hover:rotate-y-180'
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s',
            }}
          />
        </div>
        <div className='pb-3'>
          <h2 className='font-bold text-primary tracking-wide capitalize text-3xl pb-2'>{title}</h2>
          <p className='font-semibold text-base pr-4'>{desc}</p>
        </div>
        <div className='bg-white inline-block p-4 rounded-full group'>
          <FaArrowRightLong className='text-xl text-black group-hover:text-primary group-hover:cursor-pointer transition-all duration-700' />
        </div>
      </div>
    </>
  )
}

export default ServiceCardLayout