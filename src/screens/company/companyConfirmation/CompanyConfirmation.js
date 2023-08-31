import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import CompanyConfStyle from './CompanyConfStyle'
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const ConfirmacaoCompany = ({ navigation }) => {
  
    const route = useRoute();
    const userIdentifier = route.params.userIdentifier;

    console.log('first', userIdentifier)
    
    const handleAddDepartament= () => {
        navigation.navigate('AddDepartament', { userIdentifier: userIdentifier});
    };

    const handleHome = () => {
        navigation.navigate('HomeCompany', { userIdentifier: userIdentifier })
    };

    return (
        <View style={CompanyConfStyle.container}>
            <View style={CompanyConfStyle.blueBackground} />
            <View style={CompanyConfStyle.contentContainer}>
                <View style={CompanyConfStyle.whiteSquare}>
                    <Image source={require('../../../../assets/success.png')} style={CompanyConfStyle.image} />

                    <Text style={CompanyConfStyle.message}>
                        Empresa criada com sucesso! {'\n'} Para começar a convidar funcionários, crie um departamento.
                    </Text>
                    <ButtonC name={'criar departamento'} onPress={handleAddDepartament} />
                    <ButtonC name={'Ver Empresa'} onPress={handleHome} />

                </View>

            </View>
        </View>
    );
};

export default ConfirmacaoCompany;
