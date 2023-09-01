import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { createDepartment } from '../../../services/services';
import addDepStyle from './addDepStyle'
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';

const CustomRadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity
        style={[addDepStyle.radioButton, selected ? addDepStyle.radioButtonSelected : null]}
        onPress={onPress}
    >
        <Text style={[addDepStyle.radioButtonLabel, selected ? addDepStyle.radioButtonLabelSelected : null]}>
            {label}
        </Text>
    </TouchableOpacity>
);

const AddDepartment = () => {
    const { t } = useTranslation()
    const [department, setDepartment] = useState('');
    const [departamentId, setDepartamentId] = useState(''); 
    const [homeoffice, setHomeOffice] = useState(false);
    const [nightShift, setNightShift] = useState(false);
    const [weekends, setWeekends] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const userIdentifier = route.params.userIdentifier;
    const [taxId, setTaxId] = useState(userIdentifier);

    const handleSubmit = async () => {
        const departmentData = {
            Name: department,
            DepartamentId: departamentId,
            CNPJ: taxId,
            AllowsRemoteWork: homeoffice,
            AllowsOvertime: weekends,
            AllowsAI: false,
            AllowsWeekendWork: weekends,
        };

        try {
            const response = await createDepartment(departmentData);
            navigation.navigate('ConfirmationSector', { userIdentifier: userIdentifier, departamentId:response?.data} );
            console.log('response?.data', response?.data)
          } catch (error) {
            console.error('Erro ao criar departamento:', error);
          }
    };

    return (
        <SafeAreaView style={addDepStyle.container}>
            <KeyboardAwareScrollView contentContainerStyle={addDepStyle.scrollContainer}>
                <Text style={addDepStyle.title}>{t('adddepartment')}</Text>
                <View style={addDepStyle.form}>
                    <Text style={addDepStyle.label}>{t('departament')}</Text>
                    <TextInput
                        style={addDepStyle.input}
                        value={department}
                        onChangeText={setDepartment}
                    />

                    <Text style={addDepStyle.label}>{t('departamentID')}</Text>
                    <TextInput
                        style={addDepStyle.input}
                        value={departamentId}
                        onChangeText={setDepartamentId}
                    />

                    <Text style={addDepStyle.label}>(CNPJ):</Text>
                    <TextInput
                        style={addDepStyle.input}
                        value={userIdentifier}
                        
                    />
                    <Text style={addDepStyle.label}>{t('allowhomeoffice')}:</Text>
                    <View style={addDepStyle.radioButtonContainer}>
                        <CustomRadioButton
                            label= {t('yes')}
                            selected={homeoffice === 'yes'}
                            onPress={() => setHomeOffice('yes')}
                        />
                        <CustomRadioButton
                            label={t('no')}
                            selected={homeoffice === 'no'}
                            onPress={() => setHomeOffice('no')}
                        />
                    </View>

                    <Text style={addDepStyle.label}>{t('allownightshifts')}:</Text>
                    <View style={addDepStyle.radioButtonContainer}>
                        <CustomRadioButton
                            label={t('yes')}
                            selected={nightShift === 'yes' }
                            onPress={() => setNightShift('yes')}
                        />
                        <CustomRadioButton
                            label={t('no')}
                            selected={nightShift === 'no' }
                            onPress={() => setNightShift('no')}
                        />
                    </View>

                    <Text style={addDepStyle.label}>{t('allowweekends')}:</Text>
                    <View style={addDepStyle.radioButtonContainer}>
                        <CustomRadioButton
                            label={t('yes')}
                            selected={weekends === 'yes' }
                            onPress={() => setWeekends('yes')}
                        />
                        <CustomRadioButton
                            label={t('no')}
                            selected={weekends === 'no' }
                            onPress={() => setWeekends('no')}
                        />
                    </View>
                </View>
                <ButtonC style={addDepStyle.button} name={t('submit')} onPress={handleSubmit} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};


export default AddDepartment;
