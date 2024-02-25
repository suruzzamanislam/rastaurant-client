import Cover from '../../Components/Cover/Cover';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import bannerImg from '../../assets/menu/banner3.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import popularImg from '../../assets/menu/soup-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import drinkImg from '../../assets/menu/banner3.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';

import useMenu from '../../hooks/useMenu';
import OurMenuCard from './OurMenuCard';
import Footer from '../Shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const OurMenu = () => {
  const [menus] = useMenu();
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
        <title>Rastaurant || Our Menu</title>
      </Helmet>
      <Cover img={bannerImg} title={'OUR MENU'}></Cover>
      <div className="mt-10">
        <SectionTitle
          title="TODAY'S OFFER"
          subTitle="Don't miss"
        ></SectionTitle>
      </div>
      {/* offereds section */}
      <OurMenuCard item={offereds}></OurMenuCard>
      {/* pizzas */}
      <OurMenuCard
        item={pizzas}
        bannerImg={pizzaImg}
        title="PIZZA"
      ></OurMenuCard>
      {/* popular */}
      <OurMenuCard
        item={populars}
        bannerImg={popularImg}
        title="Popular"
      ></OurMenuCard>
      {/* dessert */}
      <OurMenuCard
        item={desserts}
        bannerImg={dessertImg}
        title="Dessert"
      ></OurMenuCard>
      {/* dirnk */}
      <OurMenuCard
        item={drinks}
        bannerImg={drinkImg}
        title="drink"
      ></OurMenuCard>
      {/* salad */}
      <OurMenuCard
        item={salads}
        bannerImg={saladImg}
        title="salad"
      ></OurMenuCard>
      {/* soup */}
      <OurMenuCard
        item={soups}
        bannerImg={popularImg}
        title="Soup"
      ></OurMenuCard>
      <Footer></Footer>
    </div>
  );
};

export default OurMenu;
