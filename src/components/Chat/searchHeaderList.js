import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';

export default function SearchHeaderList() {
  return (
    <Formik onSubmit={() => console.log('yes')} initialValues={{search: ''}}>
      {({values, handleBlur, handleChange, handleSubmit}) => (
        <View style={styles.searchWrapper}>
          <TextInput
            value={values.search}
            onBlur={handleBlur('search')}
            onChangeText={handleChange('search')}
            placeholder="Search.."
            returnKeyType='search'
          />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D3D4'
  }
});