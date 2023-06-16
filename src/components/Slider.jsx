import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { Spinner } from './Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';
import { useNavigate } from 'react-router-dom';

export const Slider = () => {
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const navigate = useNavigate();

  useEffect(() => {
    // create a synchronous function because we want to use a weight because are gaining a promise from the database using git docs
    async function fetchListings() {
      const listingsRef = collection(db, 'listings');
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(7));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach(doc => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setIsLoading(false);
    }
    fetchListings();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  // this is a condition maybe happens when you create your website and give it to to your customer, they're going to get an error if there is no listing or if something happened and the database didn't response
  if (listings.length === 0) {
    return <></>;
  }

  return (
    <>
      {listings && (
        <>
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ type: 'progressbar' }}
            effect="fade"
            modules={[EffectFade]}
            autoplay={{ delay: 3000 }}
          >
            {listings.map(({ data, id }) => (
              <SwiperSlide
                key={id}
                onClick={() => navigate(`/category/${data.type}/${id}`)}
              >
                <div
                  style={{
                    background: `url(${data.imgUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className=" relative w-full h-[300px] overflow-hidden"
                ></div>
                <p className="absolute left-1 top-3  text-[#f1faee] font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                  {data.name}
                </p>
                <p className="absolute left-1 bottom-1  text-[#f1faee] font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
                  ${data.discountedPrice ?? data.regularPrice}
                  {data.type === 'rent' && ' / month'}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};
