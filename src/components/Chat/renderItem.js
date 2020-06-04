import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RenderItem({item}) {
  return (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15
  }
});