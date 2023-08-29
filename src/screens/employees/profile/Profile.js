import React, { useState, useEffect } from 'react';
import { View, ProfileStylesheet, Image, Text, ScrollView } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC"
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import Label from "../../../components/label/Label";
import { getUser, getTimesheets, createTimesheet, logout } from '../../../services/services';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import ProfileStyles from './ProfileStyle'; // Importando os estilos

const Profile = () => {

  const { token, logout: authLogout } = useAuth();
  const route = useRoute();

  const userIdentifier = route.params.userIdentifier;
  const [user, setUser] = useState(); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(userIdentifier);
        console.log('userData', userData)
        setUser(userData?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userIdentifier, token]);


  return (
    <View style={ProfileStyles.container}>
      <View style={ProfileStyles.profileInfo}>
        <ProfileInfoC departament={'T.I'} name={user?.name} nick={user?.cpf} picture="https://placekitten.com/200/200" />
      </View>

      <ScrollView style={ProfileStyles.labelsContainer}>
     

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Horário"
          description="Falta Field no back"
        />


<Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Horas Noturnas"
          description={user?.horasNoturnas ? "Sim" : "Não"} // Usar operador ternário para exibir Sim ou Não
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Home Office"
          description={user?.homeOffice ? "Sim" : "Não"} // Usar operador ternário para exibir Sim ou Não
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Trabalho finais de semana"
          description={user?.finalDeSemana ? "Sim" : "Não"} // Usar operador ternário para exibir Sim ou Não
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Lembrar por I.A"
          description={user?.aceitaIA ? "Sim" : "Não"} // Usar operador ternário para exibir Sim ou Não
        />
      </ScrollView>
    </View>
  );
}


export default Profile;