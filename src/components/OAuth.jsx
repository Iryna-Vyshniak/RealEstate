import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800"
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" /> Continue with
      Google
    </button>
  );
}
