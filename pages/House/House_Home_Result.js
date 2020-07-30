import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { Image, Text, Icon } from 'react-native-elements';
import * as textUtil from './text_home.js';

const House_Home_Result = ({ route, navigation }) => { 
    const data = {
        date_year: Number(route.params.date_year),                  //date_year: 년(투자 가능)
        date_month: Number(route.params.date_month),                //date_month: 개월(투자 가능)
        amount_investment: Number(route.params.amount_investment),  //amount_investment: 투자 금액(월)
        amount_holding: Number(route.params.amount_holding),        //amount_holding: 보유 금액
    };
    const result = {
        idx: 1,                 //idx: 참조 index
        money: 0,               //money: 모을 수 있는 돈
        unit_first: 0,          //unit_first: 억 단위
        unit_second: 0,         //unit_second: 만원 단위
        unit_first_excess: 0    //unit_first_excess: 억 단위(15억 초과시)
    }

    result.money = (data.date_year * 12 + data.date_month) * data.amount_investment + data.amount_holding;
    if(result.money>=10000){    //1억 이상
        result.unit_first = parseInt(result.money/10000);
        if(result.unit_first>15) {  //15억 초과
            result.unit_first_excess = result.unit_first;
            result.unit_first = 15;
        }
        result.unit_second = result.money%10000;
        result.idx = 1 + (5 * (result.unit_first - 1));
        result.idx = parseInt(Math.floor(Math.random()*5) + result.idx);
    }
    else{   //1억 미만
        result.unit_second = result.money;
        result.idx = parseInt(Math.floor(Math.random()*5) + 1);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{alignItems: "center", paddingTop: 10}}>
                <Image
                    source={{ uri: textUtil.homeAddr.img[result.idx] }}
                    style={{ width: 330, height: 330, resizeMode: 'contain', borderRadius: 15 }}
                />
            </View>

            <View style={{ paddingHorizontal: 50, flex: 1, marginTop: 0 }}>
                <View style={{ padding: 13, borderRadius: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon type='ionicon' name='home' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                        <Text style={{ fontSize: 18, marginBottom: 7 }}>주 소</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16}}>{textUtil.homeAddr.address[result.idx]}</Text>
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: 50, flex: 1, marginTop: 0 }}>
                <View style={{ padding: 13, borderRadius: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon type='ionicon' name='wallet-outline' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                        <Text style={{ fontSize: 18, marginBottom: 7 }}>모을 수 있는 돈</Text>
                    </View>
                    {result.idx<=5?
                        <View>
                            <Text style={{ fontSize: 16}}>{result.unit_second}만원</Text>    
                        </View>
                        :
                        <View>
                            <Text style={{ fontSize: 16}}>{result.unit_first_excess>0?result.unit_first_excess:result.unit_first}억 {result.unit_second}만원</Text>
                        </View>
                    }                    
                </View>
            </View>
            <View style={{ flex: 1, marginBottom: 0, paddingHorizontal: 145 }}>
                <TouchableOpacity onPress={() => navigation.navigate('House_Home_Page')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>돌아가기</Text>
                    </View>          
                </TouchableOpacity> 
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#FFBC00',
        borderRadius: 10,
        marginBottom: 130,
        width: 130,
    },
    buttonText: {
        textAlign: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
        fontSize: 16,
    },
});

export default House_Home_Result;