import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonC from '../../../components/button/ButtonC';
import { useNavigation } from '@react-navigation/native';

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

const AddArea = () => {

    const [area, setArea] = useState('');
    const [homeoffice, setHomeOffice] = useState('');
    const [horasnoturnas, setHorasNoturnas] = useState('');
    const [finaldesemana, setFinaldeSemana] = useState('');
    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('ConfirmacaoSetor');
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Adicionar Setor</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>setor:</Text>
                    <TextInput
                        style={styles.input}
                        value={area}
                        onChangeText={setArea}
                    />

                    <Text style={styles.label}>permite home office:</Text>
                    <View style={styles.radioButtonContainer}>
                        <CustomRadioButton
                            label="Sim"
                            selected={homeoffice === 'sim'}
                            onPress={() => setHomeOffice('sim')}
                        />
                        <CustomRadioButton
                            label="Não"
                            selected={homeoffice === 'não'}
                            onPress={() => setHomeOffice('não')}
                        />
                    </View>
                    {/* ... */}
                    <Text style={styles.label}>permite horas noturnas:</Text>
                    <View style={styles.radioButtonContainer}>
                        <CustomRadioButton
                            label="Sim"
                            selected={horasnoturnas === 'sim'}
                            onPress={() => setHorasNoturnas('sim')}
                        />
                        <CustomRadioButton
                            label="Não"
                            selected={horasnoturnas === 'não'}
                            onPress={() => setHorasNoturnas('não')}
                        />
                    </View>
                    {/* ... */}
                    <Text style={styles.label}>permite finais de semana</Text>
                    <View style={styles.radioButtonContainer}>
                        <CustomRadioButton
                            label="Sim"
                            selected={finaldesemana === 'sim'}
                            onPress={() => setFinaldeSemana('sim')}
                        />
                        <CustomRadioButton
                            label="Não"
                            selected={finaldesemana === 'não'}
                            onPress={() => setFinaldeSemana('não')}
                        />
                    </View>
                </View>
                <ButtonC style={styles.button} name="Enviar" onPress={handleSubmit} />
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


export default AddArea;
