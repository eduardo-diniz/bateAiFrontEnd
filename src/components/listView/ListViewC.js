import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListViewC = ({ name, list }) => {
  return (
    <View>

      <Text style={styles.title}>{name}</Text>
    <View style={styles.view}>
      {list.map((item, index) => (
          <Text key={index} style={styles.text}>
          {item}
        </Text>
      ))}
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
    backgroundColor: '#fffa',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ListViewC;
