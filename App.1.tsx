import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './src/components/tab';
import Login from './src/screens/Login';
import Register from './src/screens/register';
import Detail from './src/screens/detailScreen';
import { MovieProvider } from './src/constants/movieContext';
import { Stack } from './App';

export function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen></Stack.Screen>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
              animation: 'fade',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MovieProvider>
  );
}
