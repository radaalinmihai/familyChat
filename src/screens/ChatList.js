import React, {useEffect, useState, useLayoutEffect} from 'react';
import {Text, View, SectionList, StyleSheet, FlatList} from 'react-native';
import {removeAll, getItem} from '../utils/utils';
import firestore from '@react-native-firebase/firestore';
import RenderItem from '../components/Chat/renderItem';
import SearchHeaderList from '../components/Chat/searchHeaderList';

export default function ChatList({navigation}) {
  const [usersList, setList] = useState([]);
  const [name, setName] = useState(null);
  const [filteredList, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    (async () => {
      const name = await getItem('@name');
      setName(name);
    })();
    /* firestore()
      .collection('users')
      .doc(name)
      .get()
      .then(snapshot => {
        console.log(snapshot.exists);
      }); */
    firestore()
      .collection('users')
      .get()
      .then(snapshot => {
        snapshot.forEach(s => {
          console.log(s.id);
          setList(oldList => [...oldList, s.id]);
        });
      });
    /* removeAll(); */
  }, []);
  useEffect(() => {
    const filteredUsers = usersList.filter(user => {
      const userToLower = user.toLowerCase(),
        searchToLower = search.toLowerCase();
      return userToLower.indexOf(searchToLower) > -1;
    });
    setFiltered(filteredUsers);
  }, [search]);
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
  console.log(filteredList);
  return (
    <FlatList
      data={filteredList.length > 0 ? filteredList : usersList}
      renderItem={({item}) => <RenderItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={
        <SearchHeaderList search={search} setSearch={setSearch} />
      }
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#D1D3D4',
  },
});
