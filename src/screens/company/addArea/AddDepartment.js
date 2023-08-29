import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { createDepartment } from '../../../services/services';
import addDepStyle from './addDepStyle'

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
    const [department, setDepartment] = useState('');
    const [departamentId, setDepartamentId] = useState(''); 
    const [taxId, setTaxId] = useState('');
    const [homeoffice, setHomeOffice] = useState(false);
    const [nightShift, setNightShift] = useState(false);
    const [weekends, setWeekends] = useState(false);
    const navigation = useNavigation();


    const handleSubmit = async () => {
        const departmentData = {
            Name: department,
            DepartamentId:departamentId,
            CNPJ: taxId,
            AllowsRemoteWork: homeoffice,
            AllowsOvertime: false,
            AllowsAI: false,
            AllowsWeekendWork: weekends,
          };
      
          try {
            const response = await createDepartment(departmentData);
            setMessage('Departamento criado com sucesso!');
            console.log('Resposta da criação do departamento:', response.data);
            navigation.navigate('ConfirmationSector');

          } catch (error) {
            console.error('Erro ao criar departamento:', error);
            setMessage('Erro ao criar departamento');
          }
    };

    return (
        <SafeAreaView style={addDepStyle.container}>
            <KeyboardAwareScrollView contentContainerStyle={addDepStyle.scrollContainer}>
                <Text style={addDepStyle.title}>Add Department</Text>
                <View style={addDepStyle.form}>
                    <Text style={addDepStyle.label}>Department:</Text>
                    <TextInput
                        style={addDepStyle.input}
                        value={department}
                        onChangeText={setDepartment}
                    />

                    <Text style={addDepStyle.label}>Trade Name:</Text>
                    <TextInput
                        style={addDepStyle.input}
                        value={departamentId}
                        onChangeText={setDepartamentId}
                    />

                    <Text style={addDepStyle.label}>Tax ID (CNPJ):</Text>
                    <TextInput
                        style={addDepStyle.input}
                        value={taxId}
                        onChangeText={setTaxId}
                    />
                    <Text style={addDepStyle.label}>Allow home office:</Text>
                    <View style={addDepStyle.radioButtonContainer}>
                        <CustomRadioButton
                            label="Yes"
                            selected={homeoffice === 'yes'}
                            onPress={() => setHomeOffice('yes')}
                        />
                        <CustomRadioButton
                            label="No"
                            selected={homeoffice === 'no'}
                            onPress={() => setHomeOffice('no')}
                        />
                    </View>
                    
                    <Text style={addDepStyle.label}>Allow night shifts:</Text>
                    <View style={addDepStyle.radioButtonContainer}>
                        <CustomRadioButton
                            label="Yes"
                            selected={nightShift === 'yes'}
                            onPress={() => setNightShift('yes')}
                        />
                        <CustomRadioButton
                            label="No"
                            selected={nightShift === 'no'}
                            onPress={() => setNightShift('no')}
                        />
                    </View>
                    
                    <Text style={addDepStyle.label}>Allow weekends:</Text>
                    <View style={addDepStyle.radioButtonContainer}>
                        <CustomRadioButton
                            label="Yes"
                            selected={weekends === 'yes'}
                            onPress={() => setWeekends('yes')}
                        />
                        <CustomRadioButton
                            label="No"
                            selected={weekends === 'no'}
                            onPress={() => setWeekends('no')}
                        />
                    </View>
                </View>
                <ButtonC style={addDepStyle.button} name="Submit" onPress={handleSubmit} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};


export default AddDepartment;
