import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';
import { createDepartment } from '../../../services/services';

const CustomRadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity
        style={[styles.radioButton, selected ? styles.radioButtonSelected : null]}
        onPress={onPress}
    >
        <Text style={[styles.radioButtonLabel, selected ? styles.radioButtonLabelSelected : null]}>
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
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Add Department</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Department:</Text>
                    <TextInput
                        style={styles.input}
                        value={department}
                        onChangeText={setDepartment}
                    />

                    <Text style={styles.label}>Trade Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={departamentId}
                        onChangeText={setDepartamentId}
                    />

                    <Text style={styles.label}>Tax ID (CNPJ):</Text>
                    <TextInput
                        style={styles.input}
                        value={taxId}
                        onChangeText={setTaxId}
                    />
                    <Text style={styles.label}>Allow home office:</Text>
                    <View style={styles.radioButtonContainer}>
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
                    
                    <Text style={styles.label}>Allow night shifts:</Text>
                    <View style={styles.radioButtonContainer}>
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
                    
                    <Text style={styles.label}>Allow weekends:</Text>
                    <View style={styles.radioButtonContainer}>
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
                <ButtonC style={styles.button} name="Submit" onPress={handleSubmit} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 35,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    form: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    radioButton: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#2D9CDB',
        borderColor: '#2D9CDB',
    },
    radioButtonLabel: {
        fontSize: 16,
    },
    radioButtonLabelSelected: {
        color: 'white',
    },
});

export default AddDepartment;
