import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home/Home';
import OurMenu from '../Pages/OurMenu/OurMenu';

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
    ],
  },
]);
export default router;
