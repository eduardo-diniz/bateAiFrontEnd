import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { createCompany } from '../../../services/services';

const AddCompany = () => {
  const [name, setName] = useState('');
  const [fictionalName, setFictionalName] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const handleCreateCompany = async () => {
    const companyData = {
      Name: name,
      NomeFantasia: fictionalName,
      CNPJ: CNPJ,
      senha: senha
    };

    try {
      const response = await createCompany(companyData);
      console.log('Resposta da criação da empresa:', response.data);
      
      navigation.navigate('CompanyConfirmation');

    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      setMessage('Erro ao criar empresa');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Create Company</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Company Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Fictional Name:</Text>
          <TextInput
            style={styles.input}
            value={fictionalName}
            onChangeText={setFictionalName}
            keyboardType="default"
          />

          <Text style={styles.label}>CNPJ:</Text>
          <TextInput
            style={styles.input}
            value={CNPJ}
            onChangeText={setCNPJ}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            keyboardType="default"
          />
        </View>
        <ButtonC style={styles.button} name="Submit" onPress={handleCreateCompany} />
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

export default AddCompany;
