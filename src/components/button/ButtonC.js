import React from 'react'
import{ StyleSheet, TouchableOpacity, Text} from 'react-native'

const ButtonC = ({ name, onPress } ) => {

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    padding: 10,
    borderRadius: 90,


  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ButtonC;