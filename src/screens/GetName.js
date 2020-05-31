import React from 'react';
import {Formik} from 'formik';
import {View, Keyboard, Text} from 'react-native';
import {TextInput, TouchableNativeFeedback} from 'react-native-gesture-handler';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GetName() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    Keyboard.dismiss();
  }
  return (
    <View style={{paddingHorizontal: 10, justifyContent: 'center', height: '100%'}}>
      <Text style={{fontSize: 20, textAlign: 'center', fontFamily: 'Roboto'}}>Let's meet. Insert a name</Text>
      <Formik onSubmit={onSubmit}  initialValues={{name: ''}}>
        {({handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              paddingHorizontal: 10,
              marginVertical: '35%',
              borderColor: '#00CF91',
              borderWidth: 1,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder='Insert a name'
            />
            <TouchableNativeFeedback onPress={handleSubmit}>
              <MaterialCommunity name='send' size={30} color='#00CF91' />
            </TouchableNativeFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
}
