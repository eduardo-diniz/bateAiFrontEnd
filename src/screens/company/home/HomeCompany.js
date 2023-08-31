import ButtonC from "../../../components/button/ButtonC";
import { Alert, View, StyleSheet, Image, Text } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC";
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { getByCNPJ, logout } from '../../../services/services';
import  HomeStyle from './HomeCompanyStyle'
import companyProfileImage from '../../../../assets/company-profile.avif';

const HomeCompany = () => {
  const { token, logout: authLogout } = useAuth();
  
  const navigation = useNavigation();
  const route = useRoute();
  const userIdentifier = route.params.userIdentifier;
  const [user, setUser] = useState(); 


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getByCNPJ(userIdentifier);
        setUser(userData?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [userIdentifier, token]);

  const allDepartaments = () => {
    navigation.navigate('AllDepartments', { userIdentifier: userIdentifier});
  };
  const addDepartament = () => {
    navigation.navigate('AddDepartament', { userIdentifier: userIdentifier});
  };

  const handleLogout = async () => {
    try {
      await logout();
      authLogout(); 

      navigation.navigate('LoginScreen');

    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <View>
        <ButtonC name={'Logout'} onPress={handleLogout} />

        <ProfileInfoC name={user?.Name} nick={user?.CNPJ} picture={'https://img.freepik.com/vetores-premium/ilustracao-do-personagem-de-desenho-grafico-vetorial-da-empresa_516790-299.jpg?w=826'} />

      <View style={HomeStyle.viewButtons}>
        <ButtonC name={'Add Departaments'} onPress={addDepartament} />
        <ButtonC name={'All Departaments'} onPress={allDepartaments} />
      </View>    
     
    </View>
  );
};


export default HomeCompany;
