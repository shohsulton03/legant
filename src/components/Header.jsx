import HeaderLogo from "@/assets/svgs/headerLogo.svg";
import { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { FaInstagram, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { FiFacebook, FiMenu, FiX, FiYoutube } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const token = useSelector((state) => state.token.value);
  const [isMenuOpen, toggleMenu] = useState(false);

  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop", hasDropdown: true },
    { path: "/product", label: "Product", hasDropdown: true },
    { path: "/contact", label: "Contact Us" },
    {
      path: token ? "/admin/create-product" : "/register",
      label: token ? "Admin" : "Register",
    },
    {
      path: token ? "/admin/create-product" : "/login",
      label: token ? "Admin" : "Login",
    },
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://facebook.com", icon: <FiFacebook /> },
    { href: "https://youtube.com", icon: <FiYoutube /> },
  ];

  const renderLinks = () =>
    menuLinks.slice(0, -1).map(({ path, label, hasDropdown }) => (
      <NavLink
        key={path}
        to={path}
        className={`flex items-center gap-2 ${
          hasDropdown ? "justify-center" : ""
        }`}
        onClick={() => isMenuOpen && toggleMenu(false)}
      >
        {label}
        {hasDropdown && <IoIosArrowDown />}
      </NavLink>
    ));

  return (
    <header className="bg-white w-full h-20 py-6">
      <div className="container flex items-center justify-between">
        <img src={HeaderLogo} alt="Header Logo" />

        <nav className="hidden md:flex gap-10 text-lg text-[#121212] font-medium">
          {renderLinks()}
        </nav>

        <div className="hidden md:flex gap-4 text-3xl cursor-pointer">
          <IoSearch />
          <FaRegUserCircle />
          <CgShoppingBag />
        </div>

        <div
          className="flex md:hidden text-3xl cursor-pointer"
          onClick={() => toggleMenu((prev) => !prev)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-[800px] bg-white z-50 px-6 py-10">
          <div className="flex justify-between items-center mb-6">
            <img src={HeaderLogo} alt="Header Logo" />
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => toggleMenu(false)}
            />
          </div>

          <div className="relative flex items-center pb-6">
            <IoSearch className="absolute left-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="border pl-10 pr-4 py-3 w-full rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4 text-lg text-[#121212] font-medium">
            {menuLinks.map(({ path, label, hasDropdown }) => (
              <div
                key={path}
                className="flex items-center justify-between pb-4 border-b-2"
              >
                <NavLink
                  to={path}
                  onClick={() => toggleMenu(false)}
                  className="flex w-full items-center justify-between"
                >
                  {label}
                  {hasDropdown && <IoIosArrowDown />}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="mt-28 flex flex-col gap-4">
            {["Cart", "Wishlist"].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between pb-4 border-b-2"
              >
                <span>{item}</span>
                <div className="flex items-center gap-2">
                  {index === 0 ? (
                    <CgShoppingBag className="text-2xl" />
                  ) : (
                    <FaRegHeart className="text-2xl" />
                  )}
                  <span className="w-7 h-7 rounded-full bg-black text-white text-center">
                    2
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => toggleMenu(false)}
              className="w-full py-3 bg-black text-white text-lg rounded-lg"
            >
              {token ? "Admin Panel" : "Sign In"}
            </button>
          </div>

          <div className="flex justify-start gap-6 mt-8 text-2xl">
            {socialLinks.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
