import React from 'react'
import Map from '../../components/Map';

let navigation = [
  {
    name: '창천의 이슈가르드',
    href: '/job',
  },
  {
    name: '홍련의 해방자',
    href: '/job/heal',
  },
  {
    name: '칠흑의 반역자',
    href: '#',
  },
  {
    name: '효월의 종언',
    href: '#',
  }
]

const index = () => {
  return (
    <div >
      <div className=' mt-36 text-white text-5xl font-GmarketSansMedium text-shadow-neonHeal'>풍맥지도</div>







      <div className='container mx-auto box-border w-auto  border-spacing-8 border-4 border-darkgray  m-10 bg-midgray'>
        <Map />
      </div>
    </div>
  )
}

export default index