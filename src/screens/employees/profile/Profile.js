import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import ListViewC from "../../../components/listView/ListViewC"
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import Label from "../../../components/label/Label";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <ProfileInfoC departament={'T.I'} name={'Maria Eduarda'} nick={'Maria'} picture="https://placekitten.com/200/200" />
      </View>

      <ScrollView style={styles.labelsContainer}>
        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Local de Trabalho"
          description="Home Office"
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Horário"
          description="Flexivel"
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Horas Noturnas"
          description="Sim"
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Home Office"
          description="Sim"
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Trabalho finais de semana"
          description="Sim"
        />

        <Label
          iconSource={require('../../../../assets/favicon.png')}
          title="Lembrar por I.A"
          description="Sim"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  profileInfo: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  labelsContainer: {
    flex: 1,
  },
});

export default Profile;