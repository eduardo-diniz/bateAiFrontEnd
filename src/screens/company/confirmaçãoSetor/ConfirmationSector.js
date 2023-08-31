import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import ConfSectorStyle from './ConfSectorStyle'
import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const DepartamentConfirmation = ({ navigation }) => {
    const { t } = useTranslation();

    const route = useRoute();
    const userIdentifier = route.params.userIdentifier;
    const departament = route.params.departamentId;
    const handleverRegistros = () => {
        navigation.navigate('AllDepartments', { userIdentifier: userIdentifier });
    };
    console.log('departament', departament)

    const handleverRegistros2 = (departament) => {
        navigation.navigate('ShareDep', { userIdentifier: userIdentifier, departamentId: departament });
    };

    return (
        <View style={ConfSectorStyle.container}>
            <View style={ConfSectorStyle.blueBackground} />
            <View style={ConfSectorStyle.contentContainer}>
                <View style={ConfSectorStyle.whiteSquare}>
                    <Image source={require('../../../../assets/success.png')} style={ConfSectorStyle.image} />

                    <Text style={ConfSectorStyle.message}>
                        {t('thedepartmenthasbeensuccessfullycreated!')} {'\n'}
                        {t('youcannowinviteyouremployees!')}{'\n'}
                        {t('Oorifyoupreferyoucancreateotherdepartments!')}
                    </Text>
                    <ButtonC name={t('inviteemployees')} onPress={() => handleverRegistros2(departament)} />
                    <ButtonC name={t('createdepartment')} onPress={handleverRegistros} />
                </View >

            </View >
        </View >
    );
};



export default DepartamentConfirmation;
