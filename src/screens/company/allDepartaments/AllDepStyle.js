import { StyleSheet } from 'react-native';


const AllDepStyle = StyleSheet.create({
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
      noDepartmentsText: {
        fontSize: 18,
        marginTop: 10,
        color: 'gray',
      },
});

export default AllDepStyle;