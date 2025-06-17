/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
  }
  ```
*/
'use client'

import { useState } from 'react'

const product = {
    name: '제품 개발',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Business', href: '#' },
    ],
    automotiveProductdevelopment: [
        'Classic AutosarAR Platform(SWP) based',
        '2Gateway function (CAN/CAN-FD/Ethernet)',
        '3Data Connection function (CAN/CAN-FD/Ethernet)',
        '4Connected Car Service function ',
        '5OTA (Over The  Air) function ',
        '6V2XCommunication function ',
        '7Security function ',
        '8CMMI LV3 based',
        '9ISO26262 functional safety products',
    ],
    homeIndustrialProductDevelopment: [
        'Home Network : H5W,S7W Total solution, wall pad, Lobby, Door phone, Local serve',
        'Network Camera : H5W,S7W Total solution, CMS,MAS server ONVIF',
        'mVolP : Android, iOS, Linux, SIP, IMS ,H26x, MPEG4, AEC',
        'Manufacturing : wall pad, Lobby, Door phone',
        'Multimedia broadcasting ',
    ],
}

export default function Product() {
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                    <img
                        alt={"pcb image"}
                        src={"/business/product/pcb.png"}
                        className="row-span-2 aspect-3/4 size-full rounded-lg object-cover "
                    />
                    <img
                        alt={"connector image"}
                        src={"/business/product/connector.png"}
                        className="row-span-2 aspect-3/4 size-full rounded-lg object-cover "
                    />
                    <img
                        alt={"pcb assembly image"}
                        src={"/business/product/pcb-assembly.png"}
                        className="row-span-2 aspect-3/4 size-full rounded-lg object-cover"
                    />
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>
                    <div className="py-10 lg:col-span-3 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Automotive Product development</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.automotiveProductdevelopment.map((p) => (
                                        <li key={p} className="text-gray-400">
                                            <span className="text-gray-600">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Home &Industrial Product Development</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.homeIndustrialProductDevelopment.map((p) => (
                                        <li key={p} className="text-gray-400">
                                            <span className="text-gray-600">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
