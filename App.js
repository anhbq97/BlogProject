/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useMemo, useReducer} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home.js';
import ProfileScreen from './src/screens/Profile.js';
import LoginScreen from './src/screens/Login';
import MainScreen from './src/screens/Main';
import SplashScreen from './src/screens/Splash.js';
import { LoggedOut } from './src/layout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reducer } from './src/auth/reducer';

// const authContext = useMemo(
//   () => ({
//     signIn: async (data) => {
//       // In a production app, we need to send some data (usually username, password) to server and get a token
//       // We will also need to handle errors if sign in failed
//       // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
//       // In the example, we'll use a dummy token

//       dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//     },
//     signOut: () => dispatch({ type: 'SIGN_OUT' }),
//     signUp: async (data) => {
//       // In a production app, we need to send user data to server and get a token
//       // We will also need to handle errors if sign up failed
//       // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
//       // In the example, we'll use a dummy token

//       dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//     },
//   }),
//   []
// );

const Stack = createNativeStackNavigator();
const data = {
  type: 'SIGN_IN',
  userToken: null,
};
export const DemoContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, data);
  console.debug(state);
  // const _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getAllKeys();
  //     if (value !== null) {
  //       // We have data!!
  //       console.debug(value, 'ih');
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };
  // _retrieveData();
 
  return (
    <DemoContext.Provider value={{state, dispatch}}>
      <NavigationContainer>
        {state.userToken == null ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                title: 'Trang chủ',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Đăng nhập',
              }}
            />
          </Stack.Navigator>
          // No token found, user isn't signed in
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </DemoContext.Provider>
  );
};
export default App;

