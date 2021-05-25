import React from 'react';
import cadastro from './src/pages/cadastro/cadastro';
import login from './src/pages/login/login';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}