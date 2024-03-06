import { useContext, useEffect, useState } from 'react';
import useAxiousSecure from './useAxiousSecure';
import { authContext } from '../providers/AuthProvider';

const useCart = () => {
  const { user } = useContext(authContext);
  const [cart, setCart] = useState([]);

  const axiousSecure = useAxiousSecure();
  useEffect(() => {
    axiousSecure.get(`/carts?email=${user?.email}`).then(res => {
      setCart(res.data);
    });
  }, [user]);
  console.log(cart);
  return [cart, setCart];
};

export default useCart;
