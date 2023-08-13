import ButtonC from "../../../components/button/ButtonC";
import { Alert, View, StyleSheet, Image, Text , ScrollView   } from 'react-native';
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
        <ScrollView>
        <View>

        <ProfileInfoC departament={'T.I'} name={'Maria Eduarda'} nick={'Maria'} picture="https://placekitten.com/200/200" />

        <ListViewC name={'Todos Registros'} list={dateArray}></ListViewC>
        </View>
        </ScrollView>


    )
}

export default AllTimeSheets;