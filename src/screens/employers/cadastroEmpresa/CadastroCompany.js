import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';

const CadastroCompany = () => {
  const [nome, setNome] = useState('');
  const [nomeFic, setNomeFic] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Home');

  
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Criar Empresa</Text>
        <View style={styles.form}>
          <Text style={styles.label}>nome empresa:</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>nome ficticio:</Text>
          <TextInput
            style={styles.input}
            value={nomeFic}
            onChangeText={setNomeFic}
            keyboardType="nomeFic-address"
          />

          <Text style={styles.label}>CNPJ:</Text>
          <TextInput
            style={styles.input}
            value={CNPJ}
            onChangeText={setCNPJ}
            keyboardType="numeric"
          />
        </View>
        <ButtonC style={styles.button} name="Enviar" onPress={handleSubmit} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default CadastroCompany;
