import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import CrearProjecte from './src/screens/inici';
import Inici2 from './src/screens/inici2';
import Valorats from './src/screens/valorats';
import Llista from "./src/screens/Llista"
import Projecte from './src/screens/projecte';
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CrearProjecte" component={CrearProjecte} />
      <Stack.Screen name="Inici2" component={Inici2} />
      <Stack.Screen name="Valorats" component={Valorats} />
      <Stack.Screen name="Llista" component={Llista} />
      <Stack.Screen name="Projecte" component={Projecte} />
    </Stack.Navigator>
  </NavigationContainer>
);
const styles = StyleSheet.create({
  layout: { flex: 1, justifyContent: 'center', padding: 8, },
  title: { margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center', },
});
export default App;