import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Text, View, SectionList, StyleSheet} from 'react-native';
import {removeAll, getItem} from '../utils/utils';
import firestore from '@react-native-firebase/firestore';
import RenderItem from '../components/Chat/renderItem';
import SearchHeaderList from '../components/Chat/searchHeaderList';

export default function ChatList({navigation}) {
  const [usersList, setList] = useState([]);
  const [name, setName] = useState(null);
  useEffect(() => {
    (async () => {
      const name = await getItem('@name');
      setName(name);
    })();
    firestore()
      .collection('users')
      .doc(name)
      .get()
      .then(snapshot => {
        console.log(snapshot.exists);
      });
    /* removeAll(); */
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Welcome ${name}`,
      headerStyle: {
        backgroundColor: '#00CF91',
      },
      headerTitleStyle: {
        color: 'white',
      },
    });
  }, [navigation, name]);
  const separator = () => <View style={styles.separator} />;
  console.log(usersList);
  return (
    <SectionList
      sections={usersList}
      renderItem={({item}) => <RenderItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={separator}
      ListHeaderComponent={SearchHeaderList}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#00CF91',
  },
});
