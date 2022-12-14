import React from 'react'
import Image from 'next/image';
import gubugugubu from './gubugugubu.png';
import chocobo from './chocobo.png';
import jobicon from './jobicon.png';
import pngwing from './pngwing.com (1) λ³΅μ¬.png';
const Body = () => {
  return (
    <div>

      <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center tails-selected-element" >
        <div className="hero container  max-w-screen-lg  mx-auto flex justify-center">
          <span className='-mt-10  mr-2 -mb-10'>
            <Image src={gubugugubu} width={1000} height={800} />
          </span>
        </div>
      </div>

      <section className="w-full bg-darkblue pt-7 pb-7 md:pt-20 md:pb-24 tails-selected-element" >
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <span className='-mt-10  mr-2 -mb-10'>
            <Image src={chocobo} width={1050} height={850} />
          </span>
          </div>

          <div className=" box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className=" font-GmarketSansMedium  text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              π± μμΉ κ°μ΄λ
            </h2>
            <p className=" font-GmarketSansMedium ml-20 pt-4 pb-8  leading-7 sm:pr-16 xl:pr-32 lg:text-lg">
              μμΉμ μν νν14 μ€ννΈ κ°μ΄λ
            </p>

            <ul className="p-0 m-0 leading- border-0 border-gray-300 mr-40">
              <li className="box-border relative py-1 pl-0 text-right text-gray-500 font-GmarketSansMedium  border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-GmarketSansMedium  ">β</span></span> κΈ°λ³Έ κ²μ μ€μ 
              </li>
              <li className="box-border relative py-1 pl-0 text-right font-GmarketSansMedium  border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-GmarketSansMedium">β</span></span> κΈ°λ³Έ μ©μ΄ μ€λͺ
              </li>
              <li className="box-border relative py-1 pl-0 text-right font-GmarketSansMedium  border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-GmarketSansMedium">β</span></span> μΎμ ν μ»€μ€ν UI μ€μ 
              </li>
            </ul>

          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center font-GmarketSansMedium  px-8 mx-auto mt-2 leading-6 text-white border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl mr-60">
            <span className='inline-grid mr-3 -mb-12'>
            <Image src={jobicon} width={60} height={65} /> 
          </span><span className='inline-grid' > μ‘ κ°μ΄λ</span>
            </h2>
            <p className="pt-4 pb-8 mr-70 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              μ‘(Job)λ³ μ΄μλ³ λ° λμΈμ΄ν΄
            </p>
            <ul className="p-0 ml-20 leading-6 border-0 border-gray-300">
              <li className="box-border relative  py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-GmarketSansMedium">β</span></span> ν±, ν λμ  μ΄μλ²
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-GmarketSansMedium">β</span></span> μ‘(job)λ³ λμ¬μ΄ν΄
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-GmarketSansMedium">β</span></span> ν¬λ¦¬μ€ν μ»¨νλ¦­νΈ κ°μ΄λ (NEW!)
              </li>
            </ul>
          </div>
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <span className='-mt-10  mr-2 -mb-10'>
            <Image src={pngwing} width={500} height={650} />
          </span>
          </div>
        </div>
      </section>



    </div>

  )
}

export default Body