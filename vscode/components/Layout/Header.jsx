import React from 'react'
import Login from '../UserManagement/Login'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image';
import logo_gub from './logo_gub.png';
import ff14 from './_24_ffxiv-logo-png_final-fantasy-xiv-dalamud-token-icon-by-doctorcool-on-deviantart.png';
import insta from './insta.png';
import kakao from './kakao.png';
import twitter from './twitter.png';
import NewUser from '../UserManagement/NewUser'
let navigation = [
  {
    name: '탱커',
    href: '/job',
    icon: './images/role/role_tanks.svg',
  },
  {
    name: '힐러',
    href: '/job/heal',
    icon: './images/role/role_healers.svg'
  },
  {
    name: '근딜',
    href: '#',
    icon: './images/role/role_melee.svg',
  },
  {
    name: '유격대',
    href: '#',
    icon: './images/role/role_ranged.svg',
  },
  {
    name: '캐스터',
    href: '#',
    icon: './images/role/role_casters.svg',
  }

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (

    <Popover className="relative bg-deepblue ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 py-5 md:justify-start md:space-x-10">

          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="http://localhost:3000/">
              <span className='-mt-1  mr-2'>
                <Image src={logo_gub} width={70} height={45} />
              </span>
            </a>
          </div>

          <Link href="/info"><div className=" font-GmarketSansMedium cursor-pointer text-white font-medium"> 공지사항 </div></Link>
          <Link href="#" ><div className="font-GmarketSansMedium cursor-pointer text-white font-medium"> 새싹가이드</div></Link>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex font-GmarketSansMedium">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'group inline-flex items-center rounded-md  font-medium'
                    )}
                  >
                    <span>잡가이드</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-white' : 'text-white',
                        ' ml-2 h-5 w-5 group-hover:text-wh'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-3 mt-3 w-48 max-w-md transform px-2 sm:px-0 lg:left-1/2  lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-4 flex items-start rounded-lg p-3 hover:bg-gray-50">
                                <img
                                  className="h-7 w-7 flex-shrink-0" aria-hidden="true"
                                  src={item.icon}
                                  alt=""
                                />
                                <div className="ml-8">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>'
                </>
              )}
            </Popover>
          </Popover.Group>


          <Link href="/map">
            <div className=" cursor-pointer text-white font-GmarketSansMedium font-medium"> 풍맥지도 </div>
          </Link>
          <Link href="pages/info">
            <div className="  cursor-pointer text-white font-GmarketSansMedium  font-medium"> 일일복권 </div>
          </Link>
          <Link href="/board">
            <div className="  cursor-pointer text-white font-GmarketSansMedium  font-medium"> 자유게시판 </div>
          </Link>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">

            <Login />
            <NewUser />
          </div>

        </div>
      </div>

      <div className='flex flex-col fixed  inset-y-0 right-0 m-10 mt-36'>
        <div className=' cursor-pointer -mt-1  mr-2 mb-1'>
          <Link href="https://www.ff14.co.kr/main">
            <a>
              <Image src={ff14} width={60} height={60} />
            </a>
          </Link>
        </div>
        <div className='-mt-1  mr-2 mb-1'>
          <a>
            <Image src={twitter} width={50} height={50} />
          </a>
        </div>
        <div className='-mt-1  mr-2 mb-1'>
          <a>
            <Image src={insta} width={50} height={50} />
          </a>
        </div>
        <div className='-mt-1  mr-2 mb-1'>
          <a>
            <Image src={kakao} width={50} height={50} />
          </a>
        </div>
      </div>

    </Popover>
  )
}
