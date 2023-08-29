import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import ConfSectorStyle from './ConfSectorStyle'

const DepartamentConfirmation = ({ navigation }) => {

    const handleverRegistros = () => {
        navigation.navigate('AllDepartments');
    };

    const handleverRegistros2 = () => {
        navigation.navigate('AddCompany');
    };

    return (
        <View style={ConfSectorStyle.container}>
            <View style={ConfSectorStyle.blueBackground} />
            <View style={ConfSectorStyle.contentContainer}>
                <View style={ConfSectorStyle.whiteSquare}>
                    <Image source={require('../../../../assets/success.png')} style={ConfSectorStyle.image} />

                    <Text style={ConfSectorStyle.message}>
                    Setor criado com sucesso! {'\n'} Já pode convidar seus funcionarios. {'\n'} Ou se preferir pode criar outros setores!
                    </Text>
                    <ButtonC name={'convidar funcionários'} onPress={handleverRegistros} />
                    <ButtonC name={'criar setor'} onPress={handleverRegistros2} />
                </View>

            </View>
        </View>
    );
};



export default DepartamentConfirmation;
