import Image from 'next/image'
import React from 'react'

import logo from "../../../public/icons/logo.jpeg"

const About = () => {
    return (
        <>
            <div className="container">
                <div className='text-center mb-8'>
                    <h2 className='text-4xl text-black font-bold pb-4'>Revolutionizing Businesses with Excellence & Expertise</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div>
                        <ul>
                            <li className='mr-4 py-8 px-4 rounded-[8px] mt-5 hover:bg-primary hover:text-white transition-all ease-in-out duration-500' style={{ boxShadow: "rgb(58 91 153 / 22%) 6px 6px 12px" }}>
                                <h5 className='text-2xl font-bold mb-2 tracking-wide'>Customized Solutions for Every Business</h5>
                                <p className='text-base font-semibold'>Our team delivers software solutions specifically designed to meet the unique needs of your business, driving innovation and efficiency.</p>
                            </li>
                            <li className='mr-4 py-8 px-4 rounded-[8px] mt-5 hover:bg-primary hover:text-white transition-all ease-in-out duration-500' style={{ boxShadow: "rgb(58 91 153 / 22%) 6px 6px 12px" }}>
                                <h5 className='text-2xl font-bold mb-2 tracking-wide'>Innovative Technology at Your Fingertips</h5>
                                <p className='text-base font-semibold'>We provide a wide array of cutting-edge services to help businesses harness the power of modern technology and stay ahead in a digital world.</p>
                            </li>
                            <li className='mr-4 py-8 px-4 rounded-[8px] mt-5 hover:bg-primary hover:text-white transition-all ease-in-out duration-500' style={{ boxShadow: "rgb(58 91 153 / 22%) 6px 6px 12px" }}>
                                <h5 className='text-2xl font-bold mb-2 tracking-wide'>Adaptive and Scalable Strategies</h5>
                                <p className='text-base font-semibold'>Our solutions are crafted to evolve with your business, ensuring long-term growth, flexibility, and reliability in ever-changing markets.</p>
                            </li>
                            <li className='mr-4 py-8 px-4 rounded-[8px] mt-5 hover:bg-primary hover:text-white transition-all ease-in-out duration-500' style={{ boxShadow: "rgb(58 91 153 / 22%) 6px 6px 12px" }}>
                                <h5 className='text-2xl font-bold mb-2 tracking-wide'>A Tailored Approach for Maximum Impact</h5>
                                <p className='text-base font-semibold'>We take a personalized approach, ensuring every project we undertake is aligned with your business goals for maximum success.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={logo}
                            alt='logo'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default About