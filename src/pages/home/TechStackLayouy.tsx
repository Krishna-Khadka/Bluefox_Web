import React from 'react'

import Image from 'next/image'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface TechStack {
    imgSrc: StaticImport,
    title: string
}

const TechStackLayout = ({ imgSrc, title }: TechStack) => {
    return (
        <div className='group relative w-[130px] h-[150px] object-cover'>
            <Image
                src={imgSrc}
                alt={title}
                className='object-cover'
            />
        </div>
    );
}

export default TechStackLayout