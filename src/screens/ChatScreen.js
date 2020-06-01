import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {getItem} from '../utils/utils';
import Input from '../components/Chat/Input';
import Messages from '../components/Chat/Messages';
import {GiftedChat} from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';

export default function Chat() {
  const [name, setName] = useState(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    (async () => {
      const name = await getItem('@name');
      setName(name);
    })();
  });
  useEffect(() => {
    database()
      .ref(`/users/${name}`)
      .on('value', snapshot => {
        setMessages(snapshot.val());
      });
    return () => database();
  }, [name]);
  const sendMessage = (message = []) => {
    database()
      .ref(`/users/${name}`)
      .set(GiftedChat.append(messages, message));
  };
  console.log(messages);
  return (
    <GiftedChat
      messages={messages}
      onSend={message => sendMessage(message)}
      user={{_id: name, name: name}}
    />
  );
}