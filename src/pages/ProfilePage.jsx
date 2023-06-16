import { getAuth, updateProfile } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import { ListingsItem } from '../components/ListingsItem';

const ProfilePage = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [changeDetails, setChangeDetails] = useState();
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  function changeData() {
    setChangeDetails(prevState => !prevState);
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          name, // name: name (from formData)
        });
      }
      toast.success('Profile update details');
    } catch (error) {
      toast.error('Couldn`t update profile details');
    }
  }

  useEffect(() => {
    // when the page is loaded, to call this function as soon as possible
    async function fetchUserListings() {
      const listingRef = collection(db, 'listings');
      // get the listings that had that is that the person is created, not the other, userRef inside listings and ordered by descending - the new one comes first
      const q = query(
        listingRef,
        where('userRef', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc')
      );
      // get docs from the documents
      const querySnap = await getDocs(q);
      let listings = [];

      querySnap.forEach(doc => listings.push({ id: doc.id, data: doc.data() }));
      setListings(listings);
      setIsLoading(false);
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);

  // delete listings
  async function onDelete(listingID) {
    if (window.confirm(`Are you sure you want to delete?`)) {
      await deleteDoc(doc(db, 'listings', listingID));
      const updatedListings = listings.filter(
        listing => listing.id !== listingID
      );
      setListings(updatedListings);
      toast.success('Successfully deleted listings');
    }
  }

  // edit listings
  function onEdit(listingID) {
    navigate(`/edit-listing/${listingID}`);
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
              disabled={!changeDetails}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-duration-200 ease-in-out ${
                changeDetails && `bg-red-600 focus:bg-red-600 text-white`
              }
              }`}
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition-duration-200 ease-in-out"
            />

            <div className="flex justify-between mb-6 whitespace-nowrap text-sm sm:text-lg ">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                  onClick={() => {
                    changeDetails && onSubmit();
                    changeData();
                  }}
                  className="ml-1 text-red-700 hover:text-red-600 transition duration-200 ease-in-out cursor-pointer"
                >
                  {changeDetails ? 'Apply change' : 'Edit'}
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
          <button
            type="submit"
            className="w-full bg-blue-700 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2" />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>

      <div className="max-w-6xl px-3 mt-6 mx-auto ">
        {!isLoading && listings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold mb-6">
              My Listings
            </h2>
            <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 mb-6">
              {listings.map(listing => (
                <ListingsItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdite={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
