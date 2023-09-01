import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AllDepStyle from './AllDepStyle';
import { useAuth } from '../../../AuthContext';
import { departmantByCNPJ, logout } from '../../../services/services';
import { useRoute } from '@react-navigation/native';
import ButtonCompact from "../../../components/buttonCompact/ButtonCompact";
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';




const AllDepartments = () => {
  const { t } = useTranslation()
  const { token, logout: authLogout } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const userIdentifier = route.params.userIdentifier;
  const departamentId = route.params.departamentId;

  const CustomHeaderLeft = () => {
    return (
      <TouchableOpacity onPress={handleLogout} style={AllDepStyle.logoutButton}>
        <MaterialIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
    );
  };
  

  const handlePress = (departamentId1) => {
    navigation.navigate('ShareDep', { userIdentifier: userIdentifier, departamentId: departamentId1 });
  };

  const handleLogout = async () => {
    try {
      await logout();
      authLogout();

      navigation.navigate('Login');

    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [userDepartments, setUserDepartments] = useState([]);

  useEffect(() => {
    const fetchUserDepartments = async () => {
      try {
        const response = await departmantByCNPJ(userIdentifier);
        const userData = response?.data || [];
        setUserDepartments(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserDepartments([]);
      }
    };

    fetchUserDepartments();
  }, [userIdentifier, token]);

  return (
    
    <View style={AllDepStyle.container}>
      <View style={AllDepStyle.header}>
      <Text style={AllDepStyle.departmentsText}>Departments</Text>
          <CustomHeaderLeft />
      </View>
      <View style={AllDepStyle.objectsContainer}>
        <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={AllDepStyle.scrollViewContent}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={AllDepStyle.objectsContainer}>
              {userDepartments.length > 0 ? (
                userDepartments.map((department, index) => (
                  <View style={AllDepStyle.departmentItem} key={index}>
                    <Image source={require('../../../../assets/department.png')} style={AllDepStyle.image} />
                    <TouchableOpacity onPress={() => handlePress(department)} style={AllDepStyle.clickable}>
                      <Text style={AllDepStyle.technologyText}>{department.Name}</Text>
                      <View style={AllDepStyle.labelsContainer}>
                        <Text style={AllDepStyle.hoText}>
                          <Text style={{ color: department.AllowsRemoteWork ? 'green' : 'red' }}>
                            Home Office{' '}
                          </Text>
                        </Text>
                        <Text style={AllDepStyle.fdsText}>
                          <Text style={{ color: department.AllowsWeekendWork ? 'green' : 'red' }}>
                            {t('weekend')}{' '}
                          </Text>
                        </Text>
                        <Text style={AllDepStyle.hnText}>
                          <Text style={{ color: department.AllowsOvertime ? 'green' : 'red' }}>
                            {t('nighthours')}{' '}
                          </Text>
                        </Text>
                      </View>
                      <Text style={AllDepStyle.addedText}>{t('added')} {new Date(department.createdAt).toISOString().split('T')[0]}</Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text style={AllDepStyle.noDepartmentsText}>No departments available.</Text>
              )}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

export default AllDepartments;
