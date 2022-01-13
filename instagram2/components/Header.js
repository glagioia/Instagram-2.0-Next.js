import React from 'react'
import {
    SearchIcon,
    PlusCircleIcon,

    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline"

import { HomeIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <div >
            <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>

                <div className='relative hidden lg:inline-grid w-24 mt-2  cursor-pointer'>
                    <img src="/instagram.png" layout="fill" objectFit="contain" />
                </div>
                <div className='relative lg:hidden flex-shrink-0  w-8  mt-3  cursor-pointer'>
                    <img src="/logo.png" layout="fill" objectFit="contain" />
                </div>


                {/* {middle-search} */}
                <div className='max-w-xs'>
                    <div className='relative p-3 rounded-md'>
                        <div className='absolute inset-y-0  pl-3 flex items-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500 ' />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 h-8 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                            type="text"
                            placeholder='search' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-end space-x-4'>
                        <HomeIcon className='navBtn ' />
                        <MenuIcon className='w-6 h-6 mt-2 md:hidden cursor-pointer' />
                        
                        <PaperAirplaneIcon className='navBtn' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
