import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  big: {
    fontSize: 30,
  },
});

export default function App() {
  return (
    <>
      <Text style={{color: 'pink'}}>测试styleSheet 内敛样式</Text>
      <Text style={styles.red}>测试styleSheet create color样式</Text>
      <Text style={[styles.red, styles.big, {color: 'green'}]}>
        测试styleSheet create big样式
      </Text>
    </>
  );
}
