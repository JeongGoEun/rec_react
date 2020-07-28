import React from 'react';
import { StyleSheet, SafeAreaView, View, Button } from 'react-native';
import { Image, Text, Icon } from 'react-native-elements';
import * as textUtil from './text.js';

const House_Date_Result = ({ route, navigation }) => {
    /**
     * @params
     * amount_wanted: 목표금액
     * amount_investment: 투자가능금액
     * amount_holding: 보유금액
     */
    const data = {
        amount_wanted: Number(route.params.amount_wanted),
        amount_investment: Number(route.params.amount_investment),
        amount_holding: Number(route.params.amount_holding),
        year: 1,
        month: 1,
        coments_num: 1,
    }
    var num = 372;  //30년 11개월 + 1개월
    var money = data.amount_wanted - data.amount_holding;
    if(money <= 0){ //1개월 미만
        data.year = data.month = 0;
    }
    else{
        for(var i = 1; i<372; i++){
            money = money - data.amount_investment;
            if(money<=0){
                num = i;
                break;
            }
        }
        if(num==372){   //30년 11개월 초과
            data.year = 30;
            data.month = 11;
        }
        else{
            data.year = parseInt(num / 12);
            num = num - data.year * 12;
            data.month = num % 12;
        }
    }    
    if(data.year==0){
        if(data.month<=6){  //0년 6개월 이하
            data.coments_num = 6;
        }
        else{               //1년 미만
            data.coments_num = 1;
        }
    }
    else if(data.year==1){  //2년 미만
        data.coments_num = 2;
    }
    else if(data.year==2){  //3년 미만
        data.coments_num = 3;
    }
    else if(data.year==3){  //4년 미만
        data.coments_num = 4;
    }
    else{                   //4년 1개월 이상
        data.coments_num = 5;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 50, paddingTop: 20, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 20, borderWidth: 2 }}>
                <Image
                    source={{ uri: textUtil.numberUri.uri[data.year] }}
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                />
                <Text h4 h4Style={{ marginTop: 30 }}>년</Text>
                <Image
                    source={{ uri: textUtil.numberUri.uri[data.month] }}
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                />
                <Text h4 h4Style={{ marginTop: 30 }}>개월</Text>
            </View>

            <View style={{ paddingHorizontal: 50, flex: 1, marginTop: 10 }}>
                <View style={{ padding: 13, borderRadius: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon type='ionicon' name='chatbubble-ellipses-outline' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                        <Text style={{ fontSize: 18, marginBottom: 7 }}>Message</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 15}}>{textUtil.numberUri.coments[data.coments_num]}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 60, paddingHorizontal: 160 }}>
                <Button style={styles.button} title={'돌아가기'} onPress={() => navigation.navigate('House_Date_Page')} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 30,
        width: 100,
        alignItems: 'center',
    },
});

export default House_Date_Result;