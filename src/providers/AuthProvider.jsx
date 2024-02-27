import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLaoding] = useState(true);

  const createUser = (email, password) => {
    setLaoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUser = (email, password) => {
    setLaoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user:', currentUser);
      setLaoding(false);
    });
    return () => {
      return unsubcribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    LoginUser,
    LogOutUser,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
