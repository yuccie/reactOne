import React from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// 更多组件介绍：https://reactnative.dev/docs/textinput


export default function App() {
  // onChangeText 就是函数，可以直接传入，免得再定义
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const myChangeText = val => {
    console.log('djch val', val)
    onChangeText(val)
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={myChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
}
