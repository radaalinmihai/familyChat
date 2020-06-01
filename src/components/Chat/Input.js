import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input() {
  return (
    <Formik initialValues={{message: ''}}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View
          style={{
            borderTopColor: '#00CF91',
            borderTopWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10
          }}>
          <TextInput
            onChangeText={handleChange('message')}
            onBlur={handleBlur('message')}
            value={values.message}
            placeholder="Type something.."
          />
          <MaterialCommunity name="send" size={30} color='#00CF91' />
        </View>
      )}
    </Formik>
  );
}
