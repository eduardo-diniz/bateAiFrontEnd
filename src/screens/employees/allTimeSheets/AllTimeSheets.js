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

const AllTimeSheets = () => {

    const { token, logout: authLogout } = useAuth();
    const route = useRoute();
    const [timeSheets, setTimeSheets] = useState(); 

    const userIdentifier = route.params.userIdentifier;

    const [user, setUser] = useState(); 

    console.log('userIdentifier', userIdentifier)

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userData = await getUser(userIdentifier);
            const timeSheetData = await getTimesheets(userIdentifier);
    
            setTimeSheets(timeSheetData?.data)
            setUser(userData?.data);
            console.log('timeSheets', timeSheets)

          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
    
        fetchUserData();
      }, [userIdentifier, token]);
    return (
        <View style={styles.container}>
            <ProfileInfoC departament={'T.I'} name={user?.name} nick={user?.cpf} picture="https://placekitten.com/200/200" />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Todos Registros</Text>
            </View>
            <ScrollView style={styles.listViewContainer}>
                {!timeSheets? <Text>Loading...</Text> : (
                    <ListViewC name={''} list={timeSheets} />

                ) }
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