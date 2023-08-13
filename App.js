import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/employees/homePage/Home';
import Profile from './src/screens/employees/profile/Profile';
import React from 'react';
import AllTimeSheets from './src/screens/employees/allTimeSheets/AllTimeSheets';
const Stack = createNativeStackNavigator();
<<<<<<< HEAD
import Cadastro from './src/screens/employees/cadastro/Cadastro';
=======
>>>>>>> dcb7f413b1d861c1655b960c98e3e4ed2a45b972

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
<<<<<<< HEAD
        <Stack.Navigator initialRouteName="Cadastro">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AllTimeSheets" component={AllTimeSheets} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
=======
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AllTimeSheets" component={AllTimeSheets} />
>>>>>>> dcb7f413b1d861c1655b960c98e3e4ed2a45b972

        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
