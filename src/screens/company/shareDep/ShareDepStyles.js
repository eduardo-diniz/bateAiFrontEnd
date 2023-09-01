import { StyleSheet } from 'react-native';

const DepStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', 
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333', 
  },
  blueBlock: {
    backgroundColor: '#2D9CDB',
    width: '100%',
    height: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    opacity: 0.8, 
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
    marginTop: 20, 
  },
  codigoText: {
    fontSize: 16    ,
    fontWeight: 'bold',
    color: '#333', 
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    fontSize: 16,
    marginRight: 5,
    color: '#333',
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
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
});

export default DepStyle;
