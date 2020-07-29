import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, } from 'react-native';
import { Icon, Button } from 'react-native-elements';

import { } from '../images/real_estate.jpg'

const CustomDrawer = ({ navigation }) => {
    const [idx, setIndex] = useState(0);
    const pressOpacity = (index) => {
        setIndex(index)
    }

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
            <View style={{ flex: 1, padding: 20 }}>
                <TouchableHighlight
                    style={{height: 48, justifyContent: 'center', marginBottom: 10}}
                    onPress={() => navigation.navigate('CalcPage')}
                    activeOpacity={0.6}
                    underlayColor='#DDDDDD'
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
                </TouchableHighlight>
                <TouchableHighlight
                    style={{height: 48, justifyContent: 'center', marginBottom: 10}}
                    onPress={() => navigation.navigate('HousePage')}
                    activeOpacity={0.6}
                    underlayColor='#DDDDDD'
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
                </TouchableHighlight>
                <TouchableHighlight
                    style={{height: 48, justifyContent: 'center', marginBottom: 10}}
                    onPress={() => navigation.navigate('NewsPage')}
                    activeOpacity={0.6}
                    underlayColor='#DDDDDD'
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
                </TouchableHighlight>
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