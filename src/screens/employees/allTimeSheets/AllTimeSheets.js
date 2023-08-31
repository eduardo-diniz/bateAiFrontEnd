import ButtonC from "../../../components/button/ButtonC";
import { Alert, View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC";
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../AuthContext';
import { useRoute } from '@react-navigation/native';
import { getUser, getTimesheets, createTimesheet, logout } from '../../../services/services';
import { SheetStyle } from './AllTimeSheetsStyle'

const AllTimeSheets = () => {

    const { token, logout: authLogout } = useAuth();
    const route = useRoute();
    const [timeSheets, setTimeSheets] = useState(); 

    const userIdentifier = route.params.userIdentifier;

    const [user, setUser] = useState(); 


    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userData = await getUser(userIdentifier);
            const timeSheetData = await getTimesheets(userIdentifier);
    
            setTimeSheets(timeSheetData?.data)
            setUser(userData?.data);

          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
    
        fetchUserData();
      }, [userIdentifier, token]);
    return (
        <View style={SheetStyle.container}>
            <ProfileInfoC departament={'T.I'} name={user?.name} nick={user?.cpf} picture="https://placekitten.com/200/200" />
            <View style={SheetStyle.titleContainer}>
                <Text style={SheetStyle.titleText}>Todos Registros</Text>
            </View>
            <ScrollView style={SheetStyle.listViewContainer}>
                {!timeSheets? <Text>Loading...</Text> : (
                    <ListViewC name={''} list={timeSheets} />

                ) }
            </ScrollView>
        </View>
    );
}



export default AllTimeSheets;