// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../../services/services'; // Importando a função de login
import LoginScreenStyles from './LoginScreenStyles'; // Importando os estilos

const LoginScreen = ({ navigation }) => {
  const [cpfOuCnpj, setCPFouCNPJ] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
  

      const response = await login(cpfOuCnpj, senha);

      console.log('Resposta do servidor:', response.data);

      const token = response.data.token;

      await AsyncStorage.setItem('token', token);

      if (cpfOuCnpj.length === 11) {
        navigation.navigate('Home', { userIdentifier: cpfOuCnpj })
      } else if (cpfOuCnpj.length === 14) {
        navigation.navigate('HomeCompany', { userIdentifier: cpfOuCnpj })
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
        placeholder="CPF ou CNPJ"
        onChangeText={text => setCPFouCNPJ(text)}
      />
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setSenha(text)}
      />
      <TouchableOpacity style={LoginScreenStyles.button} onPress={handleLogin}>
        <Text style={LoginScreenStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {error ? <Text style={LoginScreenStyles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default LoginScreen;
