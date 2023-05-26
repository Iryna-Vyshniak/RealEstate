import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

const ProfilePage = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    navigate('/');
  }

  function onChange(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-duration-200 ease-in-out"
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-duration-200 ease-in-out"
            />

            <div className="flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg">
              <p className="flex items-center ">
                Do you want to change your name?
                <span className="ml-1 text-red-700 hover:text-red-600 transition duration-200 ease-in-out cursor-pointer">
                  Edit
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-700 hover:text-blue-600 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
