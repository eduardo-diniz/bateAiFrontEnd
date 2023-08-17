import ButtonC from "../../../components/button/ButtonC";
import { Alert, View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC";
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const dateArray = [
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023'
];
const AllTimeSheets = () => {
    return (
        <View style={styles.container}>
            <ProfileInfoC departament={'T.I'} name={'Maria Eduarda'} nick={'Maria'} picture="https://placekitten.com/200/200" />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Todos Registros</Text>
            </View>
            <ScrollView style={styles.listViewContainer}>
                <ListViewC name={''} list={dateArray} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    listViewContainer: {
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 20, 
        marginBottom: 5,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AllTimeSheets;