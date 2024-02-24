import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCard from './MenuCard';

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => setMenus(data));
  }, []);
  return (
    <div className="my-12">
      <SectionTitle
        subTitle="Check it out"
        title="FROM OUR MENU"
      ></SectionTitle>

      <div className="max-w-7xl mx-auto grid grid-cols-1 p-2 md:grid-cols-2  mt-9 md:mt-20 gap-x-5 gap-y-5">
        {menus.slice(0, 6).map(menu => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-outline uppercase text-xl btn-secondary border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
