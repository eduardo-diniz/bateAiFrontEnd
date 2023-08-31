import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { getDepartmentByID, createUser } from '../../../services/services';
import SignUpStyles from './SignUpStyles'; // Importando os estilos
import { useTranslation } from 'react-i18next';


const SignUp = () => {
  const { t } = useTranslation();

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
    
    const userIdentifier = cpf;
    
    console.log(userData)

try {
      const response = await createUser(userData);
     // console.log('Resposta da criação da empresa:', response.data);
      
     navigation.navigate('Home',{ userIdentifier: userIdentifier });

    } catch (error) {
      //console.error('Erro ao criar empresa:', error);
      setMessage(t('errorcreatecompany')); // Invoca a função de tradução
    }
  };

  return (
    <SafeAreaView style={SignUpStyles.container}>
      <KeyboardAwareScrollView contentContainerStyle={SignUpStyles.scrollContainer}>
        <Text style={SignUpStyles.title}>{t('createprofile')}</Text>
        <View style={SignUpStyles.form}>
          <Text style={SignUpStyles.label}>{t('yourname')}</Text>
          <TextInput
            style={SignUpStyles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={SignUpStyles.label}>{t('email')}</Text>
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
        <Text style={SignUpStyles.label}>{t('password')}</Text>
          <TextInput
            style={SignUpStyles.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
          <Text style={SignUpStyles.label}>{t('departamentcode')}</Text>
          <TextInput
            style={SignUpStyles.input}
            value={departamentCode}
            onChangeText={setDepartamentCode}
          />
        <Text style={SignUpStyles.label}>{t('companycode')}</Text>
        <TextInput
          style={SignUpStyles.input}
          value={companyCode}
          onChangeText={setCompanyCode}
        />

        <Text style={SignUpStyles.label}>{t('jobposition')}</Text>
        <TextInput
          style={SignUpStyles.input}
          value={cargo}
          onChangeText={setCargo}
        />
        </View>
        <ButtonC style={SignUpStyles.button} name={t('submit')} onPress={handleSubmit} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

  
export default SignUp;
