import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDKtajGUdjVpn_Zf8Twq2D8Gyndpu51r4o',
  authDomain: 'realestate-b4de7.firebaseapp.com',
  projectId: 'realestate-b4de7',
  storageBucket: 'realestate-b4de7.appspot.com',
  messagingSenderId: '829677483220',
  appId: '1:829677483220:web:0cb9034dac811f7957b741',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
