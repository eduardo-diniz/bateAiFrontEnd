import React from 'react';
import { StyleSheet, Image, View,Text } from 'react-native';

const ProfileInfoC = ({departament, nick ,name, picture}) => {
  return (
    <View>
        <View style={styles.container} >
        <Text style={styles.title}>Olá, {nick}</Text>
        <View style={styles.imageContainer}>
            <Image source={{ uri: picture }} style={styles.roundImage} />
        </View>
    </View>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.subText}>{departament}</Text>
        </View>

  );
}

const styles = StyleSheet.create({
    container: {
    padding:20,
       backgroundColor: '#7092B0'
    
      },
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
      },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 90,
    overflow: 'hidden',
    alignSelf: 'center', 
    borderWidth: 2, 
    borderColor: 'white', 

  },
  roundImage: {
    width: '100%',
    height: '100%',

    
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',

    textAlign: 'center',
    
  },
  subText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    
  },
});

export default ProfileInfoC;