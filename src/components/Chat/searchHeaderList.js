import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function SearchHeaderList({setSearch, search}) {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        value={search}
        onChangeText={search => setSearch(search)}
        placeholder="Search.."
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D1D3D4',
  },
});
