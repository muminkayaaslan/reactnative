import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './src/components/tab';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Detail from './src/screens/detailScreen';
import { MovieProvider } from './src/constants/movieContext';
import { StackParamsList } from './src/utils/types';

const Stack = createNativeStackNavigator<StackParamsList>();

function App() {
  return (
    <MovieProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
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
            options={{ headerShown: false }}
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

export default App;
