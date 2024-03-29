import { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/others/authentication.gif';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from 'react-simple-captcha';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../providers/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const captchaRef = useRef();
  const { LoginUser } = useContext(authContext);
  const [error, setError] = useState(null);

  const [captcha, setCaptcha] = useState('');
  const handleLogin = () => {
    event.preventDefault();
    if (validateCaptcha(captchaRef.current.value)) {
      setCaptcha('');
    } else {
      setCaptcha('wrong captcha! plese enter right captcha');
      return;
    }
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    LoginUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="flex flex-col md:flex-row pt-24 items-center max-w-7xl mx-auto p-2">
      <div className="">
        <img className="w-full" src={img} alt="" />
      </div>
      <form
        onSubmit={handleLogin}
        className="md:px-14 px-4 py-10 md:w-1/2 w-full border border-accent shadow-md shadow-accent rounded-md space-y-4"
      >
        <h1 className="text-center font-medium text-3xl">Login</h1>
        <div>
          <label className="block text-xl font-medium pb-1" htmlFor="email">
            Email
          </label>
          <input
            className="input input-bordered input-info w-full  focus:outline-0"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="block text-xl font-medium pb-1" htmlFor="password">
            Password
          </label>
          <input
            className="input input-bordered input-info w-full  focus:outline-0"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="space-y-3">
          <div>
            <LoadCanvasTemplate />
          </div>
          <input
            className="input input-bordered input-info w-full  focus:outline-0"
            type="text"
            ref={captchaRef}
            placeholder="Enter Code"
          />{' '}
          <p className="text-red-500">{captcha}</p>
        </div>
        <div>
          <input
            className="btn btn-block btn-success font-semibold "
            type="submit"
            value="Sing In"
          />
        </div>
        <div className="mt-6">
          <p className="text-center text-xl font-medium">Or Sign In with</p>
          <div className="flex justify-center gap-4 mt-2">
            <div className=" border p-1 rounded-full border-secondary hover:border-success cursor-pointer transition-all">
              <FaGoogle className="text-2xl"></FaGoogle>
            </div>
            <div className=" border p-1 rounded-full border-secondary hover:border-success cursor-pointer transition-all">
              <FaFacebook className="text-2xl"></FaFacebook>
            </div>
            <div className=" border p-1 rounded-full border-secondary hover:border-success cursor-pointer transition-all">
              <FaGithub className="text-2xl"></FaGithub>
            </div>
          </div>
        </div>
        <p className="text-center mt-3 font-medium">
          Do not have accout?{' '}
          <Link to="/signup" className="text-blue-600 font-semibold underline">
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
