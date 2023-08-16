import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ButtonC from '../../../components/button/ButtonC';

const ConfirmacaoSetor = ({ navigation }) => {

    const handleverRegistros = () => {
        navigation.navigate('Setores');
    };

    const handleverRegistros2 = () => {
        navigation.navigate('AddArea');
    };

    return (
        <View style={styles.container}>
            <View style={styles.blueBackground} />
            <View style={styles.contentContainer}>
                <View style={styles.whiteSquare}>
                    <Image source={require('../../../../assets/success.png')} style={styles.image} />

                    <Text style={styles.message}>
                    Setor criado com sucesso! {'\n'} Já pode convidar seus funcionarios. {'\n'} Ou se preferir pode criar outros setores!
                    </Text>
                    <ButtonC name={'convidar funcionários'} onPress={handleverRegistros} />
                    <ButtonC name={'Criar Setor'} onPress={handleverRegistros2} />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blueBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#2D9CDB',
    },
    image: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteSquare: {
        backgroundColor: 'white',
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    message: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#2D9CDB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ConfirmacaoSetor;
