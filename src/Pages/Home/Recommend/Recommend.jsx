import { useEffect, useState } from 'react';
import RecommendCard from './RecommendCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Recommend = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => setMenus(data));
  }, []);
  return (
    <div className="mt-10 md:mt-20 px-2">
      <SectionTitle
        subTitle="Should Try"
        title="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
        {menus.slice(6, 12).map(menu => (
          <RecommendCard key={menu._id} menu={menu}></RecommendCard>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
