import React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

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

export default function App() {
  return (
    <>
      <View style={[styles.container]}>
        <Text style={styles.itemBase}>奔驰</Text>
        <Text style={styles.itemBase}>奥迪</Text>
        <Text style={styles.itemBase}>玛莎拉蒂</Text>
        <Text style={styles.itemBase}>比亚迪</Text>
      </View>
    </>
  );
}
