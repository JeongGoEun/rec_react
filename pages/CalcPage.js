// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
//https://www.npmjs.com/package/react-native-super-grid
import { FlatGrid } from 'react-native-super-grid';
import { Button } from 'react-native-elements'

import calcStyle from '../components/styles/style'
import CalcDetailPage from '../pages/CalcDetailPage'

const CalcPage = ({ navigation }) => {  
  const [items, itemId] = React.useState([
    {title: '수수료계산', id: '1'},
    {title: 'DTI', id: '2'},
    {title: '청약 가점 계산', id: '3'},
    {title: 'LTV', id: '4'},
    {title: '전/월세 계산', id: '5'},
    {title: '종합 부동산세', id: '6'},
  ])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatGrid
          style={calcStyle.gridView}
          itemDimension={150}
          data={items}
          renderItem={({ item }) => (
            <View style={[calcStyle.itemContainer]}>
              <Button
                title={item.title}
                type="clear"
                titleStyle={calcStyle.btnTextColor}
                onPress = {() => {
                  navigation.navigate('CalcDetailPage',{
                    title: item.title,
                    id: item.id
                  });
                }}
              />
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