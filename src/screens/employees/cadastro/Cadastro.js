import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import CadastroStyle  from './CadastroStyle'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={CadastroStyle.container}>
      <KeyboardAwareScrollView contentContainerStyle={CadastroStyle.scrollContainer}>
        <Text style={CadastroStyle.title}>Create Profile</Text>
        <View style={CadastroStyle.form}>
          <Text style={CadastroStyle.label}>Your name:</Text>
          <TextInput
            style={CadastroStyle.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={CadastroStyle.label}>Email:</Text>
          <TextInput
            style={CadastroStyle.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={CadastroStyle.label}>CPF:</Text>
          <TextInput
            style={CadastroStyle.input}
            value={cpf}
            onChangeText={setCPF}
            keyboardType="numeric"
          />
           <Text style={CadastroStyle.label}>Password:</Text>
          <TextInput
            style={CadastroStyle.input}
            value={senha}
            onChangeText={setSenha}
          />
          <Text style={CadastroStyle.label}>Company Code:</Text>
          <TextInput
            style={CadastroStyle.input}
            value={companyCode}
            onChangeText={setCompanyCode}
          />
        </View>
        <ButtonC style={CadastroStyle.button} name="Submit" onPress={handleSubmit} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
