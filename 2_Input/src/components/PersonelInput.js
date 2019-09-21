import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class PersonelInput extends Component {
  
  state = {
    name: 'Kemal',
  };

  textEdit = (text) => {
    this.setState({
      name: text,
    });
  };

  render() {
    return (
      <View style={styles.inputcont}>
        <TextInput 
          keyboardAppearance='dark' // Keyboard temasını dark yapar
          autoCapitalize='words' // her kelime geçişinde otomatik olarak büyük harf keyboad gelir
          autoCompleteType='name' // otomatik tamamlamada ne kullanacağı. Örneğin off kapatır. Name dersek adıyla tamamlamaya çalışır
          clearTextOnFocus={true}  // focus olduğu zaman içerisindeki yazıyı temizler.
          editable={true} // htmldeki disabled komutu ile aynı.
          keyboardType='number-pad' // keyboard hangi tipte açılacak onu belirler. Örneğin number-pad sadece sayıların olduğu keyboarddır.
          maxLength={5} // max alabileceği uzunluk 5 karakter. 
          value={this.state.name}
          style={styles.input} 
          onChangeText={this.textEdit}
        />
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        width: 300,
        height: 35,
    },
    inputcont: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
