import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LiveViewerScreen from '../screens/LiveViewerScreen';
import BroadcastScreen from '../screens/BroadcastScreen';

import { createUserProfileIfNotExists } from '../services/UserService';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/* ---------- AUTH STACK ---------- */
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

/* ---------- MAIN TABS ---------- */
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#6B21A8',
      tabBarInactiveTintColor: '#999',
      tabBarStyle: {
        height: 70,
        paddingBottom: 10,
        paddingTop: 8,
      },
      tabBarIcon: ({ color, size }) => {
        let iconName = 'home';
        if (route.name === 'Home') iconName = 'home';
        if (route.name === 'Live') iconName = 'radio';
        if (route.name === 'Account') iconName = 'account';
        return <Icon name={iconName} size={size ?? 24} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Live" component={LiveViewerScreen} />
    <Tab.Screen name="Account" component={ProfileScreen} />
  </Tab.Navigator>
);

/* ---------- ROOT NAV ---------- */
const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ✅ Auth decide entrada (INSTANTÁNEO)
        setIsLoggedIn(true);

        // 🔥 Fire-and-forget → NO await
        createUserProfileIfNotExists(user);
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="LiveViewer" component={LiveViewerScreen} />
            <Stack.Screen name="Broadcast" component={BroadcastScreen} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;