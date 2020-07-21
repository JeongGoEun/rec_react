import React, { Component } from 'react';
import { Button, View, StyleSheet, Image } from 'react-native';
//<Image style={{aspectRatio:0.7, resizeMode: 'contain', flex: 1}} source={require('../images/img_home_date.jpg')}/>

const House_Buttons = () => (
  <View style={styles.container}>   
    <View style={styles.buttonContainer}>          
      <Button title="기 간"/>
    </View>

    <View style={styles.buttonContainer}>
        <Button title="건 물"/>
    </View>    
  </View>  
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default House_Buttons;