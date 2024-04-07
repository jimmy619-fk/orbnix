import React from 'react';

export default function Footer() {
    return (
        <div className='relative hidden lg:flex pt-4 bg-[#121212] w-full'>
            <div className='absolute bottom-0'>
                <img src="/a.svg" alt="" />
            </div>
            <div className='absolute bottom-0 left-1'>
                <img src="/b.svg" alt="" />
            </div>
            <div className='absolute bottom-0 right-1'>
                <img src="/c.svg" alt="" />
            </div>
            <div className='mx-[30px] flex flex-col w-full'>
                <div className='flex gap-x-3'>
                    <div className='flex gap-x-2 items-center'>
                        <img src="/footlogo1.svg" alt="" />
                        <img src="/footlogo2.svg" alt="" />
                    </div>
                </div>

                {/* below data */}
                <div className='  mt-[80px] flex justify-between mb-5 w-full'>
                    {/* left */}
                    <div className='w-full flex flex-col gap-y-3 text-[#808080] text-[14px]'>
                        <p>τaostats is a Block Explorer and Analytics Platform for <br /> Bittensor,
                            a decentralized machine learning network.
                        </p>
                        <p>This site is not affiliated with the Opentensor Foundation. <br />
                            The content of this website is provided for information <br /> purposes only.</p>
                        <p>

                            No claim is made as to the accuracy or currency of the content
                            <br /> on this site at any time. <br />
                        </p>
                        <p>
                            τaosτaτs is created and maintained by mogmachine. We hope <br />
                            you found it helpful, if you have any suggestions or issues <br />
                            please contact us at taostats@mogmachine.com.</p>
                    </div>
                    {/* right */}
                    <div className='grid grid-cols-3 w-full'>
                        <div className='flex flex-col gap-y-6 w-full'>
                            <div className='text-[16px]'>
                                <h3 className='text-[#FFFFFF]'>
                                    Blockchain
                                </h3>
                            </div>
                            <div className='text-[14px] text-[#ABABAB] flex flex-col gap-y-2'>
                                <p>Blocks</p>
                                <p>Blocks</p>
                                <p>Blocks</p>
                                <p>Blocks</p>

                            </div>

                        </div>
                        <div className='flex flex-col gap-y-6 w-full'>
                            <div className='text-[16px]'>
                                <h3 className='text-[#FFFFFF]'>
                                    Validators
                                </h3>
                            </div>
                            <div className='text-[14px] text-[#ABABAB] flex flex-col gap-y-2'>
                                <p>Blocks</p>
                                <p>Blocks</p>
                                <p>Blocks</p>
                                <p>Blocks</p>

                            </div>

                        </div>
                        <div className='flex flex-col gap-y-6 w-full'>
                            <div className='text-[16px]'>
                                <h3 className='text-[#FFFFFF]'>
                                    Developers
                                </h3>
                            </div>
                            <div className='text-[14px] text-[#ABABAB] flex flex-col gap-y-2'>
                                <p>Blocks</p>
                                <p>Blocks</p>
                                <p>Blocks</p>
                                <p>Blocks</p>

                            </div>

                        </div>
                    </div>


                </div>
                {/* foot tradeMark */}
                <div className='flex justify-between z-[10] mb-4'>
                    <div className='text-[#808080] text-[14px]'>
                        <p>Taostats ©2024</p>
                    </div>
                    <div className='text-[#FFFFFF] text-[14px]'>
                        <p>Taostats is funded by public delegation. Support us by delegating stake to the taostats.io validator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
