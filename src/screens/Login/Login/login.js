// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../../services/services'; // Importando a função de login
import LoginScreenStyles from './LoginScreenStyles'; // Importando os estilos
import { useTranslation } from 'react-i18next';
import ButtonT from '../../../components/button_translate/ButtonT';



const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [cpfOuCnpj, setCPFouCNPJ] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Tentando fazer login com CPF/CNPJ:', cpfOuCnpj);
      console.log('Senha:', senha);

      const response = await login(cpfOuCnpj, senha);

      console.log('Resposta do servidor:', response.data);

      const token = response.data.token;

      await AsyncStorage.setItem('token', token);
      console.log('Login bem-sucedido. Token:', token);

      if (cpfOuCnpj.length === 11) {
        navigation.navigate('Home', { userIdentifier: cpfOuCnpj })
      } else if (cpfOuCnpj.length === 14) {
        navigation.navigate('CompanyConfirmation', { userIdentifier: cpfOuCnpj })
      }

    } catch (error) {
      console.error('Erro de login:', error);
      setError('Credenciais inválidas');
    }
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Login</Text>
      <TextInput
        style={LoginScreenStyles.input}
        placeholder={t('placeholdercpfcnpj')}
        onChangeText={text => setCPFouCNPJ(text)}
      />
      <TextInput
        style={LoginScreenStyles.input}
        placeholder={t('password')}
        secureTextEntry
        onChangeText={text => setSenha(text)}
      />
      <TouchableOpacity style={LoginScreenStyles.button} onPress={handleLogin}>
        <Text style={LoginScreenStyles.buttonText}>{t('submit')}</Text>
      </TouchableOpacity>
      <ButtonT style={LoginScreenStyles.buttonT}/>
      {error ? <Text style={LoginScreenStyles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default LoginScreen;
