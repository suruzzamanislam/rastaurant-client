import { NavLink } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import userImg from '../../../assets/user.png';
import { Divide as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import './Active.css';
import { authContext } from '../../../providers/AuthProvider';
import useCart from '../../../hooks/useCart';

const Menu = () => {
  const { user, LogOutUser } = useContext(authContext);
  const [cart, setCart] = useCart();
  const [isOpen, setOpen] = useState(false);
  console.log(cart.length);

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        setCart([]);
      })
      .catch(error => console.log(error));
  };
  const handleMenuItemClick = () => {
    setOpen(false);
  };
  const menuItem = (
    <>
      <li>
        <NavLink onClick={handleMenuItemClick} to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleMenuItemClick} to="/contact">
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleMenuItemClick} to="/dasboard">
          DASBOARD
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleMenuItemClick} to="/ourmenu">
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleMenuItemClick} to="/order/DESSERTS">
          ORDER
        </NavLink>
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
          <ul className="md:flex hidden  items-center gap-x-3 lg:gap-x-5  font-medium">
            {menuItem}
          </ul>
          <NavLink to="/cart" className="relative">
            <BsCartFill className="text-2xl"></BsCartFill>
            {user && (
              <p className="bg-white text-black rounded-full w-4 h-4 text-xs text-center font-semibold absolute -right-2 -top-2">
                {cart.length}
              </p>
            )}
          </NavLink>

          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className=" font-medium hover:text-red-400"
              >
                Log Out
              </button>
              <img className="rounded-full w-12 h-12" src={userImg} alt="" />
            </>
          ) : (
            <>
              <NavLink to={'/login'}>
                {' '}
                <button className=" font-medium">Sign In</button>
              </NavLink>
            </>
          )}
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
