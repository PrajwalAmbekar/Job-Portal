import { IoNotifications } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import ShowServices from "./ShowServices";
import ShowCompanies from "./ShowCompanies";
import ShowNavbar from "./ShowNavbar";
import { useState } from "react";
const Navbar = () => {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const handleServicesClick = () => {
        setShowDropdown1(!showDropdown1);
    };
    const handleCompaniesClick = () => {
        setShowDropdown2(!showDropdown2);
    };
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }




    return (
        <>
            <div className="flex justify-between items-center  :m-4 p-4 font-mono shadow-lg xm:bg-white">
                <div id='' className="cursor-pointer font-serif font-extrabold text-black text-lg shadow-xl p-1 bg-red-200 border rounded-lg ">CareerNest.in</div>
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none lg:hidden z-20">{isOpen ? <ImCross />:<GiHamburgerMenu />} {isOpen && (
                    <div className='lg:hidden fixed inset-0  w-xm h-96 bg-white rounded-md shadow-lg z-10 text-center ml-4 mt-16 bg-opacity-75'>
                        <ShowNavbar />;
                    </div>)}</button>
                <div className="hidden lg:flex lg:items-center lg:gap-20">
                    <li className="list-none cursor-pointer hover:text-red-800 hover:underlin">Home</li>
                    <li className="list-none cursor-pointer hover:text-red-800 hover:underline" onClick={handleServicesClick}>Services {showDropdown1 && (<div className="absolute mt-2 w-auto -translate-x-1/2  bg-white rounded-md shadow-lg z-10"><ShowServices /></div>)}</li>
                    <li className="list-none cursor-pointer hover:text-red-800 hover:underline" onClick={handleCompaniesClick}>Companies
                        {showDropdown2 && (<div className="absolute mt-2 w-auto -translate-x-1/2  bg-white rounded-md shadow-lg z-10"><ShowCompanies /></div>)}
                    </li>
                    <li className="list-none cursor-pointer text-white"><button className="border-2 p-2 rounded-lg  bg-orange-500 border-orange-500 hover:-translate-y-1">Resume Upload</button></li>
                    <li className="list-none cursor-pointer hover:text-red-800 hover:underline flex items-center  gap-2">Login <BsPersonCircle /></li>
                    <li className="list-none flex gap-1 items-center cursor-pointer hover:text-red-800 hover:underline">Notification <IoNotifications /></li>
                </div>


            </div></>
    )
}
export default Navbar;