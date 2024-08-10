import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  EllipsisHorizontalIcon,
} from 'react-native-heroicons/outline';
import { globalStyles } from '../styles/globalStyles';
// //////////////////////////////////////////////////////////////////
import TestScreen1Page from '../screens/TestScreen1';
import TestScreen2Page from '../screens/TestScreen2';
import TestScreen3Page from '../screens/TestScreen3';
import TestScreen4Page from '../screens/TestScreen4';
import DetailPage from '../screens/Detail';
import { useState } from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import InitialScreen from '../screens/auth/InitailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="test1" component={TestScreen1Page} />
      <Stack.Screen name="test2" component={TestScreen2Page} />
      <Stack.Screen name="test3" component={TestScreen3Page} />
      <Stack.Screen name="test4" component={TestScreen4Page} />
      <Stack.Screen name="detail" component={DetailPage} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalStyles.mainColor,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 90,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="main"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="test2"
        component={TestScreen2Page}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ChartBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="test3"
        component={TestScreen2Page}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="test4"
        component={TestScreen2Page}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EllipsisHorizontalIcon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="initial" component={InitialScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default function AppContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
