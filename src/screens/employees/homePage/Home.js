import ButtonC from "../../../components/button/ButtonC";
import { Alert, View, StyleSheet, Image, Text } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC";
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { getUser, getTimesheets, createTimesheet, logout } from '../../../services/services';
import { format } from 'date-fns';

const Home = () => {
  const { token, logout: authLogout } = useAuth();
  const route = useRoute();

  const navigation = useNavigation();
  const userIdentifier = route.params.userIdentifier;
  const [user, setUser] = useState(); 

  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState(false);
  const [timeSheets, setTimeSheets] = useState(); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(userIdentifier);
        const timeSheetData = await getTimesheets(userIdentifier);

        setTimeSheets(timeSheetData?.data)
        setUser(userData?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userIdentifier, token]);


  const handleverPerfil = () => {
    navigation.navigate('Profile', { userIdentifier: userIdentifier});
  };

  const handleverRegistros = () => {
    navigation.navigate('AllTimeSheets',  { userIdentifier: userIdentifier});
  };

  const handleButtonPress = async  () => {
    setStatus(true);
    const currentDate = new Date();
    {

      try{
        await createTimesheet(user?.cpf, currentDate)
        const timeSheetData = await getTimesheets(userIdentifier);
        setTimeSheets(timeSheetData?.data)
        setVisible(true);
      }
        catch{
       console.log('nada')   
  }
  } 
  };

  const handleButtonPress1 = () => {
    setVisible(false);
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

      <ProfileInfoC departament={'T.I'} name={user?.name} nick={user?.cpf} picture="https://placekitten.com/200/200" />

      <View style={styles.viewButtons}>
        <ButtonC name={'Ver Perfil'} onPress={handleverPerfil} />
        <ButtonC name={'Ver Registros'} onPress={handleverRegistros} />
      </View>
      {!timeSheets ? <Text>loading</Text> : (

        <ListViewC name={'Ultimos Registros'} list={timeSheets}></ListViewC>
        )
      }

      <ModalPopup visible={visible} text={message} status={status}>
        <View style={{ alignItems: 'center' }}></View>
        <ButtonC name={'Ok'} onPress={handleButtonPress1} />
      </ModalPopup>
      <ButtonC name={'Bater Ponto'} onPress={handleButtonPress} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  viewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default Home;
