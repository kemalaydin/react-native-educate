/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Hello from './src/components/Hello';
import PersonelInput from './src/components/PersonelInput';

const App = () => {
  demo = () => {
    Alert.alert("başlıklı mesaj","Bu bir ios platformuna has resim");
  };
  return (
      <View style={styles.container}>
         
          <PersonelInput />
          
      </View>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  imageStyle: {
    flex: 1,
    flexDirection: 'row',
    color: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: '#000',
    width: '100%',
    height: 35,
    padding: 5,
  },
});

export default App;
