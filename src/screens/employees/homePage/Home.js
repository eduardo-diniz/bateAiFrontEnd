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
import HomeStyle from './HomeStyle'
import * as LocalAuthentication from 'expo-local-authentication';
import { useTranslation } from 'react-i18next';
import { utcToZonedTime } from 'date-fns-tz';


const Home = () => {
  const { t } = useTranslation();

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
        setUser(userData?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchTimeSheetData = async () => {
      try {
        const timeSheetData = await getTimesheets(userIdentifier);
        //const timeSheetData = await getTimesheets(userIdentifier);
        console.log(timeSheetData?.data);

        const brazilTimezone = 'America/Sao_Paulo';
        const formattedTimeSheets = timeSheetData?.data.map(item => ({
          ...item,
          Time: format(
            utcToZonedTime(new Date(item.Time), brazilTimezone),
            'yyyy-MM-dd HH:mm:ss',
            { timeZone: brazilTimezone }
          ),
        }));
        //console.log('fomart', formattedTimeSheets)
        setTimeSheets(formattedTimeSheets);
        setMessage(t('pointsuccessfullymarked'))
        //setTimeSheets(timeSheetData?.data);
        //console.log('timeSheets', timeSheetData?.data);
      } catch (error) {
        // console.error("Error fetching time sheet data:", error);
      }
    };

    fetchUserData();
    fetchTimeSheetData();
  }, [userIdentifier, token]);

  const handleverPerfil = () => {
    navigation.navigate('Profile', { userIdentifier: userIdentifier });
  };

  const handleverRegistros = () => {
    navigation.navigate('AllTimeSheets', { userIdentifier: userIdentifier });
  };


  const handleButtonPress = async () => {
    setStatus(true);

    // Verificar a disponibilidade de autenticação biométrica
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (isBiometricAvailable) {
      try {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: t('insertfinger'),
        });

        if (result.success) {
          const currentDate = new Date();
          try {
            await createTimesheet(user?.cpf, currentDate);
            const timeSheetData = await getTimesheets(userIdentifier);
            console.log(timeSheetData?.data);

            const brazilTimezone = 'America/Sao_Paulo';
            const formattedTimeSheets = timeSheetData?.data.map(item => ({
              ...item,
              Time: format(
                utcToZonedTime(new Date(item.Time), brazilTimezone),
                'yyyy-MM-dd HH:mm:ss',
                { timeZone: brazilTimezone }
              ),
            }));
            console.log('fomart', formattedTimeSheets)
            setTimeSheets(formattedTimeSheets);
            setVisible(true);
          } catch {
            console.log('Erro ao criar registro de ponto');
          }
          console.log('Autenticação biométrica Funcionou.')
        } else {
          console.log('Autenticação biométrica falhou.');
        }
      } catch (error) {
        console.log('Erro durante a autenticação biométrica', error);
      }
    } else {
      console.log('Autenticação biométrica não disponível neste dispositivo.');
      // Fallback para outra forma de autenticação, se necessário
    }
  };

  const handleButtonPress1 = () => {
    setVisible(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      authLogout();

      navigation.navigate('Login');

    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <View>
      
      <ProfileInfoC departament={'T.I'} name={user?.name} 
        nick={user?.cpf} picture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />

      <View style={HomeStyle.viewButtons}>
        <ButtonC name={t('viewprofile')} onPress={handleverPerfil} />
        <ButtonC name={t('viewrecords')} onPress={handleverRegistros} />
      </View>
      {!timeSheets ? <Text  style={HomeStyle.noRegister} >{t('loading')}</Text> : (

        <ListViewC name={t('latestrecords')} list={timeSheets.slice(0,5)}></ListViewC>
      )
      }
      

      <ModalPopup visible={visible} text={message} status={status}>
        <View style={{ alignItems: 'center' }}></View>
        <ButtonC name={'Ok'} onPress={handleButtonPress1} />
      </ModalPopup>
      <ButtonC name={t('topunchtheclock')} onPress={handleButtonPress} />
      <ButtonC name={t('logout')} onPress={handleLogout} />

    </View>
  );
};


export default Home;