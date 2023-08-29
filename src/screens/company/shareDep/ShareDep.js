import React, { useState } from "react";
import ButtonC from '../../../components/button/ButtonC';
import { View, Image, Text } from 'react-native';
import ModalPopup from "../../../components/modal/ModalPoup";
import { useNavigation } from '@react-navigation/native';
import DepStyle from './ShareDepStyles'; 

const ShareDep = () => {
    const navigation = useNavigation();  

    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState(false);

    const handleButtonPress = () => {
        setStatus(true);
        setMessage('Link copiado com sucesso');
        setVisible(true);
    };

    const handleButtonPress1 = () => {
        setVisible(false);
    };

    return (
        <View style={DepStyle.container}>
          <View style={DepStyle.blueBlock}>
            <Image source={require('../../../../assets/image_IT.png')} style={DepStyle.image} />
          </View>
          <Text style={DepStyle.titleText}>Tecnologia da Informação</Text>
          <View style={DepStyle.header}>
            <Text style={DepStyle.codigoText}>Código: 72ABC</Text>
            <View style={DepStyle.shareContainer}>
              <ModalPopup visible={visible} text={message} status={status}>
                <View style={{ alignItems: 'center' }}></View>
                <ButtonC name={'Ok'} onPress={handleButtonPress1} />
              </ModalPopup>
              <ButtonC name={'Compartilhar'} onPress={handleButtonPress} />
            </View>
          </View>
          <View style={DepStyle.infoContainer}>
            <Text style={DepStyle.infoText}>Home Office: Yes</Text>
            <Text style={DepStyle.infoText}>Weekend: No</Text>
            <Text style={DepStyle.infoText}>Horas Noturnas: No</Text>
            <Text style={DepStyle.infoText}>Funcionários no setor: 12</Text>
            <Text style={DepStyle.infoText}>Funcionários ativos no setor: 8</Text>
          </View>
        </View>
      );
      
};


export default ShareDep;

