import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
          <Text style={styles.cardText}> Kemal Aydın</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        backgroundColor: "#B3F7FF",
        color: "#000",
        padding: 10,
        fontSize: 18,
    },
});
