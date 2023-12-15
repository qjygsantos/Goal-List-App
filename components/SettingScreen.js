import React from 'react';
import { View, Text, Button } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button title="Go back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default SettingsScreen;
