import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth/useAuth";
import useCart from "../../hooks/useCart/useCart";

const Navbar = () => {
const {user, logOut} = useAuth();
const {cart} = useCart();
const userName = user?.displayName ? user.displayName : user?.email.split("@")[0]
  const navLinks = 
    <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
    <li><NavLink to={'/desboard'}>DashBoard</NavLink></li>
    <li><NavLink to={'/menu'}>Our Manue</NavLink></li>
    <li><NavLink to={'/food'}>Our {"Food's"}</NavLink></li>
    <li><NavLink to={'/dashboard/cart'} className=" flex items-center gap-0"><IoCartOutline className=" text-2xl"/><span className=" bg-pink-500 text-white px-3 text-[10px] rounded-full">{cart?.data?.length}</span></NavLink></li>
    <li><h3>{userName?.toUpperCase()}</h3></li>
    </>

// console.log(user)

  return (
    <div className="navbar fixed z-40 bg-opacity-30 bg-black max-w-7xl text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn font-cinzel btn-ghost normal-case text-xl">COCO BOOMS</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?  <Link onClick={logOut} className="btn">Sign Out</Link> : <Link to="/signup" className="btn">Signup</Link> 
        }
        
      </div>
    </div>
  );
};

export default Navbar;
