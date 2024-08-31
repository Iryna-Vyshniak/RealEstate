import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Spinner } from '../components/Spinner';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreateListingPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  // eslint-disable-next-line no-unused-vars
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const user = auth.currentUser;

  if (!user) {
    throw new Error('User is not authenticated');
  }

  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: '1',
    bathrooms: '1',
    parking: false,
    furnished: false,
    address: '',
    description: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData;

  function onChange(e) {
    let boolean = null;
    if (e.target.value === 'true') {
      boolean = true;
    }
    if (e.target.value === 'false') {
      boolean = false;
    }
    //Files
    if (e.target.files) {
      setFormData(prevState => ({
        ...prevState,
        images: e.target.files,
      }));
    }
    // Text/Number/Boolean
    if (!e.target.files) {
      setFormData(prevState => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    if (+discountedPrice >= +regularPrice) {
      setIsLoading(false);
      toast.error('Discounted price needs to be less than regular price');
      return;
    }
    if (images.length > 6) {
      setIsLoading(false);
      toast.error('Maximum 6 images are allowed');
      return;
    }

    // Check file size before downloading
    if ([...images].some(image => image.size > 5 * 1024 * 1024)) {
      setIsLoading(false);
      return toast.error('Each image must be less than 5MB');
    }

    // get location
    let geolocation = {};

    if (geolocationEnabled) {
      const response = await fetch(
        `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(
          address
        )}.json?key=gvLwIs1WuVuZqXnIAnHlczopWpN9ELLa`
      );

      const { results } = await response.json();

      geolocation.lat = results[0]?.position.lat ?? 0;
      geolocation.lng = results[0]?.position.lon ?? 0;

      if (!results.length) {
        setIsLoading(false);
        return toast.error('Please enter a correct address');
      }
    } else {
      geolocation.lat = latitude;
      geolocation.lng = longitude;
    }

    //function is going to help us to upload each image one
    async function storeImage(image) {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const filename = `${user.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          snapshot => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          error => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              resolve(downloadURL);
            });
          }
        );
      });
    }

    // get the each image and we just use this function to store it
    const imgUrls = await Promise.all(
      [...images].map(image => storeImage(image))
    ).catch(error => {
      setIsLoading(false);
      console.log(error);
      return toast.error('Images not uploaded');
    });
    // get the URL of image that's inside that is inside the storage of firebase
    const formDataCopy = {
      ...formData,
      imgUrls,
      geolocation,
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid,
    };
    delete formDataCopy.images;
    delete formDataCopy.latitude;
    delete formDataCopy.longitude;
    !formDataCopy.offer && delete formDataCopy.discountedPrice;
    const docRef = await addDoc(collection(db, 'listings'), formDataCopy);
    setIsLoading(false);
    toast.success('Listing created successfully');
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-md px-2 mx-auto ">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
      <form onSubmit={onSubmit}>
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex ">
          <button
            id="type"
            value="sale"
            onClick={onChange}
            type="button"
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === 'rent'
                ? 'bg-white text-black'
                : 'bg-slate-400 text-white'
            }`}
          >
            Sell
          </button>
          <button
            id="type"
            value="rent"
            onClick={onChange}
            type="button"
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              type === 'sale'
                ? 'bg-white text-black'
                : 'bg-slate-400 text-white'
            }`}
          >
            Rent
          </button>
        </div>
        <p className="text-lg font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          maxLength="37"
          minLength="10"
          required
          onChange={onChange}
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="flex space-x-6 mb-6">
          <div>
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              min="1"
              max="50"
              required
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
            />
          </div>
          <div>
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              min="1"
              max="50"
              required
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>
        <p className="text-lg mt-6 font-semibold">Parking spot</p>
        <div className="flex ">
          <button
            id="parking"
            value={true}
            onClick={onChange}
            type="button"
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              !parking ? 'bg-white text-black' : 'bg-slate-400 text-white'
            }`}
          >
            Yes
          </button>
          <button
            id="parking"
            value={false}
            onClick={onChange}
            type="button"
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              parking ? 'bg-white text-black' : 'bg-slate-400 text-white'
            }`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex ">
          <button
            id="furnished"
            value={true}
            onClick={onChange}
            type="button"
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              !furnished ? 'bg-white text-black' : 'bg-slate-400 text-white'
            }`}
          >
            Yes
          </button>
          <button
            id="furnished"
            value={false}
            onClick={onChange}
            type="button"
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              furnished ? 'bg-white text-black' : 'bg-slate-400 text-white'
            }`}
          >
            No
          </button>
        </div>
        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          placeholder="Address"
          required
          onChange={onChange}
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6"
        />
        {!geolocationEnabled && (
          <div className="flex mb-6 space-x-6">
            <div>
              <p className="text-lg font-semibold">Latitude</p>
              <input
                type="number"
                id="latitude"
                value={latitude}
                onChange={onChange}
                required
                min="-90"
                max="90"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white  focus:text-gray-800 focus:border-slate-600 text-center"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Longitude</p>
              <input
                type="number"
                id="longitude"
                value={longitude}
                onChange={onChange}
                required
                min="-180"
                max="180"
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white  focus:text-gray-800 focus:border-slate-600 text-center"
              />
            </div>
          </div>
        )}
        <p className="text-lg font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          placeholder="Description"
          required
          onChange={onChange}
          className="w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            id="offer"
            value={true}
            onClick={onChange}
            type="button"
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              !offer ? 'bg-white text-black' : 'bg-slate-400 text-white'
            }`}
          >
            Yes
          </button>
          <button
            id="offer"
            value={false}
            onClick={onChange}
            type="button"
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${
              offer ? 'bg-white text-black' : 'bg-slate-400 text-white'
            }`}
          >
            No
          </button>
        </div>
        <div className="flex items-center mb-6">
          <div>
            <p className="text-lg mt-6 font-semibold">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                min="50"
                max="400000000"
                required
                onChange={onChange}
                className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
              />
              {type === 'rent' && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex items-center mb-6">
            <div>
              <p className="text-lg mt-6 font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  min="50"
                  max="400000000"
                  required={offer}
                  onChange={onChange}
                  className="w-full px-4 py-2 text-xl text-center text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-800 focus:bg-white focus:border-slate-600"
                />
                {offer && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-700 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out"
        >
          Create listing
        </button>
      </form>
    </main>
  );
};

export default CreateListingPage;
