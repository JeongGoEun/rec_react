import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import { } from '../images/real_estate.jpg'

const CustomDrawer = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image style={{
                    width: 300,
                    height: 200,
                    aspectRatio: 2,
                    resizeMode: 'contain',
                }}
                    source={require('../images/real_estate.jpg')} />
            </View>
            <View style={{ flex: 1, padding: 20, paddingHorizontal: 30 }}>
                <TouchableOpacity
                    style={{height: 48, justifyContent: 'center', marginBottom: 10}}
                    onPress={() => navigation.navigate('CalcPage')}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            type='ionicon'
                            name='calculator'
                            size={20}
                            color='black'
                        />
                        <Text style={{fontSize: 17}}> 부동산 계산기</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{height: 48, justifyContent: 'center', marginBottom: 10}}
                    onPress={() => navigation.navigate('HousePage')}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            type='ionicon'
                            name='home'
                            size={20}
                            color='black'
                        />
                        <Text style={{fontSize: 17}}> 내 집 마련</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{height: 48, justifyContent: 'center', marginBottom: 10}}
                    onPress={() => navigation.navigate('NewsPage')}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            type='ionicon'
                            name='calculator'
                            size={20}
                            color='black'
                        />
                        <Text style={{fontSize: 17}}> 부동산 뉴스</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center',  }}>
                <Image style={{
                    //width: 300,
                    height: 250,
                    aspectRatio: 0.8,
                    resizeMode: 'contain',
                }}
                    source={require('../images/kbds_logo.jpg')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom: 10,
        //backgroundColor: ''
    }
});

export default CustomDrawer;