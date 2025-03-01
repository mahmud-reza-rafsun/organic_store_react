import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import NavbarLogo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <nav className="max-w-11/12 mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="w-[30%]">
              <img className="max-w-24 lg:max-w-32" src={NavbarLogo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <details>
                  <summary>Product</summary>
                  <ul className="p-2 w-36 z-50 text-black rounded-b-lg rounded-t-none">
                    <li>
                      <NavLink to={"/honey"}>Honey</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/cream-honey"}>Cream Honey</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink to={"/groceries"}>Groceries</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="lg:flex">
              <div className="flex gap-3 mr-3">
                <div className="bg-gray-100  rounded-full p-3 flex justify-center items-center">
                  <i className="">
                    <IoSearchOutline />
                  </i>
                </div>
                <div className="bg-gray-100  rounded-full p-3 flex justify-center items-center">
                  <i className="">
                    <PiShoppingCartLight />
                  </i>
                </div>
              </div>
            </div>
            <div className="lg:flex">
              <NavLink
                to={"/"}
                className="lg:bg-[#76ce12] flex gap-3 px-2 md:px-2 lg:px-4 py-1.5 font-semibold rounded-full text-sm justify-center items-center"
              >
                <span className="hidden lg:block">Pre Order</span>
                <div className="bg-[#1C1C1C] text-white w-6 h-6 lg:w-7 lg:h-7 mx-auto flex items-center justify-center rounded-full">
                  <i className="  ">
                    <GoArrowUpRight />
                  </i>
                </div>
              </NavLink>
            </div>
            {/* dropdown */}
            <div className="dropdown">
              <div tabIndex="0" role="button" className=" lg:hidden">
                <div className="px-4 py-2 text-black rounded-full">
                  <i className="fa-light text-xl rounded-full fa-bars">
                    <HiMiniBars3 />
                  </i>
                </div>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-[1] mt-3 w-[200px] p-2 shadow"
              >
                <li className="text-lg">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <details>
                    <summary>Product</summary>
                    <ul className="p-2 z-50 text-black rounded-b-lg rounded-t-none">
                      <li>
                        <NavLink to={"/honey"}>Honey</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/cream-honey"}>Cream Honey</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
