import React, { useState, useEffect } from "react";
import ButtonC from '../../../components/button/ButtonC';
import ModalPopup from "../../../components/modal/ModalPoup";
import { useNavigation } from '@react-navigation/native';
import DepStyle from './ShareDepStyles'; 
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { departmantByCNPJ, logout } from '../../../services/services';
import * as Linking from 'expo-linking'; 
import { View, Image, Text, Share, Clipboard } from 'react-native';
import { useTranslation } from 'react-i18next';


const ShareDep = () => {
  const { t } = useTranslation()
    const navigation = useNavigation();  
    const { token, logout: authLogout } = useAuth();
    const route = useRoute();

    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState(false);
    const departament = route.params.departamentId;

    
    const handleButtonPress = (departamentID) => {
      Clipboard.setString( t('linkDep') + `${departamentID}`);

        setStatus(true);
        setMessage(t('linkok'));
        setVisible(true);
    };

  const handleButtonPress1 = () => {
    setVisible(false);
  };

      const handleShareEmail = async (departamentID) => {
        const emailSubject = t('departmentsharing');
        const emailBody = t('hereisthelinktothedepartment') + `${departamentID}`;
        await Linking.openURL(`mailto:?subject=${emailSubject}&body=${emailBody}`);

    };

    const handleShareWhatsApp = (departamentID) => {
        const whatsappMessage = t('hereisthelinktothedepartment') + `${departamentID}`;
        Share.share({
            message: whatsappMessage,
        });
    };

    return (
        <View style={DepStyle.container}>
          <View style={DepStyle.blueBlock}>
            <Image source={require('../../../../assets/department.png')} style={DepStyle.image} />
          </View>
          <Text style={DepStyle.titleText}>{departament.Name}</Text>
          <View style={DepStyle.header}>
            <Text style={DepStyle.codigoText}>{t('departamentcode')} {departament.DepartamentId}</Text>
            <View style={DepStyle.shareContainer}>
            <ModalPopup visible={visible} text={message} status={status}>
              <View style={{ alignItems: 'center' }}>
              </View>             
               <ButtonC name={t('sharedbyemail')} onPress={() => handleShareEmail(departament.DepartamentId)} />
               <ButtonC name={t('sharedbywhatsapp')} onPress={() => handleShareWhatsApp(departament.DepartamentId)} />
              <ButtonC name={t('close')} onPress={() => handleButtonPress1()} />
            </ModalPopup>
            <ButtonC name={t('share')} onPress={() => handleButtonPress(departament.DepartamentId)} />
          </View>
          </View>
          <View style={DepStyle.infoContainer}>
          <Text style={DepStyle.infoText}>Home Office: {departament.AllowsRemoteWork ? t('yes') : t('no')}</Text>
          <Text style={DepStyle.infoText}>{t('weekend')}: {departament.AllowsWeekendWork ? t('yes') : t('no')}</Text>
          <Text style={DepStyle.infoText}>{t('overtime')}: {departament.AllowsOvertime ? t('yes') : t('no')}</Text>
          <Text style={DepStyle.infoText}>{t('ai')}: {departament.AllowsAI ? t('yes') : t('no')}</Text>
          </View>
        </View>
  );

};


export default ShareDep;

