import { IoMdHome } from "react-icons/io";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaList,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { MdOutlineMenu } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin/useAdmin";

const Dashboard = () => {

  const {isAdmin} = useAdmin();
  // console.log("is admin: ", isAdmin?.data)
  return (
    <div className=" flex">
      <div className=" bg-orange-400 font-cinzel h-[100vh] w-2/12 flex flex-col justify-center items-center">
        <h3 className=" text-3xl font-semibold text-white">DeshBoard</h3>
        <div className=" my-10">
          {isAdmin?.data ? (
            <>
              <NavLink className=" flex items-center gap-3 text-xs my-4">
                <IoMdHome className=" text-2xl" />
                ADMIN HOME
              </NavLink>
              <NavLink
                to="/dashboard/addItems"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaUtensils className=" text-2xl" />
                ADD ITEMS
              </NavLink>
              <NavLink
                to="/dashboard/manageItems"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaList className=" text-2xl" />
                MANAGE ITEMS
              </NavLink>
              <NavLink
                to="/dashboard/bookings"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaCalendarCheck className=" text-2xl" />
                MANAGE BOOKINGS
              </NavLink>
              <NavLink
                to="/dashboard/users"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaUser className=" text-xl" />
                ALL USERS
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className=" flex items-center gap-3 text-xs my-4">
                <IoMdHome className=" text-2xl" />
                USER HOME
              </NavLink>
              <NavLink
                to="/dashboard/reservation"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaCalendarAlt className=" text-2xl" />
                RESERVATION
              </NavLink>
              <NavLink
                to="/dashboard/paymentHistory"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaWallet className=" text-2xl" />
                PAYMENT HISTORY
              </NavLink>
              <NavLink
                to="/dashboard/cart"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaShoppingCart className=" text-2xl" />
                MY CART
              </NavLink>
              <NavLink
                to="/dashboard/addReview"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <TiMessages className=" text-2xl" />
                ADD REVIEW
              </NavLink>
              <NavLink
                to="/dashboard/booking"
                className=" flex items-center gap-3 text-xs my-4"
              >
                <FaCalendarCheck className=" text-2xl" />
                MY BOOKING
              </NavLink>
            </>
          )}
          {/* Common section */}
          <hr />
          <NavLink to="/" className=" flex items-center gap-3 text-xs my-4">
            <IoMdHome className=" text-2xl" />
            HOME
          </NavLink>
          <NavLink to="/menu" className=" flex items-center gap-3 text-xs my-4">
            <MdOutlineMenu className=" text-2xl" />
            MENU
          </NavLink>
          <NavLink to="/shop" className=" flex items-center gap-3 text-xs my-4">
            <MdShoppingBag className=" text-2xl" />
            SHOP
          </NavLink>
          <NavLink
            to="/contact"
            className=" flex items-center gap-3 text-xs my-4"
          >
            <MdPermContactCalendar className=" text-2xl" />
            CONTACT
          </NavLink>
        </div>
      </div>
      <div className="w-10/12 bg-gray-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
