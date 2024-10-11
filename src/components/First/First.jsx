import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

const First = () => {
  const [name, setName] = useState('Hitesh');
  const [userName, setUserName] = useState('');
  return (
    <View style={{padding: 5, marginTop: 10}}>
      <Text style={{fontSize: 30, fontWeight: 900, color: 'green'}}>First</Text>
      <Text style={{fontSize: 30, fontWeight: 900, color: 'green'}}>
        {name}
      </Text>
      <Button title="Press Here" onPress={() => setName('Bhoot')} />

      <TextInput
        placeholder="Enter UserName"
        style={{
          height: 40,
          margin: 5,
          borderColor: 'green',
          borderWidth: 2,
          marginTop: 25,
          marginBottom: 25,
          padding: 10,
          fontSize: 20,
        }}
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 900,
          marginVertical: 10,
        }}>
        {' '}
        userName : {userName}
      </Text>

      <Button title="clear" onPress={() => setUserName('')} />
    </View>
  );
};

export default First;
