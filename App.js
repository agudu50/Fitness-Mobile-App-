import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import WorkoutListScreen from './screens/WorkoutListScreen';
import WorkoutDetailsScreen from './screens/WorkoutDetailsScreen';
import CalendarScreen from './screens/CalendarScreen';
import StatsScreen from './screens/StatsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
          />
          <Stack.Screen
            name="WorkoutList"
            component={WorkoutListScreen}
          />
          <Stack.Screen
            name="WorkoutDetails"
            component={WorkoutDetailsScreen}
          />
          <Stack.Screen
            name="Calendar"
            component={CalendarScreen}
          />
          <Stack.Screen
            name="Stats"
            component={StatsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
