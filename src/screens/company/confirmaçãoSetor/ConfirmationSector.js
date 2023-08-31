import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import ConfSectorStyle from './ConfSectorStyle'
import { useRoute } from '@react-navigation/native';

const DepartamentConfirmation = ({ navigation }) => {
    
    const route = useRoute();
    const userIdentifier = route.params.userIdentifier;
    const departament = route.params.departamentId;
    const handleverRegistros = () => {
        navigation.navigate('AllDepartments',  { userIdentifier: userIdentifier});
    };
    console.log('departament', departament)

    const handleverRegistros2 = (departament) => {
        navigation.navigate('ShareDep',  { userIdentifier: userIdentifier, departamentId: departament});
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
                    <ButtonC name={'Compartilhar Setor'} onPress={() => handleverRegistros2(departament)} />
                    <ButtonC name={'Ver setores'} onPress={handleverRegistros} />
                </View>

            </View>
        </View>
    );
};



export default DepartamentConfirmation;
