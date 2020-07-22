import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

// LTV
class CalcLtv extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 4,
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcLtv: ', JSON.stringify(props));
        this.state = {
            checked: false,
        }
    }


    render() {
        const { navigation } = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1, marginBottom: 10 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type='ionicon' name='bar-chart' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 18, marginBottom: 7 }}>주택담보대출비율(Loan to Value)</Text>
                        </View>
                        <View>
                            <Text >담보 대비 대출금액의 비율을 나타내는 지표로, 주택담보대출의 대출가능금액을 산출할 때 사용된다.</Text>
                        </View>
                    </View>
                </View>


                <View style={{ paddingHorizontal: 8, flex: 4 }}>
                    <View style={{}}>
                        <Input
                            placeholder='대출 희망금액'
                            label='대출금액(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='평균 시세(감정가)'
                            label='주택담보가액(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ fontSize: 8 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='전월세의 보증금'
                            label='임차보증금(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='만원 단위 금액 입력'
                            label='본담보기대출액(단위: 만원)'
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
            </SafeAreaView>
        );
    }
}

export default CalcLtv;