import { useEffect } from 'react';
import { View } from 'react-native';
import { signInAnonymously } from 'firebase/auth';
import { auth } from './firebase';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  useEffect(() => {
    signInAnonymously(auth)
      .then(() => console.log('Auth OK'))
      .catch(console.error);
  }, []);

  return <AppNavigator />;
}