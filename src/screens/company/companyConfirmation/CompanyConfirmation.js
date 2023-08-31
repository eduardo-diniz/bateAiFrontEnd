import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import CompanyConfStyle from './CompanyConfStyle'
import { useTranslation } from 'react-i18next';

const ConfirmacaoCompany = ({ navigation }) => {
    const { t } = useTranslation()

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
                        {t('Thecompanysuccessfullycreated')} {'\n'}
                        {t('Tostartinvitingemployeesreateadepartment')}
                    </Text>
                    <ButtonC name={'criar departamento'} onPress={handleverRegistros} />
                </View>

            </View>
        </View>
    );
};

export default ConfirmacaoCompany;
