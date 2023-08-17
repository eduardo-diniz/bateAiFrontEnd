import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AllDepartments = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ShareDep');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.departmentsText}>Departments</Text>
      <View style={styles.objectsContainer}>
        <View style={styles.firstObject}>
          <Image source={require('../../../../assets/image_IT.png')} style={styles.image} />
          <TouchableOpacity onPress={handlePress} style={styles.clickable}>
            <Text style={styles.technologyText}>Information Technology</Text>
            <View style={styles.labelsContainer}>
              <Text style={styles.hoText}>Remote</Text>
              <Text style={styles.fdsText}>Weekends</Text>
              <Text style={styles.hnText}>Night Shift</Text>
            </View>
            <Text style={styles.addedText}>Added on 01/13/2023</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstObject}>
          <Image source={require('../../../../assets/image_ADM.png')} style={styles.image} />
          <TouchableOpacity style={styles.clickable}>
            <Text style={styles.technologyText}>Administrative</Text>
            <View style={styles.labelsContainer}>
              <Text style={styles.hoText}>Remote</Text>
              <Text style={styles.fdsText}>Weekends</Text>
              <Text style={styles.hnText}>Night Shift</Text>
            </View>
            <Text style={styles.addedText}>Added on 01/13/2023</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingLeft: 20,
  },
  departmentsText: {
    fontSize: 24,
    alignSelf: 'center',
    position: 'absolute',
    top: 20,
  },
  objectsContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  firstObject: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  clickable: {
    marginBottom: 10,
  },
  technologyText: {
    fontSize: 18,
  },
  labelsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  hoText: {
    fontSize: 18,
    color: 'green',
    marginHorizontal: 5,
  },
  fdsText: {
    fontSize: 18,
    color: 'orange',
    marginHorizontal: 5,
  },
  hnText: {
    fontSize: 18,
    color: 'orange',
    marginHorizontal: 5,
  },
  addedText: {
    fontSize: 12,
  },
  object2: {
    backgroundColor: 'lightgreen',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default AllDepartments;
