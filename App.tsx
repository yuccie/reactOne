import React from 'react';
import {Text, StyleSheet} from 'react-native';
// import Index01 from './src_01_StyleSheet/index01';
// import Index02 from './src_02_flexbox/index';
// import Index03 from './src_03_Dimensions/index';
// import Index04 from './src_04_alert_button';
// import Index08 from './src_08_textInput';
import Camera from './src_09_camera';

const styles = StyleSheet.create({
  h2: {
    fontSize: 40,
    padding: 40,
    textAlign: 'center',
    lineHeight: 100,
  },
})

export default function App() {
  return (
    <>
      <Text style={styles.h2}>hello native</Text>
      {/* <Index01 />
      <Index02 /> */}
      {/* <Index03 /> */}
      {/* <Index04 /> */}
      {/* <Index08 /> */}
      <Camera />
    </>
  );
}
