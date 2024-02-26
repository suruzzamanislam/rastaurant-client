import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BistroBoss from '../BistroBoss/BistroBoss';
import Call from '../Call/Call';
import Features from '../Features/Features';
import Menu from '../Menu/Menu';
import OrderOnline from '../OrderOnline/OrderOnline';
import Recommend from '../Recommend/Recommend';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Rastaurant</title>
      </Helmet>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <BistroBoss></BistroBoss>
      <Menu></Menu>
      <Call></Call>
      <Recommend></Recommend>
      <Features></Features>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
