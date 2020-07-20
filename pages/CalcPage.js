// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import CalcButton from './CalcComponents/CalcButton'
import calcStyle from './CalcComponents/styles/style'


const CalcPage = ({ navigation }) => {
  const data = ['수수료 계산', 'DTI', '청약 가점 계산', 'LYV',]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatGrid
          style={calcStyle.gridView}
          itemDimension={150}
          data={['수수료 계산', 'DTI', '청약 가점 계산', 'LTV', '전.월세 계산', '종합 부동산세']}
          renderItem={({ item }) => (
            <View style={[calcStyle.itemContainer]}>
              <CalcButton title={item} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default CalcPage;
/**
 * <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is the First Page under First Page Option
          </Text>
          <Button
            onPress={() => navigation.navigate('HousePage')}
            title="Go to HousePage Page"
          />
          <Button
            onPress={() => navigation.navigate('NewsPage')}
            title="Go to NewsPage Page"
          />
        </View>
 *
 *
 */