import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/others/authentication2.png';
import { useContext, useState } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import Swal from 'sweetalert2';

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { createUser } = useContext(authContext);
  const handleSubmit = () => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    createUser(email, password)
      .then(result => {
        if (result.user) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sign Up Success',
            showConfirmButton: false,
            timer: 1000,
          });
        }
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {
            console.log(error);
          });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col md:flex-row pt-24 items-center max-w-7xl mx-auto p-2">
      <form
        onSubmit={handleSubmit}
        className="md:px-14 px-4 py-10 md:w-1/2 w-full border border-info shadow-md shadow-info rounded-md space-y-4"
      >
        <h1 className="text-center font-medium text-3xl">Sign Up</h1>
        <div>
          <label className="block text-xl font-medium pb-1" htmlFor="name">
            Name
          </label>
          <input
            className="input input-bordered input-info w-full  focus:outline-0"
            type="name"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
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
          All Ready Have An Account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold underline">
            Log In
          </Link>
        </p>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="md:w-1/2">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
