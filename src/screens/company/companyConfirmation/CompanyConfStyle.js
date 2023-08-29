import { StyleSheet } from 'react-native';


const CompanyConfStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blueBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#2D9CDB',
    },
    image: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginBottom: 10
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteSquare: {
        backgroundColor: 'white',
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    message: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#2D9CDB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default CompanyConfStyle;