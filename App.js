import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/employees/homePage/Home';
import Profile from './src/screens/employees/profile/Profile';
import React from 'react';
import AllTimeSheets from './src/screens/employees/allTimeSheets/AllTimeSheets';
const Stack = createNativeStackNavigator();
import Cadastro from './src/screens/employees/cadastro/Cadastro';
import CadastroCompany from './src/screens/employers/cadastroEmpresa/CadastroCompany';
import ConfirmacaoCompany from './src/screens/employers/confirmacaoEmpresa/ConfirmacaoCompany';
import AddArea from './src/screens/employers/addArea/AddArea';
import ConfirmacaoSetor from './src/screens/employers/confirmaçãoSetor/ConfirmacaoSetor'
import CoicheScreen from './src/screens/Login/initial/choice';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="CoicheScreen">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AllTimeSheets" component={AllTimeSheets} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="CadastroCompany" component={CadastroCompany} />
          <Stack.Screen name="ConfirmacaoCompany" component={ConfirmacaoCompany} />
          <Stack.Screen name="AddArea" component={AddArea} />
          <Stack.Screen name="ConfirmacaoSetor" component={ConfirmacaoSetor} />
          <Stack.Screen name="CoicheScreen" component={CoicheScreen} />

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
