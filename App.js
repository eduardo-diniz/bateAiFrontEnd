import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry } from 'react-native';

import Home from './src/screens/employees/homePage/Home';
import Profile from './src/screens/employees/profile/Profile';
import React from 'react';
import AllTimeSheets from './src/screens/employees/allTimeSheets/AllTimeSheets';
const Stack = createNativeStackNavigator();
import SignUp from './src/screens/employees/signUp/SignUp';
import AddCompany from './src/screens/company/addCompany/AddCompany';
import CompanyConfirmation from './src/screens/company/companyConfirmation/CompanyConfirmation';
import AddDepartament from './src/screens/company/addArea/AddDepartment';
import DepartamentConfirmation from './src/screens/company/departamentConfirmation/DepartamentConfirmation.js'
import CoicheScreen from './src/screens/Login/initial/choice';
import AllDepartments from './src/screens/company/allDepartaments/AllDepartaments';
import ShareDep from './src/screens/company/shareDep/ShareDep'
import ConfirmationSector from './src/screens/company/confirmaçãoSetor/ConfirmationSector'
import LoginScreen from './src/screens/Login/Login/login'
import TechnologyScreen from './src/screens/company/departamentConfirmation/DepartamentConfirmation'
import HomeCompany from './src/screens/company/home/HomeCompany'
import { AuthProvider } from './src/AuthContext';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './src/locales/en.json'; // Importar suas traduções
import ptTranslation from './src/locales/pt.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation }
    },
    lng: 'en', // Defina o idioma padrão aqui
    interpolation: {
      escapeValue: false // Permite que você use variáveis nas traduções
    }
  });

AppRegistry.registerComponent('MyApp', () => App);


export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <View style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="HomeCompany" component={HomeCompany} options={{ title: 'Company Dashboard' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'My Profile' }} />
        <Stack.Screen name="AllTimeSheets" component={AllTimeSheets} options={{ title: 'All Time Sheets' }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="AddCompany" component={AddCompany} options={{ title: 'Add Company' }} />
        <Stack.Screen name="CompanyConfirmation" component={CompanyConfirmation} options={{ title: 'Company Confirmation' }} />
        <Stack.Screen name="AddDepartament" component={AddDepartament} options={{ title: 'Add Department' }} />
        <Stack.Screen name="DepartamentConfirmation" component={DepartamentConfirmation} options={{ title: 'Department Confirmation' }} />
        <Stack.Screen name="CoicheScreen" component={CoicheScreen} options={{ title: 'Choose Screen' }} />
        <Stack.Screen name="AllDepartments" component={AllDepartments} options={{ title: 'All Departments' }} />
        <Stack.Screen name="ShareDep" component={ShareDep} options={{ title: 'Share Department' }} />
        <Stack.Screen name="ConfirmationSector" component={ConfirmationSector} options={{ title: 'Sector Confirmation' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="TechnologyScreen" component={TechnologyScreen} options={{ title: 'Technology Screen' }} />
      </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
