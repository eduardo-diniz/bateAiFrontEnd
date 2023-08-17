import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TechnologyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blueBlock}>
        <Image source={require('../../../../assets/image_IT.png')} style={styles.image} />
      </View>
      <View style={styles.header}>
        <Text style={styles.codigoText}>Código: 72ABC</Text>
        <View style={styles.shareContainer}>
          <Text style={styles.shareText}>Compartilhar</Text>
          <Image source={require('../../../../assets/image_Share.png')} style={styles.shareImage} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Home Office: Yes</Text>
        <Text style={styles.infoText}>Weekend: No</Text>
        <Text style={styles.infoText}>Horas Noturnas: No</Text>
        <Text style={styles.infoText}>Funcionários no setor: 12</Text>
        <Text style={styles.infoText}>Funcionários ativos no setor: 8</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  blueBlock: {
    backgroundColor: '#7092B0',
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  image: {
    width: 100,
    height: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  codigoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    fontSize: 16,
    marginRight: 5,
  },
  shareImage: {
    width: 30,
    height: 30,
  },
  infoContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TechnologyScreen;
