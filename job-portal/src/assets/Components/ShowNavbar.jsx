import { IoNotifications } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
const ShowNavbar = () => {
    
    return (
        <>
            <div  className="grid grid-rows-2  p-8  font-serif bg-yellow-400 gap-9 pt-20 pb-20">
                <li className="list-none cursor-pointer hover:text-red-800 hover:underline">Home</li>
                <li className="list-none cursor-pointer hover:text-red-800 hover:underline">Services </li>
                <li className="list-none cursor-pointer hover:text-red-800 hover:underline" >Companies</li>
                
                <li className="list-none cursor-pointer hover:text-red-800 hover:underline flex items-center  gap-2 pl-32">Login <BsPersonCircle /></li>
                <li className="list-none flex gap-1 items-center cursor-pointer hover:text-red-800 hover:underline pl-28">Notification <IoNotifications /></li>
                <li className="list-none cursor-pointer text-white"><button className="border-2 p-2 rounded-lg  bg-orange-500 border-orange-500 hover:-translate-y-1">Resume Upload</button></li>
            </div>
        </>
    )
}
export default ShowNavbar;