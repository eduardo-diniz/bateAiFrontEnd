import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { createCompany } from '../../../services/services';
import AddCompanyStyle from './AddCompanyStyle'

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
      
      navigation.navigate('CompanyConfirmation');

    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      setMessage('Erro ao criar empresa');
    }
  };

  return (
    <SafeAreaView style={AddCompanyStyle.container}>
      <KeyboardAwareScrollView contentContainerStyle={AddCompanyStyle.scrollContainer}>
        <Text style={AddCompanyStyle.title}>Create Company</Text>
        <View style={AddCompanyStyle.form}>
          <Text style={AddCompanyStyle.label}>Company Name:</Text>
          <TextInput
            style={AddCompanyStyle.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={AddCompanyStyle.label}>Fictional Name:</Text>
          <TextInput
            style={AddCompanyStyle.input}
            value={fictionalName}
            onChangeText={setFictionalName}
            keyboardType="default"
          />

          <Text style={AddCompanyStyle.label}>CNPJ:</Text>
          <TextInput
            style={AddCompanyStyle.input}
            value={CNPJ}
            onChangeText={setCNPJ}
            keyboardType="numeric"
          />

          <Text style={AddCompanyStyle.label}>Password:</Text>
          <TextInput
            style={AddCompanyStyle.input}
            value={senha}
            onChangeText={setSenha}
            keyboardType="default"
          />
        </View>
        <ButtonC style={AddCompanyStyle.button} name="Submit" onPress={handleCreateCompany} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};


export default AddCompany;
