import React, { useState } from "react";
import ButtonC from '../../../components/button/ButtonC';
import { View, StyleSheet, Image, Text } from 'react-native';
import ModalPopup from "../../../components/modal/ModalPoup";
import { useNavigation } from '@react-navigation/native';

const ShareDep = () => {
    const navigation = useNavigation();  

    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState(false);
    const [message, setMessage] = useState(false);

    const handleButtonPress = () => {
        setStatus(true);
        setMessage('Link copiado com sucesso');
        setVisible(true);
    };

    const handleButtonPress1 = () => {
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.blueBlock}>
                <Image source={require('../../../../assets/image_IT.png')} style={styles.image} />
            </View>
            <Text style={styles.titleText}>Tecnologia da Informação</Text>
            <View style={styles.header}>
                <Text style={styles.codigoText}>Código: 72ABC</Text>
                <View style={styles.shareContainer}>
                    <ModalPopup visible={visible} text={message} status={status}>
                        <View style={{ alignItems: 'center' }}></View>
                        <ButtonC name={'Ok'} onPress={handleButtonPress1} />
                    </ModalPopup>
                    <ButtonC name={'Compartilhar'} onPress={handleButtonPress} />
                </View>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Home Office: Yes</Text>
                <Text style={styles.infoText}>Weekend: No</Text>
                <Text style={styles.infoText}>Horas Noturnas: No</Text>
                <Text style={styles.infoText}>Funcionários no setor: 12</Text>
                <Text style={styles.infoText}>Funcionários ativos no setor: 8</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },
    blueBlock: {
        backgroundColor: '#2D9CDB',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        opacity: 15,
    },
    image: {
        width: 100,
        height: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    codigoText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    shareContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareText: {
        fontSize: 16,
        marginRight: 5,
    },
    shareImage: {
        width: 30,
        height: 30,
    },
    infoContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ShareDep;

