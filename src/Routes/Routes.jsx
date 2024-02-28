import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';
import Order from '../Pages/Order/Order';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoutes from './PrivateRoutes';
import Booking from '../Pages/Booking/Booking';
import ContactUS from '../Pages/ContactUS/ContactUS';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/ourmenu',
        element: <OurMenu></OurMenu>,
      },
      {
        path: '/order/:category',
        element: <Order></Order>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/cart',
        element: (
          <PrivateRoutes>
            <Booking></Booking>
          </PrivateRoutes>
        ),
      },
      {
        path: '/contact',
        element: <ContactUS></ContactUS>,
      },
    ],
  },
]);
export default router;
