import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const Contact = ({ userRef, listing }) => {
  const [landloard, setLandloard] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function getLandloard() {
      const docRef = doc(db, 'users', userRef);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLandloard(docSnap.data());
      } else {
        toast.error('Could not get landloard data');
      }
    }
    getLandloard();
  }, [userRef]);

  const onChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      {landloard !== null && (
        <div className="flex flex-col w-full">
          <p className="font-semibold text-slate-500">
            Contact {landloard.name} for the {listing.name.toLowerCase()}
          </p>
          <div className="mt-3 mb-6">
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 "
            ></textarea>
          </div>
          <a
            href={`mailto:${landloard.email}?Subject=${listing.name}&body=${message}`}
          >
            <button
              type="button"
              className="mb-6 px-7 py-3 bg-blue-700 text-white font-medium text-sm text-center uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg w-full transition duration-200 ease-in-out"
            >
              Send Message
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Contact;

Contact.propTypes = {
  listing: PropTypes.shape({
    address: PropTypes.string,
    bathrooms: PropTypes.string,
    bedrooms: PropTypes.string,
    description: PropTypes.string,
    discountedPrice: PropTypes.string,
    furnished: PropTypes.bool,
    geolocation: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    imgUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    offer: PropTypes.bool,
    parking: PropTypes.bool,
    regularPrice: PropTypes.string,
    timestamp: PropTypes.objectOf(PropTypes.number),
    type: PropTypes.string,
    userRef: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  userRef: PropTypes.string.isRequired,
};
