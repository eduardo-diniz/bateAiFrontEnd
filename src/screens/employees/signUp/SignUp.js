import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { getDepartmentByID, createUser } from '../../../services/services';
import SignUpStyles from './SignUpStyles'; // Importando os estilos

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const navigation = useNavigation();
  const [senha, setSenha] = useState('');
  const [departamentCode, setDepartamentCode] = useState(''); 
  const [cargo, setCargo] = useState(''); 
  const handleSubmit = async () => {

    const response = await getDepartmentByID(departamentCode);
    const departmentData = response.data;
  
    const userData = {
      name: name,
      email: email,
      cpf: cpf,
      senha: senha,
      codigoEmpresa: companyCode, 
      codigoDoSetor:departamentCode,
      cargo: cargo,
      homeOffice: departmentData.AllowsRemoteWork,
      horasNoturnas: departmentData.AllowsOvertime,
      aceitaIA: departmentData.AllowsAI,
      finalDeSemana: departmentData.AllowsWeekendWork
    };
    
    console.log(userData)

try {
      const response = await createUser(userData);
      console.log('Resposta da criação da empresa:', response.data);
      
      navigation.navigate('Home');

    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      setMessage('Erro ao criar empresa');
    }
  };

  return (
    <SafeAreaView style={SignUpStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={SignUpStyles.scrollContainer}>
        <Text style={SignUpStyles.title}>Create Profile</Text>
        <View style={SignUpStyles.form}>
          <Text style={SignUpStyles.label}>Your name:</Text>
          <TextInput
            style={SignUpStyles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={SignUpStyles.label}>Email:</Text>
          <TextInput
            style={SignUpStyles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={SignUpStyles.label}>CPF:</Text>
          <TextInput
            style={SignUpStyles.input}
            value={cpf}
            onChangeText={setCPF}
            keyboardType="numeric"
          />
        <Text style={SignUpStyles.label}>Password:</Text>
          <TextInput
            style={SignUpStyles.input}
            value={senha}
            onChangeText={setSenha}
          />
          <Text style={SignUpStyles.label}>departament Code:</Text>
          <TextInput
            style={SignUpStyles.input}
            value={departamentCode}
            onChangeText={setDepartamentCode}
          />
        <Text style={SignUpStyles.label}>Company Code:</Text>
        <TextInput
          style={SignUpStyles.input}
          value={companyCode}
          onChangeText={setCompanyCode}
        />

        <Text style={SignUpStyles.label}>Cargo:</Text>
        <TextInput
          style={SignUpStyles.input}
          value={cargo}
          onChangeText={setCargo}
        />
        </View>
        <ButtonC style={SignUpStyles.button} name="Submit" onPress={handleSubmit} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

  
export default SignUp;
