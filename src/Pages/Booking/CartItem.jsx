import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CartItem = ({ item }) => {
  const { image, name, price } = item;

  return (
    <div className="flex justify-between items-center bg-base-300 p-4">
      <div className="w-40">
        <img className="w-full" src={image} alt="" />
      </div>
      <p className="text-xl font-medium text-gray-500 ">{name}</p>
      <p className="text-xl font-medium text-gray-500 ">$ {price}</p>
      <button className="bg-red-500 p-3 text-3xl text-white rounded-xl">
        <RiDeleteBin6Line></RiDeleteBin6Line>
      </button>
    </div>
  );
};

export default CartItem;
CartItem.propTypes = {
  item: PropTypes.object,
};
