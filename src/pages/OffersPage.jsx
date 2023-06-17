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

const OffersPage = () => {
  const [listings, setListings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, 'listings');
        const q = query(
          listingRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(8)
        );
        const querySnap = await getDocs(q);
        // find last visible card in list
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);
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
  }, []);

  // load more
  async function onFetchMoreListings() {
    try {
      const listingRef = collection(db, 'listings');
      const q = query(
        listingRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'),
        // to start from the last fetch listing
        startAfter(lastFetchedListing),
        limit(4)
      );
      const querySnap = await getDocs(q);
      // find last visible card in list
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);
      const listings = [];
      querySnap.forEach(doc => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(prevState => [...prevState, ...listings]);

      if (querySnap.docs.length < 4) {
        setLastFetchedListing(null);
      }
    } catch (error) {
      toast.error('Could not fetch listing');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-3">
      <h1 className="mt-6 mb-6 text-3xl text-center font-bold">Offers</h1>
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
          {lastFetchedListing && (
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

export default OffersPage;
