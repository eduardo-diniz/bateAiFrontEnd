import ButtonC from "../../../components/button/ButtonC"
import { Alert, View , StyleSheet, Image, Text} from 'react-native';
import ListViewC from "../../../components/listView/ListViewC"
import ProfileInfoC from "../../../components/profileInfo/ProfileInfoC";
import ModalPopup from "../../../components/modal/ModalPoup";
import react, {useState} from "react";

  const dateArray = [
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023',
    '18:00 20/06/2023'
  ];
const Home = () => {
    const [visible, setVisible] = useState(false);

    
    const handleverPerfil = () => {
        Alert.alert('Tela Nao criada')  };
        
    const handleverRegistros = () => {
        Alert.alert('Tela Nao criada')  };

    const handleButtonPress = () => {
        setVisible(true)  };

        const handleButtonPress1 = () => {
            setVisible(false)  };
    return (
            <View>
                <ProfileInfoC departament={'T.I'} name={'Maria Eduarda'} nick={'Maria'} picture="https://placekitten.com/200/200" />

                <View style={styles.viewButtons}>
                    <ButtonC name={'Ver Perfil'} onPress={handleverPerfil}/>
                    <ButtonC name={'Ver Registros'} onPress={handleverRegistros}/>
                </View>

                <ListViewC name={'Ultimos Registros'} list={dateArray}></ListViewC>
                
    <ModalPopup visible={visible}>
     
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../../../../assets/success.png')}
            style={{ height: 50, width: 50, marginVertical: 10 }}
          />
        </View>
        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
        Ponto batido com sucesso
                </Text>
        <ButtonC name={'Ok'} onPress={handleButtonPress1}/>
      </ModalPopup>
                <ButtonC name={'Bater Ponto'} onPress={handleButtonPress}/>
            </View>

)


}

const styles = StyleSheet.create({
    viewButtons: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 20, 
      },
    
});

export default Home;