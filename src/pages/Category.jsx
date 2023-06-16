import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { Spinner } from '../components/Spinner';
import { ListingsItem } from '../components/ListingsItem';
import { useParams } from 'react-router-dom';

const Category = () => {
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchListing, setLastFetchListing] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, 'listings');
        const q = query(
          listingRef,
          where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc'),
          limit(8)
        );
        const querySnap = await getDocs(q);
        // find last visible card in list
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach(doc => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setIsLoading(false);
      } catch (error) {
        toast.error('Could not fetch listing');
      }
    }
    fetchListings();
  }, [params.categoryName]);

  // load more
  async function onFetchMoreListings() {
    try {
      const listingRef = collection(db, 'listings');
      const q = query(
        listingRef,
        where('type', '==', params.categoryName),
        orderBy('timestamp', 'desc'),
        // to start from the last fetch listing
        startAfter(lastFetchListing),
        limit(4)
      );
      const querySnap = await getDocs(q);
      // find last visible card in list
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach(doc => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(prevState => [...prevState, ...listings]);
      setIsLoading(false);
    } catch (error) {
      toast.error('Could not fetch listing');
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="mt-6 mb-6 text-3xl text-center font-bold">
        {params.categoryName === 'rent' ? 'Places for Rent' : 'Places for Sale'}
      </h1>
      {isLoading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {listings.map(listing => (
                <ListingsItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                />
              ))}
            </ul>
          </main>
          {lastFetchListing && (
            <div className="flex justify-center items-center ">
              <button
                onClick={onFetchMoreListings}
                className="bg-pink-50 px-3 py-1.5 text-gray-700 border border-gray-300 mb-6 mt-6 hover:border-slate-600 hover:bg-blue-50 rounded transition duration-200 ease-in-out"
              >
                Load more
              </button>
            </div>
          )}
        </>
      ) : (
        <p>There are no current offers</p>
      )}
    </div>
  );
};

export default Category;
