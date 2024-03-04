import React from 'react';
import { Text, StyleSheet, View, Dimensions, Alert, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontSize: 25,
    marginTop: 100
  },
  itemBase: {
    width: Dimensions.get('window').width / 4,
    height: 90,
    color: 'red',
    backgroundColor: '#ccc',
    marginRight: 1,
    textAlign: 'center',
    lineHeight: 90
  }
});

// 更多组件介绍：https://reactnative.dev/docs/button

export default function App() {
  return (
    <>
      <View style={[styles.container]}>
        {/* title必须双引号， alert 是具体的提示内容 */}
        <Button title="奔驰" color="red" onPress={() => Alert.alert('系统')} />
        <Button title="奥迪" onPress={() => Alert.alert('Alert的提示')} />
        <Button
          title="disable"
          disabled
          onPress={() => Alert.alert('Alert的提示')}
        />
      </View>
    </>
  );
}
