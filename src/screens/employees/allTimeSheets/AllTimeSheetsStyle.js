import { StyleSheet } from 'react-native';

const SheetStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        
    },
    listViewContainer: {
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 20, 
        marginBottom: 5,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default SheetStyle;
