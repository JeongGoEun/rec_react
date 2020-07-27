import React from 'react';
import { StyleSheet, SafeAreaView, View, Button } from 'react-native';
import { Image, Text, Icon } from 'react-native-elements'
import * as textUtil from './text.js'

const House_Date_Result = ({ route, navigation }) => {
    /**
     * @params
     * amount_wanted: 목표금액
     * amount_investment: 투자가능금액
     * amount_holding: 보유금액
     * amount_loanable: 대출가능금액
     */
    const data = {
        amount_wanted: Number(route.params.amount_wanted),
        amount_investment: Number(route.params.amount_investment),
        amount_holding: Number(route.params.amount_holding),
        amount_loanable: Number(route.params.amount_loanable),
        year: 30,
        month: 1,
        coments_num: 1,
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
    inputContainer: {
        paddingTop: 60,
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 30,
        width: 100,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        paddingRight: 60,
        paddingLeft: 60,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white'
    },
    input: {
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    }
});

export default House_Date_Result;