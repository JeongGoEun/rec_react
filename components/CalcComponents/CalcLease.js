import * as React from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { Icon, CheckBox, Input, Button } from 'react-native-elements'

// 임대수익률
class CalcLease extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 6,
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcBroker: ', JSON.stringify(props));
        this.state = {
            checked: false,
        }
    }


    render() {
        const { navigation } = this.props;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type='ionicon' name='cash' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 18, marginBottom: 7 }}>임대수익률</Text>
                        </View>
                        <View>
                            <Text >매매(또는 신축) 후 임대 계약을 토대로 수익형부동산을 운용할 때 대략적인 수익률을 계산해 볼 수 있습니다.</Text>
                        </View>
                    </View>
                </View>


                <View style={{ paddingHorizontal: 8, flex: 5 }}>
                    <CheckBox
                        title='대출 포함'
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                        containerStyle={{ backgroundColor: "E0E0E0" }}
                        checkedColor={'#FFBC00'}
                    />
                    <View style={{}}>
                        <Input
                            placeholder='만원 단위 금액 입력'
                            label='매매가(단위: 만원)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                        //onChangeText = {text => this.data.result.fee = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='중개보수, 등기비용'
                            label='부대비용(단위: 만원)'
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
                    {this.state.checked ?
                    <View>
                        <View style={{}}>
                            <Input
                                placeholder='만원 단위 금액 입력'
                                label='금융 대출금(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                            //onChangeText = {text => this.data.result.fee = text}
                            />
                        </View>
                        <View style={{}}>
                            <Input
                                placeholder='전액담보 범위 내 3~4%'
                                label='대출 이율(단위: %)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                            //onChangeText = {text => this.data.result.fee = text}
                            />
                        </View>
                    </View> : <View /> }


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

export default CalcLease;