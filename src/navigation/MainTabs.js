import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
        height: 64,
        paddingBottom: 8,
        paddingTop: 8,
        },
        tabBarIcon: ({ color }) => {
        let icon = 'home';

        if (route.name === 'Home') icon = 'home';
        if (route.name === 'Live') icon = 'radio';
        if (route.name === 'Account') icon = 'account';

        return <Icon name={icon} size={24} color={color} />;
        },
    })}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Live" component={LiveViewerScreen} />
    <Tab.Screen name="Account" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;