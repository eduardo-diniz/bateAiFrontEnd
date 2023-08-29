import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import CompanyConfStyle from './CompanyConfStyle'

const ConfirmacaoCompany = ({ navigation }) => {

    const handleverRegistros = () => {
        navigation.navigate('AddDepartament');
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
                    <ButtonC name={'criar departamento'} onPress={handleverRegistros} />
                </View>

            </View>
        </View>
    );
};

export default ConfirmacaoCompany;
