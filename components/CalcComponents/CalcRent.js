import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

// 전/월세 변환
class CalcRent extends React.Component {
    data = {
        inputTextHeader: '전월세전환율(단위: %, 상한선: 4%)',
        result: {
            id: 5,  // 전/월세 변환은 아이디가 5
            convertIndex: 0,        //0:전세 -> 월세, 1:월세 -> 전세
            conversion_rate: 0.0,     //전월세전환율
            payment_monthly: 0,     //월세
            deposit_monthly: 0,     //월세 보증금
            deposit_long_term: 0,   //전세 보증금
        }
    }

    constructor(props) {
        super(props);
        //console.log('CalcRent: ',JSON.stringify(props));
        this.state = {
            // index는 0부터 시작
            convertIndex: 0,
            conversion_rate: 0.0,
            payment_monthly: 0,
            deposit_monthly: 0,
            deposit_long_term: 0,
        }
    }

    updateConvertIndex = (idx) => {
        this.data.result.convertIndex = idx;
        this.setState({ convertIndex: idx });
    }

    render() {
        const convertButtons = ['전세→월세', '월세→전세'];
        const { convertIndex } = this.state;
        const {navigation} = this.props;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row"}}>
                            <Icon type='ionicon' name='contrast' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>전월세 전환</Text>
                        </View>
                        <View>
                            <Text >전/월세 전환 시 또는 보증금과 월세 조정시 적정 금액을 계산합니다. 원하는 전월세전환율에 맞게 월세 보증금 또는 전세 보증금을 계산할 수 있습니다.</Text>
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
                            selectedButtonStyle={{backgroundColor: '#FFBC00'}}
                        />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 8, flex: 5 }}>
                    <View style={{}}>
                        <Input
                            placeholder='4% 이하 입력'
                            label='전월세전환율(단위: %, 상한선: 4%)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                            onChangeText = {text => this.data.result.conversion_rate = parseFloat(text)}
                        />
                    </View>
                    {this.state.convertIndex == 1 ?
                        <View style={{ flexDirection: "row", marginBottom: 6 }}>
                            <Input
                                placeholder='현재 월세 입력'
                                label='월세(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText={text => this.data.result.payment_monthly = parseInt(text)}
                            />
                        </View>
                        : <View style={{}}>
                            <Input
                                placeholder='원하는 월세 입력'
                                label='월세(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText = {text => this.data.result.payment_monthly = parseInt(text)}
                            />
                        </View>}
                    {this.state.convertIndex == 1 ?
                    <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <Input
                            placeholder='현재 월세 보증금 입력'
                            label='월세 보증금(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                            onChangeText={text => this.data.result.deposit_monthly = parseInt(text)}
                        />
                    </View>
                    : <View style={{}}>
                        <Input
                            placeholder='현재 전세 보증금 입력'
                            label='전세 보증금(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                            onChangeText = {text => this.data.result.deposit_long_term = parseInt(text)}
                        />
                    </View>}
                </View>

                <View style={{ flex: 1, paddingHorizontal: 120, justifyContent: "flex-end" }}>
                    <Button
                        icon={
                            <Icon type='ionicon' name='calculator' style={{ alignSelf: "flex-end", marginRight: 7 }} />
                        }
                        title="계산"
                        titleStyle={{color: '#fff',}}
                        buttonStyle={{backgroundColor: '#FFBC00'}}
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

export default CalcRent;