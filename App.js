import React from 'react';
import cadastro from './src/pages/cadastro/cadastro';
import login from './src/pages/login/login';
import home from './src/pages/home/home';
import catalogo from './src/pages/catalogo/catalogo';
import produto from './src/pages/produto/produto';
import carrinho from './src/pages/carrinho/carrinho';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="catalogo" component={catalogo} />
        <Stack.Screen name="produto" component={produto} />
        <Stack.Screen name="carrinho" component={carrinho} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}