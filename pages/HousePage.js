// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import House_Buttons from './House_Buttons';

const HousePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.text_click}>
            원하는 기능을 선택해주세요.
          </Text>

          <House_Buttons/>

          <Text style={styles.text_explain}>
            기간: 원하는 건물에 따른 소요 기간 분석
          </Text>
          <Text style={styles.text_explain}>
            건물: 소요 기간에 따른 맞춤 건물 분석
          </Text>

          <Button
            title="Go to First Page"
            onPress={() => navigation.navigate('CalcPage')}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('NewsPage')}
          />
        </View>
        
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          React Navigate Drawer
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text_click: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  text_explain: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default HousePage;