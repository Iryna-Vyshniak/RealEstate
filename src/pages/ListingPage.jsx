import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { Spinner } from '../components/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper';
import 'swiper/css/bundle';

const ListingPage = () => {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <main className="xs:w-full  lg:w-[1200px] m-auto">
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
              className="relative w-full overflow-hidden h-[300px] lg:h-[520px]"
              style={{
                background: `url(${listing.imgUrls[idx]}) center no-repeat`,
                backgroundSize: 'cover',
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ListingPage;
