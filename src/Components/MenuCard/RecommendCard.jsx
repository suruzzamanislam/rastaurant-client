import PropTypes from 'prop-types';
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiousSecure from '../../hooks/useAxiousSecure';

const RecommendCard = ({ menu }) => {
  const { user } = useContext(authContext);
  const { name, recipe, image, _id, price } = menu;
  const navigate = useNavigate();
  const location = useLocation();
  const axiousSecure = useAxiousSecure();

  const handleAddToCart = () => {
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiousSecure.post('/carts', cartItem).then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'added to your cart',
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    } else {
      Swal.fire({
        title: 'You are not logged in',
        text: 'Plsese log in to add to the cart',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Log In',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className="text-center bg-[#F3F3F3] pb-4">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="px-10 py-2 mt-3">
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="text-[#151515] font-sans">{recipe.slice(0, 56)}...</p>
      </div>
      <button
        onClick={() => handleAddToCart(menu)}
        className="btn  border-0 border-b-4 bg-transparent border-red-500 hover:bg-transparent hover:border-2 font-semibold text-[#BB8506] uppercase hover:border-red-500"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default RecommendCard;
RecommendCard.propTypes = {
  menu: PropTypes.object,
};
