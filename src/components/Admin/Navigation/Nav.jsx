import  React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { GoLaw } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () =>{
    return(
        <div className='bg-white h-screen p-5 w-2/12 my-auto lg:w-2/12 md:w-1/3 sm:1/3'>
            <nav>
                <ul>
                    <li className='flex items-center justify-start w-full gap-x-4 my-16'>
                        <LuLayoutDashboard className='text-2xl cursor-pointer' data-aos="fade-right" data-aos-duration="1500"/>
                        <a href="#" className='block capitalize text-base font-medium' data-aos="fade-left" data-aos-duration="1500">dashboard</a>
                    </li>
                    <li className='flex items-center justify-start w-full gap-x-4 my-16'>
                        <GoLaw className='text-2xl cursor-pointer' data-aos='fade-right' data-aos-duration="1500"/>
                        <a href="#" className='block capitalize text-base font-medium' data-aos="fade-left" data-aos-duration='1500'>lawyers</a>
                    </li>
                    <li className='flex items-center justify-start w-full gap-x-4 my-16'>
                        <FaUserFriends className='text-2xl cursor-pointer'  data-aos='fade-right' data-aos-duration="1500"/>
                        <a href="#" className='block capitalize text-base font-medium' data-aos="fade-left" data-aos-duration='1500'>clients</a>
                    </li>
                    <li className='flex items-center justify-start w-full gap-x-4 my-16'>
                        <PiSuitcaseSimple className='text-2xl cursor-pointer' data-aos='fade-right' data-aos-duration="1500"/>
                        <a href="#" className='block capitalize text-base font-medium' data-aos='fade-left' data-aos-duration="1500">cases</a>
                    </li>
                    <li className='flex items-center justify-start w-full gap-x-4 my-16'>
                        <RiLogoutBoxLine className='text-2xl cursor-pointer' data-aos='fade-right' data-aos-duration="1500"/>
                        <Link to="/" className='block capitalize text-base font-medium' data-aos="fade-left" data-aos-duration="1500">LogOut</Link>
                        {/* <a href="#" className='block capitalize text-base font-medium'>logout</a> */}
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;