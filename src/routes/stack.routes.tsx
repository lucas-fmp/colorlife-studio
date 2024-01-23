import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import Splash from '../lotties/Splash';
import Home from '../screens/Home';
import Dossies from '../screens/Dossies';
import Cartelas from '../screens/Cartelas';

export type ScreenNames = ['Splash', 'Home', 'Cartelas', 'Dossies'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cartelas" component={Cartelas} />
      <Stack.Screen name="Dossies" component={Dossies} />
    </Stack.Navigator>
  );
}

function StackRoutes() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
export default StackRoutes;
