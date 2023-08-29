import React from 'react';
import { View, Text, Image } from 'react-native';
import DepConfStyle from './DepConfStyle';

const TechnologyScreen = () => {
  return (
    <View style={DepConfStyle.container}>
      <View style={DepConfStyle.blueBlock}>
        <Image source={require('../../../../assets/image_IT.png')} style={DepConfStyle.image} />
      </View>
      <View style={DepConfStyle.header}>
        <Text style={DepConfStyle.codigoText}>Código: 72ABC</Text>
        <View style={DepConfStyle.shareContainer}>
          <Text style={DepConfStyle.shareText}>Compartilhar</Text>
          <Image source={require('../../../../assets/image_Share.png')} style={DepConfStyle.shareImage} />
        </View>
      </View>
      <View style={DepConfStyle.infoContainer}>
        <Text style={DepConfStyle.infoText}>Home Office: Yes</Text>
        <Text style={DepConfStyle.infoText}>Weekend: No</Text>
        <Text style={DepConfStyle.infoText}>Horas Noturnas: No</Text>
        <Text style={DepConfStyle.infoText}>Funcionários no setor: 12</Text>
        <Text style={DepConfStyle.infoText}>Funcionários ativos no setor: 8</Text>
      </View>
    </View>
  );
};

export default TechnologyScreen;
