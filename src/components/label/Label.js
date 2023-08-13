import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Label = ({ iconSource, title, description, iconRightSource, iconRightText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    iconContainer: {
      marginRight: 10,
    },
    icon: {
      width: 24,
      height: 24,
    },
    infoContainer: {
      flex: 1,
      marginRight: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#888',
    },
    iconRightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
  });