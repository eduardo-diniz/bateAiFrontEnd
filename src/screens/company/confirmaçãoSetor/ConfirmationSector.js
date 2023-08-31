import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import ConfSectorStyle from './ConfSectorStyle'
import { useTranslation } from 'react-i18next';


const DepartamentConfirmation = ({ navigation }) => {
    const { t } = useTranslation();

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
                    {t('thedepartmenthasbeensuccessfullycreated!')} {'\n'} 
                    {t('youcannowinviteyouremployees!')}{'\n'} 
                    {t('Oorifyoupreferyoucancreateotherdepartments!')}
                    </Text>
                    <ButtonC name={t('inviteemployees')} onPress={handleverRegistros} />
                    <ButtonC name={t('createdepartment')} onPress={handleverRegistros2} />
                </View>

            </View>
        </View>
    );
};



export default DepartamentConfirmation;
