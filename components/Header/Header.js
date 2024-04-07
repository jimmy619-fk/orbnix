import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Modal } from 'react-bootstrap';
import { Drawer } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex w-full mt-[26px]'>
            <div className='flex mx-3 justify-between  w-full'>
                {/* start */}
                <div className=' flex gap-x-[20px] md:gap-x-[40px]'>
                    {/* logo */}
                    <div className='flex items-center'>
                        <img src="/graph1.svg" alt="" className='w-[100px] sm:w-auto ' />
                    </div>
                    {/* search */}
                    <div className='hidden xl:flex gap-x-1 md:gap-x-3 items-center  bg-[#2E2E2E] px-2 rounded-lg'>
                        <div>
                            <img src="/graph2.svg" alt="" className='' />
                        </div>
                        <div>
                            <input type="text"
                                className='w-[280px] xl:w-[300px] text-[15px] placeholder:text-[15px] bg-transparent outline-none text-white'
                                placeholder='Search by Address, Validator or Txn Hash' name="" id="" />
                        </div>
                    </div>
                </div>
                {/* end */}
                <div className='hidden xl:flex gap-x-2 md:gap-x-3 xl:gap-x-[60px]'>
                    {/* menus */}
                    <div className='flex items-center gap-x-[20px] md:gap-x-[60px]'>
                        <NavDropdown className='text-[16px] font-[500px] text-[#FFFFFF]'
                            title="Subnets" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">opt1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">opt2</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className='text-[16px] font-[500px] text-[#FFFFFF]'
                            title="Validators" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">opt1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">opt2</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className='text-[16px] font-[500px] text-[#FFFFFF]'
                            title="Developers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">opt1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">opt2</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown className='text-[16px] font-[500px] text-[#FFFFFF]'
                            title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">opt1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">opt2</NavDropdown.Item>

                        </NavDropdown>
                    </div>
                    {/* button */}
                    <div className='flex items-center text-white gap-x-1 bg-[#2E2E2E] rounded-md px-4 cursor-pointer active:bg-opacity-70'>
                        <div>
                            <p>5xdabgos...</p>
                        </div>
                        <div>
                            <img src="/graph3.svg" alt="" />
                        </div>

                    </div>
                </div>
                {/* end for mobile */}
                <div className='flex xl:hidden gap-x-2'>
                    {/* search */}
                    <div className='flex gap-x-2 sm:gap-x-3 items-center  bg-[#2E2E2E] px-2 rounded-lg'>
                        <div>
                            <img src="/graph2.svg" alt="" className='' />
                        </div>
                        <div>
                            <input type="text"
                                className='w-[50px] sm:w-[123px] text-[15px] placeholder:text-[15px] bg-transparent outline-none text-white'
                                placeholder='Search ' name="" id="" />
                        </div>
                    </div>
                    {/* menu */}
                    <Dropdown as='div' align="end" show={isOpen} onToggle={toggleDropdown}>
                        <div onClick={toggleDropdown} className='active:bg-opacity-70 text-[12px] flex flex-col gap-y-1 bg-[#2C2C2C] items-center p-3 rounded-lg cursor-pointer'>
                            <div>
                                <img src="/up.svg" alt="" className='relative right-1' />
                            </div>
                            <div>
                                <img src="/down.svg" alt="" className='relative left-1' />
                            </div>
                        </div>
                        <Dropdown.Toggle as='div' className='d-none' />

                        <Dropdown.Menu>
                            <Dropdown.Item>Hello there!</Dropdown.Item>
                            <Dropdown.Item>Hello there!</Dropdown.Item>
                            <Dropdown.Item>Hello there!</Dropdown.Item>
                            <Dropdown.Item>Hello there!</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>

            </div>


        </div>
    )
}
