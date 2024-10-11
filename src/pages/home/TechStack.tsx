"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";


import tech1 from "../../../public/icons/React.png"
import tech2 from "../../../public/icons/Next.js.png"
import tech3 from "../../../public/icons/Laravel.png"
import tech4 from "../../../public/icons/Node.js.png"
import tech5 from "../../../public/icons/Flutter.png"
import tech6 from "../../../public/icons/MongoDB.png"
import tech7 from "../../../public/icons/MySQL.png"
import tech8 from "../../../public/icons/Figma.png"
import tech9 from "../../../public/icons/AfterEffect.png"
import tech10 from "../../../public/icons/PostgresSQL.png"

import Link from 'next/link'

import TechStackLayout from "./TechStackLayouy"

const techs = [
    {
        imgSrc: tech1,
        title: "React JS"
    },
    {
        imgSrc: tech2,
        title: "Next JS"
    },
    {
        imgSrc: tech3,
        title: "Laravel"
    },
    {
        imgSrc: tech4,
        title: "Node JS"
    },
    {
        imgSrc: tech5,
        title: "Flutter"
    },
    {
        imgSrc: tech6,
        title: "Mongo DB"
    },
    {
        imgSrc: tech7,
        title: "MySQL"
    },
    {
        imgSrc: tech8,
        title: "Figma"
    },
    {
        imgSrc: tech9,
        title: "Adobe AfterEffect"
    },
    {
        imgSrc: tech10,
        title: "Postgress SQL"
    },
]

const TechStack = () => {
    return (
        <>
            <div className="bg-custom-gradient mt-20">
                <div className="container">
                    <div className="py-20 rounded-[12px]">
                        <div className='text-center mb-8'>
                            <h2 className='text-5xl text-black font-bold capitalize pb-4'>our technology <span className='text-primary'>stack</span></h2>
                            <p className='text-lg font-semibold capitalize'>we are concerned about the security of our customers. thats why we always keep udating and use bext technology in our products.</p>
                        </div>
                        <div className="mt-16">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={2}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 6,
                                        spaceBetween: 30,
                                    },
                                    // 1024: {
                                    //     slidesPerView: 8,
                                    //     spaceBetween: 40,
                                    // },
                                }}
                                loop={true}
                                grabCursor={true}
                            >
                                {techs.map((tech, index) => (
                                    <SwiperSlide key={index}>
                                        <TechStackLayout imgSrc={tech.imgSrc} title={tech.title} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="text-center">
                            <div className='py-3 px-8 font-semibold mt-12 bg-black text-center inline-block rounded-[8px] group cursor-pointer'>
                                <Link href="#" className='text-center uppercase text-white  group-hover:tracking-wider duration-500 transition-all ease-in-out'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack