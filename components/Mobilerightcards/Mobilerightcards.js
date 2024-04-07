import React from 'react'

export default function Mobilerightcards() {
    return (
        <>
            <div className=' gap-y-4 mx-auto p-6  relative mr-[90px] grid grid-cols-2 md:grid-cols-3 lg:hidden gap-x-6 sm:gap-x-[130px]  '>
                <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                    {/* 1st */}
                    <div className='text-[14px] text-[#707070]'>
                        <p>Market Cap</p>
                    </div>
                    <div className='text-[20px] text-[#FFFFFF]'>
                        <p>$3.85b</p>
                    </div>

                </div>
                {/* 2nd */}
                <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                    <div className='text-[14px] text-[#707070]'>
                        <p>24hr Volume</p>
                    </div>
                    <div className='text-[20px] text-[#FFFFFF]'>
                        <p>$27.97m
                        </p>
                    </div>
                </div>
                {/* 3rd */}
                <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                    <div className='text-[14px] text-[#707070]'>
                        <p>Total Supply</p>
                    </div>
                    <div className='text-[20px] text-[#FFFFFF]'>
                        <p>21,000,000τ

                        </p>
                    </div>
                </div>
                {/* 4th */}
                <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                    <div className='text-[14px] text-[#707070]'>
                        <p>Validating APY
                        </p>
                    </div>
                    <div className='text-[20px] text-[#FFFFFF]'>
                        <p>19.39%

                        </p>
                    </div>
                </div>
                {/* 5th */}
                <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                    <div className='text-[14px] text-[#707070]'>
                        <p>Staking APY
                        </p>
                    </div>
                    <div className='text-[20px] text-[#707070]'>
                        <p>15.9%

                        </p>
                    </div>
                </div>
                {/* 6th */}
                <div className='w-[126px]  flex flex-col border-t border-[#282828]'>
                    {/*  */}
                    <div className='text-[14px] text-[#707070]'>
                        <p>Circulating Supply</p>
                    </div>
                    <div className='text-[20px] text-[#707070]'>
                        <p>6,246,404τ</p>
                    </div>

                </div>

            </div>
            {/* Expand button centered horizontally */}
            <div className='md:hidden flex  bottom-6 relative  justify-center'>
                <div className='cursor-pointer active:opacity-70 flex p-2 text-[14px] text-white items-center bg-[#141414] border-[#474747] border  rounded-xl absolute bottom-4'>
                    <div className=''>Expand</div>
                    <div>
                        <img src="/CgExpand.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
