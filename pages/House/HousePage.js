// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HousePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main_container}>        
          <Text style={styles.text_click}>
            원하는 기능을 선택해주세요.
          </Text>
          <View style={styles.row_container}>
            <View style={styles.col_container}>
              <Image style={{
                width: 300,
                height: 300,
                aspectRatio: 0.6,
                resizeMode: 'contain'
              }}
              source={require('../../images/img_home_date.jpg')} />
              <TouchableOpacity onPress={() => navigation.navigate('House_Date_Page')}>
                  <View style={styles.button}>
                      <Text style={styles.buttonText}>기 간</Text>
                  </View>          
              </TouchableOpacity>   
            </View>
            <View style={styles.col_container}>
              <Image style={{
                  width: 300,
                  height: 300,
                  aspectRatio: 0.6,
                  resizeMode: 'contain'
                }}
                source={require('../../images/img_home_home.jpg')} />
                <TouchableOpacity onPress={() => navigation.navigate('House_Home_Page')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>건 물</Text>
                    </View>          
                </TouchableOpacity>          
           </View>
          </View>

          <Text style={styles.text_explain}>
            기간: 원하는 건물에 따른 소요 기간 분석
          </Text>
          <Text style={styles.text_explain}>
            건물: 소요 기간에 따른 맞춤 건물 분석
          </Text>
      </View>
    </SafeAreaView>
  );
}

/*
<Button
title="Go to First Page"
onPress={() => navigation.navigate('CalcPage')}
/>
<Button
title="Go to Third Page"
onPress={() => navigation.navigate('NewsPage')}
/>
*/

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 16,
  },
  text_click: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  text_explain: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
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
});

export default HousePage;