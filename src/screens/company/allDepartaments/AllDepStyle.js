import { StyleSheet } from 'react-native';

const AllDepStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  departmentsText: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 20, 
  },
  objectsContainer: {
    flex: 1,
    marginTop: 20,
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
  iconText: {
    fontSize: 18,
    color: 'gray', 
    marginHorizontal: 5,
  },
  addedText: {
    fontSize: 12,
    color: 'gray',
  },
  noDepartmentsText: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
  },
  departmentItem: {
    flexDirection: 'row',
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'gray', 
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  logoutButton: {
    position: 'absolute',
    top: 30,
    left: 280,
    zIndex: 999,
  },  

});

export default AllDepStyle;
