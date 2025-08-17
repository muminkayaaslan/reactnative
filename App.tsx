import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './src/components/tab';
import Login from './src/screens/Login';
import Register from './src/screens/register';
import Detail from './src/screens/detailScreen';
import { MovieProvider } from './src/constants/movieContext';
import { StackParamsList } from './src/utils/types';
import SplashScreen from './src/screens/splash';
import ProfileSettings from './src/screens/profileSettings';
const Stack = createNativeStackNavigator<StackParamsList>();

function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
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
            options={{ headerShown: false, animation: 'slide_from_bottom' }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        </Stack.Navigator>
      </NavigationContainer>
    </MovieProvider>
  );
}

export default App;
