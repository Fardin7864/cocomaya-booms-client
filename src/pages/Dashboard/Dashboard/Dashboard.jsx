import { IoMdHome } from "react-icons/io";
import {FaCalendarAlt, FaCalendarCheck, FaShoppingCart, FaWallet} from 'react-icons/fa';
import { TiMessages } from "react-icons/ti";
import { MdOutlineMenu } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { Outlet } from "react-router-dom";




const Dashboard = () => {
  return (
    <div className=" flex">
      <div className=" bg-orange-400 font-cinzel w-2/12 flex flex-col justify-center items-center">
        <h3 className=" text-3xl font-semibold text-white">DeshBoard</h3>
        <div className=" my-10">
          <p className=" flex items-center gap-3 text-xs my-4">
            <IoMdHome className=" text-2xl" />
            USER HOME
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <FaCalendarAlt
            className=" text-2xl" />
            RESERVATION
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <FaWallet className=" text-2xl" />
            PAYMENT HISTORY
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <FaShoppingCart className=" text-2xl" />
            MY CART
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <TiMessages className=" text-2xl" />
            ADD REVIEW
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <FaCalendarCheck className=" text-2xl" />
            MY BOOKING
          </p> 
          <hr />
          <p className=" flex items-center gap-3 text-xs my-4">
            <IoMdHome className=" text-2xl" />
            HOME
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <MdOutlineMenu className=" text-2xl" />
            MENU
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <MdShoppingBag className=" text-2xl" />
            SHOP
          </p>
          <p className=" flex items-center gap-3 text-xs my-4">
            <MdPermContactCalendar className=" text-2xl" />
            CONTACT
          </p>
        </div>
      </div>
      <div className="w-10/12 bg-gray-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
