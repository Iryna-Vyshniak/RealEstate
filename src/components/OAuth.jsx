import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const navigate = useNavigate();

  async function onGoogleClick() {
    try {
      // add user to autentification
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // add user to firestore database
      // check for the user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef); // check all documents

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate('/');
    } catch (error) {
      toast.error('Couldn`t autorize with Google');
    }
  }

  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-600 transition duration-200 ease-in-out hover:shadow-lg active:bg-red-800"
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" /> Continue with
      Google
    </button>
  );
}
