import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
const name="my name is deepesh";
const ComponentScreen = () => {
  return <View>
  <Text style={styles.textStyle2}>Getting started with react native!</Text>
  <Text style={styles.textStyle1}>{name}</Text>
</View>
};

const styles=StyleSheet.create({
  textStyle1:{
    fontSize:20
  },
  textStyle2:{
    fontSize:45
  }
});

export default ComponentScreen;
