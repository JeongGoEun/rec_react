import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const House_Buttons2 = () => {
  return (
    <View style={styles.main_container}>
      <View style={styles.row_container}>
        
        
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  main_container: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  container: {
    paddingTop: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white'
  },
  row_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  col_container:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

/*
const House_Buttons2 = () => {
  return (
    <View style={styles.container}>        
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>기 간</Text>
            </View>          
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>건 물</Text>
            </View>
        </TouchableOpacity>          
    </View>
  );
};
*/

export default House_Buttons2;