import React from 'react'

const Body = () => {
  return (
    <div>

      <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center tails-selected-element" >
        <div className="hero container max-w-screen-lg  mx-auto flex justify-center">
          <img src="./images/gubugugubu.png" />

        </div>
        {/* <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">GUBRA</span>
          <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
            FFXIV INFOMATION LIBRARY
          </span>
        </h1> */}
        {/* 
        <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
          파이널판타지14 정보 공유사이트np
        </div>

        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              메인페이지 바로가기 </a>
          </span>
        </div> */}
      </div>

      <section className="w-full bg-darkblue pt-7 pb-7 md:pt-20 md:pb-24 tails-selected-element" >
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="./images/chocobo.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
          </div>
          <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              새싹 가이드
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              파판14 게임에서 알려주지 않는 초보자가 반드시 설정해야 하는 것들
            </p>
{/* 

            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-purple border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                  새싹가이드 바로가기 </a>
              </span>
            </div> */}

            <ul className="p-0 m-0 leading-6 border-0 border-gray-300 ">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-bold ">✓</span></span> 기본 게임 설정
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-bold">✓</span></span> 기본 용어 설명 
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400">
                  <span className="text-sm font-bold">✓</span></span> 쾌적한 커스텀 UI 설정
              </li>
            </ul>
          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-white border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              잡 가이드
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              잡별 운영볍 및 딜싸이클 확인 가능
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full" data-primary="yellow-400"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
              </li>
            </ul>
          </div>
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="/images/pngwing.com (1) 복사.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
          </div>
        </div>
      </section>



    </div>

  )
}

export default Body