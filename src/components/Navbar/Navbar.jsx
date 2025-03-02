import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
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
                <div
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  className="bg-gray-100 cursor-pointer rounded-full p-3 flex justify-center items-center"
                >
                  <i className="">
                    <IoSearchOutline />
                  </i>
                </div>
                <div
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                  className="bg-gray-100 cursor-pointer rounded-full p-3 flex justify-center items-center"
                >
                  <i className="">
                    <PiShoppingCartLight />
                  </i>
                </div>
              </div>
            </div>
            {/* modal */}
            {/* modal for search start */}
            <dialog id="my_modal_1" className="modal -mt-48">
              <div className="modal-box max-w-[30%]">
                <form method="dialog" className="absolute right-0 -top-5">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="bg-[#8CE723] text-white w-7 h-7 cursor-pointer rounded-l-full absolute right-0 top-5 text-center">
                    ✕
                  </button>
                </form>
                <div>
                  <div className="pb-4 text-center">
                    <p>Search Anything</p>
                  </div>
                  <label className="input">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                  </label>
                </div>
              </div>
            </dialog>
            {/* modal for search start */}
            {/* modal for cart start */}
            <dialog id="my_modal_2" className="modal -mt-32">
              <div className="modal-box max-w-[30%]">
                <form method="dialog" className="absolute right-0 -top-5">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="bg-[#8CE723] text-white w-7 h-7 cursor-pointer rounded-l-full absolute right-0 top-5 text-center">
                    ✕
                  </button>
                </form>
                <div>
                  <div className="text-center">
                    <svg
                      width="24"
                      height="24"
                      className="w-16 h-16 text-primary-600 m-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                      ></path>
                    </svg>
                    <h2 className="font-medium text-xl">Your cart is empty</h2>
                    <p className="text-sm">
                      Looks like you haven’t added any items to your cart yet.
                    </p>
                    <Link>
                      <button></button>
                    </Link>
                  </div>
                </div>
              </div>
            </dialog>
            {/* modal form cart end */}
            {/* modal end */}
            <div className="lg:flex">
              <NavLink
                to={"/preOrder"}
                className="bg-[#8CE723] text-white flex gap-3 px-2 lg:px-4 py-1.5 font-semibold rounded-full text-sm justify-center items-center"
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
