import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const ButtonCompact = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonText: {
    marginLeft: 5,
    color: 'black', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
});

export default ButtonCompact;
