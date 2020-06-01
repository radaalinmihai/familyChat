import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {getItem} from '../utils/utils';

export default function Loading({navigation}) {
  useEffect(() => {
    (async () => {
      const name = await getItem('@name');
      if (name != null) navigation.replace('Chat');
      else navigation.replace('GetName');
    })();
  });
  return <ActivityIndicator size="large" />;
}
