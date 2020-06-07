import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

export default function RenderItem({item}) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 15,
  },
});
