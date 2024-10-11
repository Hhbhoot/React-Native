import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const style = StyleSheet.create({
  container: {
    margin: 10,
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#000',
    padding: 10,
    width: 'auto',
  },
});

const Styling = () => {
  return (
    <View>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          backgroundColor: 'red',
          padding: 10,
          marginHorizontal: 'auto',
        }}>
        Styling
      </Text>
      <Text style={style.container}>Helllo World</Text>
    </View>
  );
};

export default Styling;
