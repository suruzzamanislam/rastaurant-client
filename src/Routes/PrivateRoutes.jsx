import PropTypes from 'prop-types';

import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import loadingImg from '../../public/loading.gif';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-full">
        <img src={loadingImg} className="w-48 h-48" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
