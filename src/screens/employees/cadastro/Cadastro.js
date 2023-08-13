import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [codigoEmpresa, setCodigoEmpresa] = useState('');

  const handleSubmit = () => {
    console.log('Dados enviados:', {
      nome,
      email,
      cpf,
      codigoEmpresa,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Perfil</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Seu nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
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

        <Text style={styles.label}>Código da empresa:</Text>
        <TextInput
          style={styles.input}
          value={codigoEmpresa}
          onChangeText={setCodigoEmpresa}
        />

      </View>
      <ButtonC style={styles.button} name="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default Cadastro;
