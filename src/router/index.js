import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Me, Home, Activity, Discover, Teacher } from '@views';

function BottomNavigator () {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'explore') {
              iconName = focused ? 'eye' : 'ios-eye-outline';
            } else if (route.name === 'Notice') {
              iconName = focused ? `notifications` : 'notifications-circle';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5B4B8A',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen component={Home} name="Home" options={{ headerShown: false }} />
        <Tab.Screen component={Discover} name="explore" options={{ headerShown: false }} />
        <Tab.Screen component={Activity} name="Notice" options={{ headerShown: false }} />
        <Tab.Screen component={Me} name="Profile" options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}


export default function MainNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home Page" component={BottomNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Teacher" component={Teacher}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
