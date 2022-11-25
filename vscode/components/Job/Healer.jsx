import React from 'react'
import Image from 'next/image';
import role_healers from './role/role_healers.svg';
import astrologian from './role/heal/astrologian.svg';
import sage from './role/heal/sage.svg';
import scholar from './role/heal/scholar.svg';
import white_mage from './role/heal/white_mage.svg';


const product = {
    name: '백마도사',
    href: '#',
    images: [
        {
            src: './images/role/knight.png',
            alt: '',
        }

    ],
    tankjob: [
    ],

    description:
        '힐러는 언제나 흑흑 하고 운다 흑흑 ',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function Healer() {
    return (
        <div className="mt-32 ">
            <div className="mb-32 hero container max-w-screen-lg  mx-auto flex justify-center">
                <span className='mt-2.5 mr-6'>
                    <Image src={role_healers} width={65} height={65} />
                </span>
                <div className='text-white text-7xl font-bold text-shadow-neonHeal  '>HEAL</div>
            </div>

            <div className='-mb-3'>
                <button
                    type="button"
                    className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-healgreen">
                    <span className='-mt-1  mr-2'>
                        <Image src={white_mage} width={30} height={30} />
                    </span> 백마도사
                </button>
                <button
                    type="button"
                    className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-healgreen">
                    <span className='-mt-1  mr-2'>
                        <Image src={scholar} width={30} height={30} />
                    </span> 학자
                </button>
                <button
                    type="button"
                    className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-healgreen">
                     <span className='-mt-1  mr-2'>
                        <Image src={astrologian} width={30} height={30} />
                    </span> 점성술사
                </button>
                <button
                    type="button"
                    className="inline-flex items-center  bg-darkblue px-12 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-healgreen">
                    <span className='-mt-1  mr-2'>
                        <Image src={sage} width={30} height={30} />
                    </span>현자
                </button>

            </div>


            {/* blackbox */}
            <div className=" w-full bg-darkblue pt-7 pb-7 md:pt-20 md:pb-24 tails-selected-element" >
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6  lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className=" overflow-hidden rounded-lg lg:block">
                        <a>
                            <img
                                src={product.images[0].src}
                                alt={product.images[0].alt}
                                className=""
                            />
                        </a>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className=" text-white text-gray-900">{product.description}</p>
                </div>
            </div>

        </div>
    )
}
