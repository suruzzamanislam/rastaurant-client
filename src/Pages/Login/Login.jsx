import { useEffect, useState } from 'react';
import img from '../../assets/others/authentication.gif';
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [captcha, setCaptcha] = useState('');
  console.log(captcha);
  const validateCaptcha = () => {
    console.log(event.target.value);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="flex flex-col md:flex-row pt-24 items-center max-w-7xl mx-auto p-2">
      <div className="md:w-1/2">
        <img className="w-full" src={img} alt="" />
      </div>
      <form className="md:px-14 px-4 py-10 md:w-1/2 w-full border border-orange-400 rounded-md space-y-4">
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
          />
        </div>

        <div className="space-y-3">
          <div>
            <LoadCanvasTemplate />
          </div>
          <input
            className="input input-bordered input-info w-full  focus:outline-0"
            type="email"
            name="email"
            id="email"
            onChange={validateCaptcha}
          />{' '}
        </div>
        <div>
          <input
            className="btn btn-block btn-success font-semibold "
            type="submit"
            value="Sing In"
            disabled={disabled}
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
      </form>
    </div>
  );
};

export default Login;
