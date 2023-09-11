import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../../services/services';
import LoginScreenStyles from './LoginScreenStyles';
import { useTranslation } from 'react-i18next';
import ButtonT from '../../../components/button_translate/ButtonT';
import MotivationalQuotes from '../../../components/MotivationalQuotes/MotivationalQuotes';



const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [cpfOuCnpj, setCPFouCNPJ] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(cpfOuCnpj, senha);
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

  const handleCoicheScreen = () => {
    navigation.navigate('CoicheScreen')
  }

  return (
    <View style={LoginScreenStyles.background}>
      <View style={LoginScreenStyles.container}>
      <MotivationalQuotes />
        <Image
          source={require('../../../../assets/logo_bate_ai.png')}
          style={LoginScreenStyles.logo} />

        <Text style={LoginScreenStyles.title}>{t('login')}</Text>
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
        <TouchableOpacity style={LoginScreenStyles.buttonSignUp} onPress={handleCoicheScreen}>
          <Text style={LoginScreenStyles.buttonText}>{t('signup')}</Text>
        </TouchableOpacity>
        <ButtonT style={LoginScreenStyles.languageButtons} />
        {error ? <Text style={LoginScreenStyles.errorText}>{error}</Text> : null}

      </View>
    </View>
  );
};

export default LoginScreen;
