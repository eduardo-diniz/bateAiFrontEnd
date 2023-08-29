import { StyleSheet } from 'react-native';


const addDepStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 35,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    form: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    radioButton: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#2D9CDB',
        borderColor: '#2D9CDB',
    },
    radioButtonLabel: {
        fontSize: 16,
    },
    radioButtonLabelSelected: {
        color: 'white',
    },
});

export default addDepStyle;