import {View, Text, Button} from 'react-native';
import React from 'react';
import {First, Styling} from './src/components';

const App = () => {
  return (
    <View style={{padding: 5, margin: 10, marginTop: 100}}>
      <Text style={{fontSize: 30, fontWeight: 900, color: 'green'}}>
        Hitesh Bhoot React Native Developer
      </Text>
      <Text
        style={{fontSize: 30, fontWeight: 900, color: 'green', marginTop: 10}}>
        Hello
      </Text>
      <Button title="Press Here" />
      <First />
      <Styling />
    </View>
  );
};

export default App;
