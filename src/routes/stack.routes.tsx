import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import Splash from '../lotties/Splash';
import Home from '../screens/Home';
import Dossies from '../screens/Dossies';
import Cartelas from '../screens/Cartelas';
import AnaliseSelecionarImagem from '../screens/AnaliseSelecionarImagem';
import AnaliseArquivoPronto from '../screens/AnaliseArquivoPronto';
import AnaliseVisualizar from '../screens/AnaliseVisualizar';

type DynamicParamValue = string;

type DynamicRouteParams = {
  [key: string]: DynamicParamValue;
};

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Cartelas: undefined;
  Dossies: undefined;
  AnaliseSelecionarImagem: undefined;
  AnaliseArquivoPronto: DynamicRouteParams;
  AnaliseVisualizar: DynamicRouteParams;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cartelas" component={Cartelas} />
      <Stack.Screen name="Dossies" component={Dossies} />
      <Stack.Screen
        name="AnaliseSelecionarImagem"
        component={AnaliseSelecionarImagem}
      />
      <Stack.Screen
        name="AnaliseArquivoPronto"
        component={AnaliseArquivoPronto}
      />
      <Stack.Screen name="AnaliseVisualizar" component={AnaliseVisualizar} />
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
