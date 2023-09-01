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
import { useTranslation } from 'react-i18next';
import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';

import AllTimeSheetsStyle from './AllTimeSheetsStyle'


const AllTimeSheets = () => {
  const { t } = useTranslation();
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
        const brazilTimezone = 'America/Sao_Paulo';
        const formattedTimeSheets = timeSheetData?.data.map(item => ({
          ...item,
          Time: format(
            utcToZonedTime(new Date(item.Time), brazilTimezone),
            'yyyy-MM-dd HH:mm:ss',
            { timeZone: brazilTimezone }
          ),
        }));
        setTimeSheets(formattedTimeSheets);
        setUser(userData?.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userIdentifier, token]);
  return (
    <View style={AllTimeSheetsStyle.container}>
      <ProfileInfoC departament={'T.I'} name={user?.name} nick={user?.cpf} picture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.pn" />
      <View style={AllTimeSheetsStyle.titleContainer}>
        <Text style={AllTimeSheetsStyle.titleText}>{t('allrecords')}</Text>
      </View>
      <ScrollView style={AllTimeSheetsStyle.listViewContainer}>
        {!timeSheets ? <Text>{t('loading')}</Text> : (
          <ListViewC name={''} list={timeSheets} />
        )}
      </ScrollView>
    </View>
  );
}



export default AllTimeSheets;