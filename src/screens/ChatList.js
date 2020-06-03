import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {removeAll} from '../utils/utils';
import firestore from '@react-native-firebase/firestore';

export default function ChatList() {
  const [usersList, setList] = useState([]);
  useEffect(() => {
    firestore()
      .collection('users')
      .get()
      .then(snapshot => {
        snapshot.forEach(s => setList(oldUsers => [...oldUsers, s.ref.id]));
      });
    /* removeAll(); */
  }, []);
  console.log(usersList);
  return (
    <View>
      {usersList.map((user, i) => (
        <Text key={i}>{user}</Text>
      ))}
    </View>
  );
}
