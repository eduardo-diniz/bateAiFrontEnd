// CoicheScreen.js
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CoicheScreenStyles from './CoicheScreenStyles'; // Importando os estilos

const CoicheScreen = () => {
  const navigation = useNavigation();

  const handleVerPerfilCompany = () => {
    navigation.navigate('AddCompany');
  };
  const handleVerPerfilUser = () => {
    navigation.navigate('SignUp');
  };

  const [highlightCompany, setHighlightCompany] = useState(false);
  const [highlightUser, setHighlightUser] = useState(false);

  return (
    <View style={CoicheScreenStyles.container}>
      <View style={CoicheScreenStyles.rectangle}>
        <Text style={CoicheScreenStyles.questionText}>Você é?</Text>
        <View style={CoicheScreenStyles.imageContainer}>
          <TouchableOpacity
            style={CoicheScreenStyles.imageWrapper}
            onPress={() => {
              handleVerPerfilCompany();
            }}
            onPressIn={() => {
              setHighlightCompany(true);
            }}
            onPressOut={() => {
              setHighlightCompany(false);
            }}
          >
            <Image
              style={[CoicheScreenStyles.image, highlightCompany && CoicheScreenStyles.highlightedImage]}
              source={require('../../../../assets/image_company.png')}
            />
            <Text style={CoicheScreenStyles.imageText}>Empresa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={CoicheScreenStyles.imageWrapper}
            onPress={() => {
              handleVerPerfilUser();
            }}
            onPressIn={() => {
              setHighlightUser(true);
            }}
            onPressOut={() => {
              setHighlightUser(false);
            }}
          >
            <Image
              style={[CoicheScreenStyles.image, highlightUser && CoicheScreenStyles.highlightedImage]}
              source={require('../../../../assets/image_user.png')}
            />
            <Text style={CoicheScreenStyles.imageText}>Funcionário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoicheScreen;
