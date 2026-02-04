import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1Pv92SfxAjT_IrnzWkH8BAr2HjVSnaN0",
  authDomain: "liveshop-e5bd3.firebaseapp.com",
  projectId: "liveshop-e5bd3",
  storageBucket: "liveshop-e5bd3.firebasestorage.app",
  messagingSenderId: "402056469248",
  appId: "1:402056469248:web:191ed03a8a181a583171e5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});