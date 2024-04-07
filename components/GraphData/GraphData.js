import React from 'react'
import Mobilerightcards from '../Mobilerightcards/Mobilerightcards'

export default function GraphData() {
    return (
        <div className='absolute top-[200px] sm:top-[160px] overflow-hidden w-full flex'>
            <div className='mx-[20px] sm:mx-[50px] xl:mx-[120px] flex justify-between w-full'>
                {/* left */}
                <div className='flex flex-col w-full '>
                    <div className='flex items-center gap-x-2'>
                        <div>
                            <img src="/nav1.svg" alt="" />
                        </div>
                        <div className='text-[#909090] text-[14px] sm:text-[20px] font-[400px]'>
                            <p>Bittensor price (τao)</p>
                        </div>

                    </div>
                    <div className='text-[40px] sm:text-[64px] font-[400px] text-[#FFFFFF]'>
                        <p>#909090</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <div>
                            <img src="/CgChevronUp.svg" alt="" />
                        </div>
                        <div className='text-[#95EE5F] text-[12px] sm:text-[16px]'>
                            <p>24.43% </p>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='hidden mr-[90px] lg:grid grid-cols-5 gap-x-[130px] w-full '>
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
                        <div className='text-[20px] text-[#FFFFFF]'>
                            <p>15.9%

                            </p>
                        </div>
                    </div>
                    <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                        {/* 1st */}
                        <div className='text-[14px] text-[#707070]'>
                            <p>Circulating Supply</p>
                        </div>
                        <div className='text-[20px] text-[#FFFFFF]'>
                            <p>6,246,404τ</p>
                        </div>

                    </div>
                    {/* 2nd */}
                    <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                        <div className='text-[14px] text-[#707070]'>
                            <p>Finalised Blocks</p>
                        </div>
                        <div className='text-[20px] text-[#FFFFFF]'>
                            <p>2,365,427
                            </p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                        <div className='text-[14px] text-[#707070]'>
                            <p>Signed extrinsics</p>
                        </div>
                        <div className='text-[20px] text-[#FFFFFF]'>
                            <p>2,365,427

                            </p>
                        </div>
                    </div>
                    {/* 4th */}
                    <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                        <div className='text-[14px] text-[#707070]'>
                            <p>Total Accounts
                            </p>
                        </div>
                        <div className='text-[20px] text-[#FFFFFF]'>
                            <p>93,741

                            </p>
                        </div>
                    </div>
                    {/* 5th */}
                    <div className='w-[126px] flex flex-col border-t border-[#282828]'>
                        <div className='text-[14px] text-[#707070]'>
                            <p>Transfers
                            </p>
                        </div>
                        <div className='text-[20px] text-[#FFFFFF]'>
                            <p>286,239

                            </p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
