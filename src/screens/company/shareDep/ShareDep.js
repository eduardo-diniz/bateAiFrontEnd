import React, { useState, useEffect } from "react";
import ButtonC from '../../../components/button/ButtonC';
import ModalPopup from "../../../components/modal/ModalPoup";
import { useNavigation } from '@react-navigation/native';
import DepStyle from './ShareDepStyles'; 
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { departmantByCNPJ, logout } from '../../../services/services';
import * as Linking from 'expo-linking'; // Import Linking from Expo
import { View, Image, Text, Share, Clipboard, TouchableOpacity } from 'react-native';


const ShareDep = () => {
    const navigation = useNavigation();  
    const { token, logout: authLogout } = useAuth();
    const route = useRoute();

    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState(false);
    const departament = route.params.departamentId;

    
    const handleButtonPress = (departamentID) => {
      Clipboard.setString(`Link do departamento: ${departamentID}`);

        setStatus(true);
        setMessage('Link copiado com sucesso');
        setVisible(true);
    };

    const handleButtonPress1 = () => {
        setVisible(false);
    };

      const handleShareEmail = async (departamentID) => {
        const emailSubject = 'Compartilhamento de Departamento';
        const emailBody = `Aqui está o link para o departamento: ${departamentID}`;
        await Linking.openURL(`mailto:?subject=${emailSubject}&body=${emailBody}`);

    };

    const handleShareWhatsApp = (departamentID) => {
        const whatsappMessage = `Aqui está o link para o departamento: ${departamentID}`;
        Share.share({
            message: whatsappMessage,
        });
    };

    return (
        <View style={DepStyle.container}>
          <View style={DepStyle.blueBlock}>
            <Image source={require('../../../../assets/image_IT.png')} style={DepStyle.image} />
          </View>
          <Text style={DepStyle.titleText}>{departament.Name}</Text>
          <View style={DepStyle.header}>
            <Text style={DepStyle.codigoText}>Código: {departament.DepartamentId}</Text>
            <View style={DepStyle.shareContainer}>
            <ModalPopup visible={visible} text={message} status={status}>
              <View style={{ alignItems: 'center' }}>
              </View>             
               <ButtonC name={'Shared By E-mail'} onPress={() => handleShareEmail(departament.DepartamentId)} />
               <ButtonC name={'Shared By WhatsApp'} onPress={() => handleShareWhatsApp(departament.DepartamentId)} />
              <ButtonC name={'Fechar'} onPress={() => handleButtonPress1()} />
            </ModalPopup>
            <ButtonC name={'Compartilhar'} onPress={() => handleButtonPress(departament.DepartamentId)} />
          </View>
          </View>
          <View style={DepStyle.infoContainer}>
          <Text style={DepStyle.infoText}>Home Office: {departament.AllowsRemoteWork ? "Yes" : "No"}</Text>
          <Text style={DepStyle.infoText}>Weekend: {departament.AllowsWeekendWork ? "Yes" : "No"}</Text>
          <Text style={DepStyle.infoText}>Horas Extras: {departament.AllowsOvertime ? "Yes" : "No"}</Text>
          <Text style={DepStyle.infoText}>I.A: {departament.AllowsAI ? "Yes" : "No"}</Text>

          </View>
        </View>
      );
      
};


export default ShareDep;

