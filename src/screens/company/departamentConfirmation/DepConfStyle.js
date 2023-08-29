import { StyleSheet } from 'react-native';


const DepConfStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    blueBlock: {
        backgroundColor: '#7092B0',
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    image: {
        width: 100,
        height: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    codigoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    shareContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareText: {
        fontSize: 16,
        marginRight: 5,
    },
    shareImage: {
        width: 30,
        height: 30,
    },
    infoContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default DepConfStyle;