import React from 'react'
import Image from 'next/image';
import tanks from './role_tanks.svg';
const product = {
  name: '나이트',
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
    '탱커의 역할이란?',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function Job18() {
  return (
    <div className="mt-32 ">
      <div className="mb-32 hero container max-w-screen-lg  mx-auto flex justify-center">
        <span className='mt-2.5 mr-6'>
          <a>
            <Image src={tanks} width={65} height={65} />
          </a>
        </span>
        <div className='text-white text-7xl font-bold text-shadow-neonblue  '>TANK</div>
      </div>

      <div className='-mb-3'>
        <button
          type="button"
          className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-tankblue">
          <img className=' -mt-1 w-4 h-6 mr-2 ' src='./images/role/tank/paladin.svg' /> 나이트
        </button>
        <button
          type="button"
          className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-tankblue">
          <img className=' -mt-1 w-5 h-6  mr-2 ' src='./images/role/tank/warrior.svg' /> 전사
        </button>
        <button
          type="button"
          className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-tankblue">
          <img className=' -mt-1 w-4 h-6 mr-2 ' src='./images/role/tank/dark_knight.svg' /> 암흑기사
        </button>
        <button
          type="button"
          className="inline-flex items-center  bg-darkblue px-8 py-4 font-GmarketSansMedium text-lg text-white focus:outline-none focus:ring-2 focus:ring-tankblue">
          <img className=' -mt-1 w-4 h-6  mr-2 ' src='./images/role/tank/gunbreaker.svg' /> 건브레이커
        </button>

      </div>


      {/* blackbox */}
      <div className=" w-full bg-darkblue pt-7 pb-7 md:pt-20 md:pb-24 tails-selected-element" >

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8  text-white text-gray-900 font-GmarketSansMedium   ">
          <h1 className=" mb-8 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-3xl">{product.description}</h1>
          <div className=' text-white font-GmarketSansMedium  '>
            모든 몬스터가 '탱커'만 보게 해서 파티원들이 몬스터의 공격을 받지 않도록 지켜주는 직업.
          </div>
          <div>파티원들이 안정적인 딜을 넣을수 있도록 몬스터의 위치를 잡아주는 직업으로 <br>
          </br>쉽게 말해서 <span className='text-2xl text-tankblue'>두들겨 맞는 직업</span>입니다.</div>

          <h1 className=" mt-28 mb-8 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-3xl">1. 던전 몰이의 이해</h1>

          <h1 className=" mt-4 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-xl">4인 파티</h1>
          <h1 className=" mt-28 mb-8 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-3xl">2. MT | ST 의 이해</h1>

          <h1 className=" mt-4 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-xl">8인 파티</h1>
          <div className=' text-white font-GmarketSansMedium  '>
            <span className='font-GangwonEduPowerExtraBoldA text-2xl mr-2'>MT </span> 주로 몬스터의 어그로를 담당하여 위치조정의 역할을 맡는 탱커 = ON탱 <br></br>
            <span className='font-GangwonEduPowerExtraBoldA text-2xl mr-2'>ST </span> 각종 기믹처리와 파티의 안전을 담당하는 탱커 = OFF탱 <span className=' line-through '>기믹노예</span>
          </div>

          <h1 className=" mt-28 mb-8 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-3xl">3. 연합 레이드 탱커의 이해</h1>
          <h1 className=" mt-4 text-white text-gray-900 font-GangwonEduPowerExtraBoldA text-xl">연합파티 
          <span className='text-bubble-gum'>A</span>
          <span className='text-tankblue'>B</span>
          <span className='text-healgreen'>C</span></h1>

        </div>

      </div>

    </div>
  )
}
