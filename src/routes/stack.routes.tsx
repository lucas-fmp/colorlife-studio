import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import Splash from "../lotties/Splash";
import Home from "../screens/Home";
import Dossies from "../screens/Dossies";
import Cartelas from "../screens/Cartelas";
import SelecionarImagem from "../screens/SelecionarImagem";
import ArquivoPronto from "../screens/ArquivoPronto";
import AnaliseVisualizar from "../screens/AnaliseVisualizar";
import MelhoresCoresVisualizar from "../screens/MelhoresCoresVisualizar";
import Historico from "../screens/Historico";

type DynamicParamValue = string;

type DynamicRouteParams = {
  [key: string]: DynamicParamValue;
};

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  SelecionarImagem: undefined;
  ArquivoPronto: DynamicRouteParams;
  AnaliseVisualizar: DynamicRouteParams;
  MelhoresCoresVisualizar: DynamicRouteParams;
  Historico: undefined;
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
      <Stack.Screen name="SelecionarImagem" component={SelecionarImagem} />
      <Stack.Screen name="ArquivoPronto" component={ArquivoPronto} />
      <Stack.Screen name="AnaliseVisualizar" component={AnaliseVisualizar} />
      <Stack.Screen
        name="MelhoresCoresVisualizar"
        component={MelhoresCoresVisualizar}
      />
      <Stack.Screen name="Historico" component={Historico} />
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
