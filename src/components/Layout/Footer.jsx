import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-white border-t shadow-sm text-center dark:bg-neutral-600 mt-auto">
      <div className="flex justify-center items-center px-3 max-w-6xl">
        <div className="flex space-x-10 py-3">
          <a
            href="/"
            className="flex justify-center items-center h-6 w-6 rounded-full border border-white-700 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaFacebookF size="16px" fill="#4267B2" />
          </a>
          <a
            href="#!"
            className="flex justify-center items-center h-6 w-6 rounded-full border border-white-700 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaInstagram size="16px" fill="#E1306C" />
          </a>
          <a
            href="#!"
            className="flex justify-center items-center h-6 w-6 rounded-full border border-white-700 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaTwitter size="16px" fill="#1DA1F2" />
          </a>
          <a
            href="#!"
            className="flex justify-center items-center h-6 w-6 rounded-full border border-white-700 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <FaLinkedinIn size="16px" fill="#4267B2" />
          </a>
        </div>
      </div>
      <div className=" bg-neutral-100 p-4 text-center text-sm font-semibold text-gray-400">
        Created by
        <a
          className="m-1 cursor-pointer hover:text-red-700"
          href="https://github.com/Iryna-Vyshniak"
        >
          &copy; Iryna V-N
        </a>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};
