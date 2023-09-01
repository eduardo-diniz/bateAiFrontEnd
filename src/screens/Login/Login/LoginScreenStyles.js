import { StyleSheet } from 'react-native';

const LoginScreenStyles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 5,
    marginBottom: 20, 
    padding: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12, 
    borderRadius: 5,
    marginTop: 20,
  },
  buttonSignUp:{
    backgroundColor: '#3498db',
    padding: 12, 
    borderRadius: 5,
    marginTop: 20,
    marginBotton: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold', 
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  logo: {
    width: 400,
    height: 150,
    marginBottom: 20,
  },

});

export default LoginScreenStyles;
