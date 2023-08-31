import React from 'react';
import { Button, View } from 'react-native';
import ButtonTStyle from './ButtonTStyle';

import { useTranslation } from 'react-i18next';

const ButtonT = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={ButtonTStyle.buttonContainer}>
      <Button style={ButtonTStyle.button} title="English" onPress={() => changeLanguage('en')} />
      <View style={ButtonTStyle.buttonSpacing} /> 
      <Button style={ButtonTStyle.button} title="Português" onPress={() => changeLanguage('pt')} />
    </View>
  );
};


export default ButtonT;
