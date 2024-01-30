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
import MelhoresCoresSelecionarImagem from '../screens/MelhoresCoresSelecionarImagem';
import MelhoresCoresArquivoPronto from '../screens/MelhoresCoresArquivoPronto';
import MelhoresCoresVisualizar from '../screens/MelhoresCoresVisualizar';

type DynamicParamValue = string;

type DynamicRouteParams = {
  [key: string]: DynamicParamValue;
};

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  AnaliseSelecionarImagem: undefined;
  AnaliseArquivoPronto: DynamicRouteParams;
  AnaliseVisualizar: DynamicRouteParams;
  MelhoresCoresSelecionarImagem: undefined;
  MelhoresCoresArquivoPronto: DynamicRouteParams;
  MelhoresCoresVisualizar: DynamicRouteParams;
  Cartelas: undefined;
  Dossies: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="AnaliseSelecionarImagem"
        component={AnaliseSelecionarImagem}
      />
      <Stack.Screen
        name="AnaliseArquivoPronto"
        component={AnaliseArquivoPronto}
      />
      <Stack.Screen name="AnaliseVisualizar" component={AnaliseVisualizar} />
      <Stack.Screen
        name="MelhoresCoresSelecionarImagem"
        component={MelhoresCoresSelecionarImagem}
      />
      <Stack.Screen
        name="MelhoresCoresArquivoPronto"
        component={MelhoresCoresArquivoPronto}
      />
      <Stack.Screen
        name="MelhoresCoresVisualizar"
        component={MelhoresCoresVisualizar}
      />
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
