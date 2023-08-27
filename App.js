import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import { AuthProvider } from './src/AuthContext';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AllTimeSheets" component={AllTimeSheets} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AddCompany" component={AddCompany} />
          <Stack.Screen name="CompanyConfirmation" component={CompanyConfirmation} />
          <Stack.Screen name="AddDepartament" component={AddDepartament} />
          <Stack.Screen name="DepartamentConfirmation" component={DepartamentConfirmation} />
          <Stack.Screen name="CoicheScreen" component={CoicheScreen} />
          <Stack.Screen name="AllDepartments" component={AllDepartments} />
          <Stack.Screen name="ShareDep" component={ShareDep} />
          <Stack.Screen name="ConfirmationSector" component={ConfirmationSector} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
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
