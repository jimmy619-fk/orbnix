import React from 'react'

export default function Navbar() {
    return (
        <div className='flex   bg-[#000000]'>
            <div className=' flex flex-col gap-y-3 md:flex-row md:justify-between w-full p-2  mx-1 md:mx-3 '>
                {/* left */}
                <div className='md:mx-6 flex justify-between   md:gap-x-3  items-center'>
                    <div className='flex gap-x-5'>
                        <div className='flex items-center gap-x-1 text-[#FFFFFF] text-[13px] sm:text-[15px] font-[500]'>
                            <img src="/nav1.svg" alt="" />
                            <p>$601.25</p>
                        </div>
                        <div className='flex text-[10px] sm:text-[12px]  items-center gap-x-1 text-[#95EE5F]'>
                            <img src="/CgChevronUp.svg" alt="" />
                            <p>24.43%</p>
                        </div>
                    </div>
                    <div className='flex gap-x-5'>
                        <div className='ml-4 flex gap-x-2 text-[10px] sm:text-[15px] font-[400]'>
                            <p className='text-[#909090]'>Market Cap</p>
                            <p className='text-[#FFFFFF]'>$3.85b</p>
                        </div>
                        <div className='hidden lg:flex gap-x-3 text-[10px] sm:text-[15px] font-[400]'>
                            <p className='text-[#909090]'>24hr Volume</p>
                            <p className='text-[#FFFFFF]'>$27.97m</p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='  flex justify-between md:flex-row  gap-x-2 items-center'>
                    {/* visit */}
                    <div className='active:bg-opacity-70 cursor-pointer rounded-md px-2 sm:px-3 h-[31px] bg-[#1F1F1F] flex items-center text-center gap-2 text-[#FFFFFF] text-[12px] sm:text-[14px]  font-[500]'>
                        <img src="/nav3.svg" alt="" />
                        <p className=''>Visit Corcel.io</p>
                    </div>
                    <div className='flex gap-x-2'>
                        {/* buy */}
                        <div className='active:bg-opacity-70 cursor-pointer rounded-md px-2 sm:px-3 h-[31px] bg-[#1F1F1F] flex items-center text-center gap-2 text-[#FFFFFF] text-[12px] sm:text-[14px]  font-[500]'>
                            <img src="CgDollar.svg" alt="" />
                            <p className=''>Buy</p>
                        </div>
                        {/* stake */}
                        <div className='active:bg-opacity-70 text-[#000000] cursor-pointer rounded-md px-2.5 sm:px-3 h-[31px] bg-[#D9D9D9] flex items-center text-center gap-2 text-[12px] sm:text-[14px]   font-[500]'>
                            <img src="/CgDarkMode.svg" alt="" />
                            <p className=''>Stake</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
