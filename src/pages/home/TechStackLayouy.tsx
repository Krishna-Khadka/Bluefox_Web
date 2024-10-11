import React from 'react'

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
import Image from 'next/image'
import Link from 'next/link'
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