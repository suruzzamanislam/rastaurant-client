import { useState } from 'react';
import Cover from '../../Components/Cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import RecommendCard from '../../Components/MenuCard/RecommendCard';
import Footer from '../Shared/Footer/Footer';
import './tab.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import loadingImg from '../../../public/loading.gif';
const Order = () => {
  const categories = [
    'DESSERTS',
    'PIZZAS',
    'SALADS',
    'SOUPS',
    'DRINKS',
    'OFFEREDS',
    'POPULARS',
  ];
  const { category } = useParams();
  const indexTabs = categories.indexOf(category);
  const [orderIndex, setOrderIndex] = useState(indexTabs);

  const [menus, loading] = useMenu();
  const desserts = menus.filter(menu => menu.category === 'dessert');
  const salads = menus.filter(menu => menu.category === 'salad');
  const populars = menus.filter(menu => menu.category === 'popular');
  const drinks = menus.filter(menu => menu.category === 'drinks');
  const pizzas = menus.filter(menu => menu.category === 'pizza');
  const soups = menus.filter(menu => menu.category === 'soup');
  const offereds = menus.filter(menu => menu.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Restaurant || Order</title>
      </Helmet>
      <Cover img={orderImg} title="ONLINE SHOP"></Cover>
      <Tabs defaultIndex={orderIndex} onSelect={index => setOrderIndex(index)}>
        <TabList>
          <Tab>DESSERTS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SALADS</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DRINKS</Tab>
          <Tab>OFFEREDS</Tab>
          <Tab>POPULARS</Tab>
        </TabList>
        {loading && (
          <div className="flex justify-center items-center">
            <img src={loadingImg} className="w-48 h-48" />
          </div>
        )}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {desserts.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {pizzas.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {salads.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {soups.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {drinks.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {offereds.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 md:py-16 max-w-7xl mx-auto gap-10">
            {populars.map(menu => (
              <RecommendCard key={menu._id} menu={menu}></RecommendCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      <Footer></Footer>
    </div>
  );
};

export default Order;
