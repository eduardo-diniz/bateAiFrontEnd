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
    borderWidth: 1, 
    borderColor: '#7092B0',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#7092B0',
  },
  buttonText: {
    marginLeft: 5,
    color: '#ffff', 
    fontSize: 14, 
    fontWeight: 'bold',
  },
});

export default ButtonCompact;
