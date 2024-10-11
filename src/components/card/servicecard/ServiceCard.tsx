import React from 'react'

import icon1 from "../../../../public/icons/app-development.png"
import icon2 from "../../../../public/icons/software-application.png"
import icon3 from "../../../../public/icons/social-media.png"
import icon4 from "../../../../public/icons/cloud-database.png"
import icon5 from "../../../../public/icons/graphic-design.png"
import icon6 from "../../../../public/icons/video-edit.png"
import ServiceCardLayout from './ServiceCardLayout'

const services = [
    {
        imgSrc: icon1,
        title: "Web Development",
        desc: "Building scalable web applications that ensure seamless user experiences and performance!"
    },
    {
        imgSrc: icon2,
        title: "App Development",
        desc: "Creating innovative mobile applications to engage users and drive business growth!"
    },
    {
        imgSrc: icon3,
        title: "Digital Marketing",
        desc: "Leveraging online strategies to enhance brand visibility and attract targeted audiences!"
    },
    {
        imgSrc: icon4,
        title: "Cloud Services",
        desc: "Providing flexible cloud solutions for improved collaboration and data accessibility!"
    },
    {
        imgSrc: icon5,
        title: "Graphic Design",
        desc: "Crafting visually stunning designs that effectively communicate your brand message!"
    },
    {
        imgSrc: icon6,
        title: "Video Editing",
        desc: "Transforming raw footage into engaging videos that captivate and inform your audience!"
    }
];


const ServiceCard = () => {
    return (
        <>
            <div className="container">
                <div className="bg-white">
                    <div className='text-center mb-8'>
                        <h2 className='text-5xl text-black font-bold capitalize pb-4'>our expertise</h2>
                        <p className='text-lg font-semibold'>We build digital solutions with the latest technologies that line up with your business goals.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <ServiceCardLayout
                                key={index}
                                imgSrc={service.imgSrc}
                                title={service.title}
                                desc={service.desc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard