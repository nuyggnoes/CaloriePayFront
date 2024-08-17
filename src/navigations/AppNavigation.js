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
import HomeScreen from '../screens/homeStack/HomeScreen';
import DetailScreen from '../screens/homeStack/DetailScreen';
import { useState, createContext, useContext } from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import InitialScreen from '../screens/auth/InitailScreen';
import SignUpPersonInfoScreen from '../screens/auth/signup/SignUpPersonalInfoScreen';
import SignUpPhysicalInfoScreen from '../screens/auth/signup/SignUpPhysicalInfoScreen';
import SignUpGoalInfoScreen from '../screens/auth/signup/SignUpGoalInfoScreen';
import SocialScreen from '../screens/socialStack/SocialScreen';
import MyDataScreen from '../screens/myDataStack/MyDataScreen';
import SeeMoreScreen from '../screens/seeMoreStack/SeeMoreScreen';
// import { AuthProvider } from '../context/authContext';
// bottom sheet
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const AuthContext = createContext();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const SocialStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Social" component={SocialScreen} />
    </Stack.Navigator>
  );
};

const MyDataStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyData" component={MyDataScreen} />
    </Stack.Navigator>
  );
};

const SeeMoreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SeeMore" component={SeeMoreScreen} />
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
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SocialTab"
        component={SocialStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ChartBarIcon name="chartBar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyDataTab"
        component={MyDataStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SeeMoreTab"
        component={SeeMoreStackNavigator}
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
      <Stack.Screen
        name="signUpPersonInfo"
        component={SignUpPersonInfoScreen}
      />
      <Stack.Screen
        name="signUpPhysicalInfo"
        component={SignUpPhysicalInfoScreen}
      />
      <Stack.Screen name="signUpGoalInfo" component={SignUpGoalInfoScreen} />
    </Stack.Navigator>
  );
};

export default function AppContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {/* <BottomSheetModalProvider> */}
      <NavigationContainer>
        {isLoggedIn ? <BottomTabNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
      {/* </BottomSheetModalProvider> */}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
