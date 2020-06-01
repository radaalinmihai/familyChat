import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Messages() {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.received}>
        <Text>Received message</Text>
      </View>
      <View style={styles.received}>
        <Text>Received message</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  received: {
    backgroundColor: '#D1D3D4'
  },
});
