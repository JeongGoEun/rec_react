import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

//https://www.applyhome.co.kr/ap/apg/selectAddpntCalculatorView.do

// 청약 가점 계산
class CalcSubscription extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 3,  // 청약가점계산은 아이디가 3
            contractId: 0,
            houseId:0,
            fee: 0,
            monthlyFee: 0   //월세
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcRent: ',JSON.stringify(props));
        this.state = {
            // index는 0부터 시작
            convertIndex: 0,
        }
    }

    updateConvertIndex = (houseIndex) => {
        this.data.result.houseId = houseIndex;
        this.setState({ houseIndex: houseIndex });
    }

    render() {
        const convertButtons = ['전세→월세', '월세→전세', '전환율계산'];
        const { convertIndex } = this.state;
        const {navigation} = this.props;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row"}}>
                            <Icon type='ionicon' name='reader' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>청약 가점</Text>
                        </View>
                        <View>
                            <Text >동일순위내에서 경쟁이 있을 경우 무주택기간, 부양가족 수 및 청약통장 가입기간을 기준으로 산정하여 가점 점수가 높은 순으로 당첨자를 선정하는 제도</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, flex: 1, marginBottom: 10 }}>
                    <View style={{ }}>
                        <ButtonGroup
                            onPress={this.updateConvertIndex}
                            convertIndex={convertIndex}
                            buttons={convertButtons}
                            containerStyle={{ height: 30 }}
                        />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 8, flex: 5 }}>
                    <View style={{}}>
                        <Input
                            placeholder='만원 단위 금액 입력'
                            label='무주택기간(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='중개보수, 등기비용'
                            label='부양가족수(단위: 명)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ fontSize: 8 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='만원 단위 금액 입력'
                            label='보증금(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='만원 단위 금액 입력'
                            label='월세(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                </View>

                <View style={{ flex: 1, paddingHorizontal: 120, justifyContent: "flex-end" }}>
                    <Button
                        icon={
                            <Icon type='ionicon' name='calculator' style={{ alignSelf: "flex-end", marginRight: 7 }} />
                        }
                        title="계산"
                        onPress={() => {
                            navigation.navigate('CalcResultPage', {
                                // send result data
                                result: this.data.result
                            });
                        }}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default CalcSubscription;