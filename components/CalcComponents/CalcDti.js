import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

// 간주 임대료
class CalcDti extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 2,  // 간주임대료는 아이디가 2
            termIndex: 0,      // 1년 전체, 기간 지정
            rateIndex: 0,       // 국세청이율 사용, 이자율 직접 입력
            fee: 0,         // 보증금액
            rate: 2.1,      // 월세
            inDate: '',    // 입주일
            outDate: '',    // 퇴거일    
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcDti: ', JSON.stringify(props));

        this.state = {
            termIndex: 0,
            rateIndex: 0,
            // for value
            fee: 0,
            rate: 2.1,
            inDate: '',
            outDate: ''
        }
    }

    updateTermIndex = (idx) => {
        this.data.result.termIndex = idx;
        this.setState({ termIndex: idx });
    }

    updateRateIndex = (idx) => {
        this.data.result.rateIndex = idx;
        this.setState({ rateIndex: idx });
    }

    onTermTextChange = (key, text) => {
        var convertTxt = text;
        if (text.length == 8) {
            // YYYY-MM-DD형태로 만들기
            convertTxt = text.substr(0, 4) + '-' + text.substr(4, 2) + '-' + text.substr(6, 2);

        }
        if(key == 'inDateText') {
            this.data.result.inDate=text;
            this.setState({
                inDate: convertTxt
            })
        }else{
            this.data.result.outDate=text;
            this.setState({
                outDate: convertTxt
            })
        }
    }


    render() {
        const { navigation } = this.props;
        const termButtons = ['1년 전체', '기간 지정'];
        const rateButtons = ['국세청이율 사용', '이자율 직접입력'];
        const { termIndex, rateIndex } = this.state;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row" }}>
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
                        <ButtonGroup
                            onPress={this.updateTermIndex}
                            selectedIndex={termIndex}
                            buttons={termButtons}
                            containerStyle={{ height: 30 }}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <ButtonGroup
                            onPress={this.updateRateIndex}
                            selectedIndex={rateIndex}
                            buttons={rateButtons}
                            containerStyle={{ height: 30 }}
                        />
                    </View >
                    <View style={{}}>
                        <View style={{ flexDirection: "row" }}>
                            <Input
                                placeholder='금액 입력'
                                label={'보증금액(단위: 만원)'}
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText={text => this.data.result.fee = parseInt(text)}
                            />
                        </View>
                        {this.state.rateIndex == 1 ?
                            <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                <Input
                                    placeholder='2.1'
                                    label='이자율(단위: %)'
                                    labelStyle={{ fontSize: 13 }}
                                    inputStyle={{ height: 13 }}
                                    style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                    onChangeText={text => this.data.result.rate = parseFloat(text)}
                                />
                            </View>
                            : <View></View>}
                        {this.state.termIndex == 1 ?
                            <View>
                                <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                    <Input
                                        placeholder='YYYYMMDD'
                                        label='입주일'
                                        labelStyle={{ fontSize: 13 }}
                                        inputStyle={{ height: 13 }}
                                        style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                        value={this.state.inDate}
                                        onChangeText = {(text) => this.onTermTextChange('inDateText', text)}
                                        />
                                </View>
                                <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                    <Input
                                        placeholder='YYYYMMDD'
                                        label='퇴거일'
                                        labelStyle={{ fontSize: 13 }}
                                        inputStyle={{ height: 13 }}
                                        style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                        value={this.state.outDate}
                                        onChangeText = {(text) => this.onTermTextChange('outDateText', text)}
                                        />
                                </View>
                            </View>
                            : <View></View>}
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

export default CalcDti;