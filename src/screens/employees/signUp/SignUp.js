import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { getDepartmentByID, createUser } from '../../../services/services';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const navigation = useNavigation();
  const [senha, setSenha] = useState('');
  const [departamentCode, setDepartamentCode] = useState(''); // Estado para o código da empresa
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
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Create Profile</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Your name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>CPF:</Text>
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCPF}
            keyboardType="numeric"
          />
        <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
          <Text style={styles.label}>departament Code:</Text>
          <TextInput
            style={styles.input}
            value={departamentCode}
            onChangeText={setDepartamentCode}
          />
        <Text style={styles.label}>Company Code:</Text>
        <TextInput
          style={styles.input}
          value={companyCode}
          onChangeText={setCompanyCode}
        />

        <Text style={styles.label}>Cargo:</Text>
        <TextInput
          style={styles.input}
          value={cargo}
          onChangeText={setCargo}
        />
        </View>
        <ButtonC style={styles.button} name="Submit" onPress={handleSubmit} />
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

export default SignUp;
