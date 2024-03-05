import Cover from '../../Components/Cover/Cover';
import Menu from '../Shared/Menu/Menu';
import cartImg from '../../../public/cart.jpg';
import useCart from '../../hooks/useCart';
import CartItem from './CartItem';
import Footer from '../Shared/Footer/Footer';

const Booking = () => {
  const [cart] = useCart();

  return (
    <>
      <div>
        <Menu></Menu>
        <Cover img={cartImg} title="My Cart"></Cover>
        <div className="max-w-6xl mx-auto my-4 md:my-10 space-y-6">
          {cart.map(item => (
            <CartItem key={item._id} item={item}></CartItem>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Booking;
