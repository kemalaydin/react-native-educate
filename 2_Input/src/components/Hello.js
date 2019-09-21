import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Hello extends Component {

    state = {
        status: false,
    };

    onChangeName = () => {
      this.setState({
          status: !this.state.status,
      });
    };
  render() {
    return (
        <View style={styles.container}>
            <Text>
                Değer : {String(this.state.status)}
            </Text>
            <Button
                title={"Değiştir"}
                color="red"
                onPress={this.onChangeName}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
