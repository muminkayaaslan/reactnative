import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import Home from '../screens/mainsc';
import Discovery from '../screens/discovery';
import Profile from '../screens/profile';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
function MainTabs() {
  const [drwVisible, setDrwVisible] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIndicatorStyle: { display: 'none' },
        tabBarIcon: ({ size, color }) => {
          if (route.name === 'Ana Sayfa') {
            return <Ionicons name={'home-outline'} size={size} color={color} />;
          } else if (route.name === 'Keşfet') {
            return (
              <Ionicons name={'search-outline'} size={size} color={color} />
            );
          } else if (route.name === 'Seçenekler') {
            return (
              <Ionicons name={'water-outline'} size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: '#C648DB',
        tabBarShowLabel: true,
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: { backgroundColor: 'rgb(10, 13, 99)' },
        headerTitleAlign: 'center',
        headerTitleStyle: { color: 'white' },
        headerStyle: { backgroundColor: 'rgb(10, 13, 99)' },
        animation: 'shift',
      })}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={Home}
        options={{
          title: 'Öneriler',
          tabBarLabel: 'Ana Sayfa',
        }}
      />
      <Tab.Screen name="Keşfet" component={Discovery} />
      <Tab.Screen
        name="Seçenekler"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  menuIcn: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainTabs;
