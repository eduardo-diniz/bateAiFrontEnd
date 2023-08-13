import ButtonC from "../../../components/button/ButtonC";
import { Alert, View, StyleSheet, Image, Text } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC";
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const dateArray = [
  '18:00 20/06/2023',
  '18:00 20/06/2023',
  '18:00 20/06/2023',
  '18:00 20/06/2023',
  '18:00 20/06/2023'
];

const Home = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState(false);

  const handleverPerfil = () => {
    navigation.navigate('Profile');
  };

  const handleverRegistros = () => {
    navigation.navigate('AllTimeSheets');
  };

  const handleButtonPress = () => {
    setStatus(true);
    setMessage('Ponto batido com sucesso');
    setVisible(true);
  };

  const handleButtonPress1 = () => {
    setVisible(false);
  };

  return (
    <View>
      <ProfileInfoC departament={'T.I'} name={'Maria Eduarda'} nick={'Maria'} picture="https://placekitten.com/200/200" />

      <View style={styles.viewButtons}>
        <ButtonC name={'Ver Perfil'} onPress={handleverPerfil} />
        <ButtonC name={'Ver Registros'} onPress={handleverRegistros} />
      </View>

      <ListViewC name={'Ultimos Registros'} list={dateArray}></ListViewC>

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
