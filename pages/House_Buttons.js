import React, { Component } from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';

const House_Buttons = () => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
        <Image style={{height: '100%', width: '100%'}} source={require('../images/img_home_date.jpg')}/>
        <Button title="Button 1"/>
    </View>
    <View style={styles.buttonContainer}>
        <Image style={{height: '100%', width: '100%'}} source={require('../images/img_home_home.jpg')}/>
        <Button title="Button 2"/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  }
});

export default House_Buttons;