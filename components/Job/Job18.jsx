import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

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
    { name: '나이트', inStock: true },
    { name: '전사', inStock: true },
    { name: '암흑기사', inStock: true },
    { name: '건브레이커', inStock: true },

  ],

  description:
    '탱커는 짱짱 쎄다 완전 짱이다 최고다 우가우가',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Job18() {
  const [selectedSize, setSelectedSize] = useState(product.tankjob[2])

  return (


    <div className="mt-32 ">
      <div className="mb-32 hero container max-w-screen-lg  mx-auto flex justify-center">

        <img className=' w-16 mt-2.5 mr-6' src='./images/role/role_tanks.svg' />
        <div className='text-white text-7xl font-bold text-shadow-neonblue  '>TANK</div>

      </div>

      <section className="w-full bg-darkblue pt-7 pb-7 md:pt-20 md:pb-24 tails-selected-element" >
        <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
        </div>


        <div className="pt-20">




          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <form className="mt-10">

                {/* tankjob */}
                <div className="mt-10">

                  <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                    <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                    <div className=" grid-cols-4 gap-0 sm:grid-cols-8 lg:grid-cols-4">
                      {product.tankjob.map((tankjob) => (
                        <RadioGroup.Option
                          key={tankjob.name}
                          disabled={!tankjob.inStock}
                          className={({ active }) =>
                            classNames(
                              tankjob.inStock
                                ? 'bg-darkblue shadow-md text-greyblue cursor-pointer'
                                : 'bg-white text-white cursor-not-allowed',
                              active ? 'ring-4 ring-tankblue' : '',
                              'group relative border rounded-md py- px-8 flex items-center justify-center text-8xl font-medium uppercase hover:bg-tankblue focus:outline-none sm:- sm:py-6'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">{tankjob.name}</RadioGroup.Label>
                              {tankjob.inStock ? (
                                <span
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >

                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-white text-gray-900">{product.description}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />

          </div>

        </div>
      </section>

    </div>
  )
}
