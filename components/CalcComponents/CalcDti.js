import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

// 간주 임대료
class CalcDti extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 2,  // 간주임대료는 아이디가 2
            termId: 0,      // 1년 전체, 기간 지정
            rateId:0,       // 국세청이율 사용, 이자율 직접 입력
            fee: 0,         // 보증금액
            rate: 2.1,      // 월세
            inDate: '' ,    // 입주일
            outDate: '',    // 퇴거일    
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcDti: ',JSON.stringify(props));
    }


    render() {
        const {navigation} = this.props;
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row"}}>
                            <Icon type='entypo' name='users' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>간주임대료</Text>
                        </View>
                        <View>
                            <Text >전세금(보증금) 등에 일정한 이율을 곱하여 계산한 금액을 말하며 과세표준 및 소득금액으로 간주됩니다.</Text>
                        </View>
                    </View>
                </View>


                <View style={{ padding: 16, flex: 4 }}>
                    <View style={{}}>
                        <View style={{ flexDirection: "row" }}>
                            <Input
                                placeholder='금액 입력'
                                label={this.data.inputTextHeader}
                                style={{ marginBottom: 7, fontSize: 10 }}
                                onChangeText = {text => this.data.result.fee = parseInt(text)}
                            />
                        </View>
                    </View>
                    <View style={{flex: 1,paddingHorizontal: 120,  justifyContent: "flex-end"}}>
                        <Button
                            icon={
                                <Icon type='ionicon' name='calculator' style={{ alignSelf: "flex-end", marginRight: 7 }} />
                            }
                            title="계산"
                            onPress = {() => {
                                navigation.navigate('CalcResultPage',{
                                    // send result data
                                  result: this.data.result
                                });
                              }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default CalcDti;