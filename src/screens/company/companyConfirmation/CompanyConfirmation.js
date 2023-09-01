import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';
import CompanyConfStyle from './CompanyConfStyle'
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const ConfirmacaoCompany = ({ navigation }) => {
    const { t } = useTranslation()
  
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
                        {t('thecompanysuccessfullycreated')} {'\n'}
                        {t('tostartinvitingemployeesreateadepartment')}
                    </Text>
                    <ButtonC name={t('adddepartment')} onPress={handleAddDepartament} />
                    <ButtonC name={t('viewCompany')} onPress={handleHome} />

                </View>

            </View>
        </View>
    );
};

export default ConfirmacaoCompany;
