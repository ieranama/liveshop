import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export const createUserProfileIfNotExists = async (user) => {
  const ref = doc(db, 'users', user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      email: user.email,
      role: 'buyer',
      createdAt: serverTimestamp(),
    });
  }
};

export const getUserProfile = async (uid) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
};

export const updateUserRole = async (uid, role) => {
  const ref = doc(db, 'users', uid);
  await updateDoc(ref, { role });
};