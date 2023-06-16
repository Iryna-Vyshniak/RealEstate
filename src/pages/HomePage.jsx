import { useEffect, useState } from 'react';
import { Slider } from '../components/Slider';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import { ListingsItem } from '../components/ListingsItem';

const HomePage = () => {
  // offers
  const [offerListings, setOfferListings] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, 'listings');
        // create the query
        const q = query(
          listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach(doc => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  // places for rent
  const [rentListings, setRentListings] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, 'listings');
        // create the query
        const q = query(
          listingsRef,
          where('type', '==', 'rent'),
          orderBy('timestamp', 'desc'),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach(doc => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setRentListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  // places for sale
  const [saleListings, setSaleListings] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        // get reference
        const listingsRef = collection(db, 'listings');
        // create the query
        const q = query(
          listingsRef,
          where('type', '==', 'sale'),
          orderBy('timestamp', 'desc'),
          limit(4)
        );
        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach(doc => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings();
  }, []);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // // this is a condition maybe happens when you create your website and give it to to your customer, they're going to get an error if there is no listing or if something happened and the database didn't response
  // if (listings.length === 0) {
  //   return <></>;
  // }

  return (
    <div>
      <Slider />
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Recent offers</h2>
            <Link to="/offers">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                Show more offers
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offerListings.map(({ id, data }) => (
                <ListingsItem key={id} listing={data} id={id} />
              ))}
            </ul>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Places for rent
            </h2>
            <Link to="/category/rent">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                Show more places for rent
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rentListings.map(({ id, data }) => (
                <ListingsItem key={id} listing={data} id={id} />
              ))}
            </ul>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">
              Places for sale
            </h2>
            <Link to="/category/sale">
              <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                Show more places for sale
              </p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {saleListings.map(({ id, data }) => (
                <ListingsItem key={id} listing={data} id={id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
