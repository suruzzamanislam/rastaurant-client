import Banner from '../Banner/Banner';
import BistroBoss from '../BistroBoss/BistroBoss';
import Call from '../Call/Call';
import Menu from '../Menu/Menu';
import OrderOnline from '../OrderOnline/OrderOnline';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <BistroBoss></BistroBoss>
      <Menu></Menu>
      <Call></Call>
    </div>
  );
};

export default Home;
