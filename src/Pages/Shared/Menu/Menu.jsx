import { NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import user from '../../../assets/user.png';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import './Active.css';

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  const menuItem = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT US</NavLink>
      </li>
      <li>
        <NavLink to="dasboard">DASBOARD</NavLink>
      </li>
      <li>
        <NavLink to="menu">MENU</NavLink>
      </li>
      <li>
        <NavLink to="shop">SHOP</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={` ${
        isOpen
          ? 'fixed opacity-100 bg-gray-700'
          : 'absolute opacity-70 bg-black'
      } w-full  text-white z-10`}
    >
      <nav
        className="flex justify-between items-center 
       py-3 px-3 md:px-7"
      >
        <div className="hidden md:block">
          <h1 className="text-2xl font-serif font-semibold">BISTRO BOSS</h1>
          <p className=" font-medium tracking-widest">
            <span className="text-xl">R</span>ESTAURANT
          </p>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="flex gap-x-6 items-center">
          <ul className="md:flex hidden  items-center gap-x-3 lg:gap-x-5 lg:text-xl font-medium">
            {menuItem}
          </ul>
          <NavLink to="/cart">
            <BsCartFill className="text-2xl"></BsCartFill>
          </NavLink>
          <button className="md:text-2xl font-medium">Sign In</button>
          <img className="rounded-full w-12 h-12" src={user} alt="" />
        </div>
        {/* mobile menu */}
        <div
          className={`flex md:hidden z-10 justify-center h-[91vh] bg-gray-700 w-4/5 transition-all ${
            isOpen ? 'left-0 top-16' : '-left-full top-16'
          }   absolute`}
        >
          <ul className="text-2xl font-medium space-y-6 mt-7">{menuItem}</ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
