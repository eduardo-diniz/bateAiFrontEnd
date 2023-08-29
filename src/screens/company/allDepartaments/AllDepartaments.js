import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AllDepStyle from './AllDepStyle'


const AllDepartments = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ShareDep');
  };

  return (
    <View style={AllDepStyle.container}>
      <Text style={AllDepStyle.departmentsText}>Departments</Text>
      <View style={AllDepStyle.objectsContainer}>
        <View style={AllDepStyle.firstObject}>
          <Image source={require('../../../../assets/image_IT.png')} style={AllDepStyle.image} />
          <TouchableOpacity onPress={handlePress} style={AllDepStyle.clickable}>
            <Text style={AllDepStyle.technologyText}>Information Technology</Text>
            <View style={AllDepStyle.labelsContainer}>
              <Text style={AllDepStyle.hoText}>Remote</Text>
              <Text style={AllDepStyle.fdsText}>Weekends</Text>
              <Text style={AllDepStyle.hnText}>Night Shift</Text>
            </View>
            <Text style={AllDepStyle.addedText}>Added on 01/13/2023</Text>
          </TouchableOpacity>
        </View>
        <View style={AllDepStyle.firstObject}>
          <Image source={require('../../../../assets/image_ADM.png')} style={AllDepStyle.image} />
          <TouchableOpacity style={AllDepStyle.clickable}>
            <Text style={AllDepStyle.technologyText}>Administrative</Text>
            <View style={AllDepStyle.labelsContainer}>
              <Text style={AllDepStyle.hoText}>Remote</Text>
              <Text style={AllDepStyle.fdsText}>Weekends</Text>
              <Text style={AllDepStyle.hnText}>Night Shift</Text>
            </View>
            <Text style={AllDepStyle.addedText}>Added on 01/13/2023</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AllDepartments;
