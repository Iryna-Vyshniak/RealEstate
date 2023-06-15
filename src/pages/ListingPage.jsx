import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { Spinner } from '../components/Spinner';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';
// map
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// icons
import {
  FaShare,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaParking,
  FaChair,
} from 'react-icons/fa';
import Contact from '../components/Contact';

const ListingPage = () => {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [contactLandloard, setContactLandloard] = useState(false);

  const params = useParams();
  const auth = getAuth();

  SwiperCore.use([Autoplay, Navigation, Pagination]);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, 'listings', params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setListing(docSnap.data());
        setIsLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="w-full">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: 'progressbar' }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full overflow-hidden h-[300px] lg:h-[520px]"
              style={{
                background: `url(${listing.imgUrls[idx]}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="fixed top-[12%] right-[3%] z-20 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);

          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <FaShare className="text-lg text-slate-500" />
      </div>
      {shareLinkCopied && (
        <p className="fixed z-20 top-[20%] right-[5%] p-2 font-semibold border-2 border-gray-400 rounded-md bg-white">
          Link Copied
        </p>
      )}
      <div className="flex flex-col md:flex-row m-4 lg:mx-auto p-4 max-w-6xl rounded-lg shadow-lg bg-white lg:space-x-5">
        <div className="w-full">
          <p className="text-2xl font-bold mb-3 text-blue-900">
            {listing.name} - $
            {listing.offer
              ? listing.discountedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' ? ' / month' : ''}
          </p>
          <p className="flex items-center mt-6 mb-3">
            <FaMapMarkerAlt className="text-green-700 mr-1" />
            {listing.address}
          </p>
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center sm:space-x-4 w-[75%]">
            <p className="bg-red-800 w-full max-w-[200px] rounded-md mb-2 sm:mb-0 p-1 text-white text-center font-semibold shadow-md">
              {listing.type === 'rent' ? 'Rent' : 'Sale'}
            </p>
            <div>
              {listing.offer && (
                <p className="bg-green-800 w-full max-w-[200px] rounded-md p-1 text-white text-center font-semibold shadow-md">
                  ${+listing.regularPrice - +listing.discountedPrice} discount
                </p>
              )}
            </div>
          </div>
          <p className="mt-3 mb-3">
            <span className="font-semibold">Description -</span>
            {listing.description}
          </p>
          <ul className="flex flex-col sm:flex-row justify-start items-start sm:items-center sm:space-x-2 mb-6 lg:space-x-10 text-sm font-semibold">
            <li className="flex items-center whitespace-nowrap">
              <FaBed className="text-lg mr-1" />
              {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : '1 Bed'}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaBath className="text-lg mr-1" />
              {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : '1 Bath'}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaParking className="text-lg mr-1" />
              {+listing.parking > 1 ? 'Parking Spot' : 'No Parking'}
            </li>
            <li className="flex items-center whitespace-nowrap">
              <FaChair className="text-lg mr-1" />
              {listing.furnished ? 'Furnished' : 'Not furnished'}
            </li>
          </ul>
          {listing.userRef !== auth.currentUser?.uid && !contactLandloard && (
            <div className="mt-6">
              <button
                onClick={() => setContactLandloard(true)}
                className="px-7 py-3 bg-blue-700 text-white font-medium text-sm text-center uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg w-full transition duration-200 ease-in-out"
              >
                Contact Landlord
              </button>
            </div>
          )}
          {contactLandloard && (
            <Contact userRef={listing.userRef} listing={listing} />
          )}
        </div>
        <div className="mt-6 md:mt-0 md:ml-2 w-full z-10 h-[200px] md:h-[400px] overflow-x-hidden">
          <MapContainer
            center={[listing.geolocation.lat, listing.geolocation.lng]}
            zoom={10}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[listing.geolocation.lat, listing.geolocation.lng]}
            >
              <Popup>{listing.address}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </main>
  );
};

export default ListingPage;
