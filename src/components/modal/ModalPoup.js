import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, Animated, Image, Text } from 'react-native';

const ModalPopup = ({ visible, children, text, status }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
           { status ? 

             <Image style={styles.image}
             
             source={require('../../../assets/success.png' )}
             />
             :
           <Image style={styles.image2}
           
           source={require('../../../assets/unsuccess.png' )}
           />
          }
               <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>{text}
                </Text>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = {
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: 'center' 
  },
  image2: {
    height: 70,
    width: 70,
    alignSelf: 'center' 
  },
  text: {
    marginVertical: 30,
    fontSize: 20,
    textAlign: 'center',
  },
};

export default ModalPopup;
