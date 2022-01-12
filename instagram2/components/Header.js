import React from 'react'



function Header() {
    return (
        <div>
            <div className='flex justify-between max-w-6xl'>

                <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
                    <img src="/instagram.png" layout="fill" objectFit="contain" />
                </div>
                <div className='relative lg:hidden flex-shrink-0 h-8 w-8 cursor-pointer'>
                    <img src="/logo.png" layout="fill" objectFit="contain" />
                </div>


                {/* {middle-search} */}
                <div>
                    <div></div>
                    <input type="text" placeholder='search' className='w-64 h-8 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500' />
                </div>
                <div>
                    {/* {right} */}
                </div>
            </div>
        </div>
    )
}

export default Header
