import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import {} from '../images/real_estate.jpg'

const CustomDrawer = ({ navigation }) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center'}}>
            <Image style={{
                width: 300,
                height: 300,
                aspectRatio: 0.8,
                resizeMode: 'contain',
              }}
              source={require('../images/real_estate.jpg')} />
            </View>
            <View style={{ flex:2, padding: 20, paddingHorizontal:30 }}>
                <Button
                   icon={{
                    type:'ionicon',
                    name: "calculator",
                    size: 20,
                    color: "white"
                  }}
                    title="부동산 계산기"
                    onPress={() => navigation.navigate('CalcPage')}
                    buttonStyle={styles.btnContainer}
                    type="solid"
                />
                <Button
                    icon={{
                        type:'ionicon',
                        name: "home",
                        size: 20,
                        color: "white"
                      }}
                    title="내 집 마련"
                    onPress={() => navigation.navigate('HousePage')}
                    buttonStyle={styles.btnContainer}
                    type="solid"
                />
                <Button
                    icon={{
                        type:'ionicon',
                        name: "newspaper",
                        size: 20,
                        color: "white"
                      }}
                    title="부동산 뉴스"
                    onPress={() => navigation.navigate('NewsPage')}
                    buttonStyle={styles.btnContainer}
                    type="solid"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom: 10,
        backgroundColor: '#FFBC00'
    }
});

export default CustomDrawer;