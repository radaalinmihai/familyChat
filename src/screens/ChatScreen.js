import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {getItem} from '../utils/utils';
import Input from '../components/Chat/Input';
import Messages from '../components/Chat/Messages';
import {GiftedChat} from 'react-native-gifted-chat';

export default function Chat() {
  const [name, setName] = useState(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    (async () => {
      const name = await getItem('@name');
      setName(name);
    })();
  }, []);
  const sendMessage = (message = []) => {
    
  };
  console.log(messages);
  return (
    <GiftedChat
      messages={messages}
      user={{_id: name, name: name}}
    />
  );
}