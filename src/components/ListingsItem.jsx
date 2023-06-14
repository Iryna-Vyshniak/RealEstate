import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';
import PropTypes from 'prop-types';
dayjs.extend(relativeTime);
dayjs.locale('en');

// icons
import { MdLocationOn } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { MdCreate } from 'react-icons/md';

export const ListingsItem = ({ listing, id, onDelete, onEdite }) => {
  const timestamp = listing.timestamp?.toDate();
  const formattedTimestamp = timestamp ? dayjs(timestamp).fromNow() : '';

  return (
    <li className="relative bg-white flex flex-col justify-between items-center m-[10px] shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-200 ease-in-out">
      <Link className="contents" to={`/category/${listing.type}/${id}`}>
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in-out rounded-md"
          loading="lazy"
          src={listing.imgUrls[0]}
          alt={listing.name}
        />
        {formattedTimestamp && (
          <div className="absolute top-2 left-2 bg-[#3377fc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg">
            {formattedTimestamp}
          </div>
        )}
        <div className="w-full p-[10px]">
          <div className="flex items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate">{listing.name}</p>
          <p className="mt-2 font-semibold text-[#40559c]">
            $
            {listing.offer
              ? listing.discountedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' && ' / month'}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `1 Bed`}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Baths`
                  : `1 Bath`}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-700"
          onClick={() => onDelete(listing.id)}
        />
      )}
      {onEdite && (
        <MdCreate
          className="absolute bottom-2 right-8 h-4 cursor-pointer  text-blue-700"
          onClick={() => onEdite(listing.id)}
        />
      )}
    </li>
  );
};

ListingsItem.propTypes = {
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
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onEdite: PropTypes.func,
};
