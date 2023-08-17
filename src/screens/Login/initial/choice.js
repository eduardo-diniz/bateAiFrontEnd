import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const CoicheScreen = () => {
  const navigation = useNavigation();

  const handleVerPerfilCompany = () => {
    navigation.navigate('CadastroCompany');
  };
  const handleVerPerfilUser = () => {
    navigation.navigate('Profile');
  };

  const [highlightCompany, setHighlightCompany] = useState(false);
  const [highlightUser, setHighlightUser] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.questionText}>Você é?</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageWrapper}
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
              style={[styles.image, highlightCompany && styles.highlightedImage]}
              source={require('../../../../assets/imagem_company.png')}
            />
            <Text style={styles.imageText}>Empresa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageWrapper}
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
              style={[styles.image, highlightUser && styles.highlightedImage]}
              source={require('../../../../assets/imagem_user.png')}
            />
            <Text style={styles.imageText}>Funcionário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#357F9E',
  },
  rectangle: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: 10,
  },
  highlightedImage: {
    borderColor: '#002E41', // Cor da borda azul quando selecionado
    borderWidth: 2,
  },
  imageText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CoicheScreen;
