import React from 'react';
import { Text, StyleSheet, View, Dimensions, TextInput, SafeAreaView } from 'react-native';
// import {RNCamera} from 'react-native-camera'; // 已经废弃


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});

// 更多组件介绍：https://reactnative.dev/docs/textinput

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello camera fail</Text>
      {/* <RNCamera style={styles.preview} /> */}
    </View>
  );
}
