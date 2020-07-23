import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'
import { Picker } from '@react-native-community/picker'

//https://www.applyhome.co.kr/ap/apg/selectAddpntCalculatorView.do
// 청약 가점 계산
class CalcSubscription extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 3,          // 청약가점계산은 아이디가 3
            score: 0,       // 청약 기간 점수
            familyNum: 0,   // 부양가족수
            birth: '',      // 생년월일
            join: '',       // 가입일
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcRent: ', JSON.stringify(props));
        this.state = {
            // index는 0부터 시작
            termText: '',
            pickerData: [
                { label: "30세 미만 미혼 무주택자 (0점)", value: 0 },
                { label: "1년 미만 (2점)", value: 2 },
                { label: "1년 이상 ~ 2년 미만 (4점)", value: 4 },
                { label: "2년 이상 ~ 3년 미만 (6점)", value: 6 },
                { label: "3년 이상 ~ 4년 미만 (8점)", value: 8 },
                { label: "4년 이상 ~ 5년 미만 (10점)", value: 10 },
                { label: "5년 이상 ~ 6년 미만 (12점)", value: 12 },
                { label: "6년 이상 ~ 7년 미만 (14점)", value: 14 },
                { label: "7년 이상 ~ 8년 미만 (16점)", value: 16 },
                { label: "8년 이상 ~ 9년 미만 (18점)", value: 18 },
                { label: "9년 이상 ~ 10년 미만 (20점)", value: 20 },
                { label: "10년 이상 ~ 11년 미만 (22점)", value: 22 },
                { label: "11년 이상 ~ 12년 미만 (24점)", value: 24 },
                { label: "12년 이상 ~ 13년 미만 (26점)", value: 26 },
                { label: "13년 이상 ~ 14년 미만 (28점)", value: 28 },
                { label: "14년 이상 ~ 15년 미만 (30점)", value: 30 },
                { label: "15년 이상 (32점)", value: 32 },
            ],
            //
            birthInputText: '',
            joinInputText: '',
        }
    }

    onBirthTextChange = (key, text) => {
        var birthFromTxt = text;
        if (text.length == 8) {
            // YYYY-MM-DD형태로 만들기
            birthFromTxt = text.substr(0, 4) + '-' + text.substr(4, 2) + '-' + text.substr(6, 2);

        }
        //console.log(key, text, '->', birthFromTxt);

        if(key == 'birthInputText') {
            this.data.result.birth=text;
            this.setState({
                birthInputText: birthFromTxt
            })
        }else{
            this.data.result.join=text;
            this.setState({
                joinInputText: birthFromTxt
            })
        }
    }

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type='ionicon' name='reader' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>청약 가점</Text>
                        </View>
                        <View>
                            <Text >동일순위내에서 경쟁이 있을 경우 무주택기간, 부양가족 수 및 청약통장 가입기간을 기준으로 산정하여 가점 점수가 높은 순으로 당첨자를 선정하는 제도</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, flex: 5 }}>
                    <View style={{}}>
                        <Picker
                            selectedValue={this.state.termText}
                            style={{ marginBottom: 6, borderWidth: 1 }}
                            onValueChange={(itemValue, itemIndex) => {
                                this.data.result.score = itemValue; // 점수 설정 부분
                                this.setState({ termText: itemValue })
                            }}>
                            {this.state.pickerData.map((data, i) => {
                                return (<Picker.Item label={data.label} value={data.value} key={i} />)
                            })}
                        </Picker>
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='부양가족수 입력'
                            label='부양가족수(단위: 명)'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ fontSize: 8 }}
                            onChangeText={text => this.data.result.familyNum = text}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='YYYYMMDD'
                            label='가입자 생일'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            style={{ fontSize: 8 }}
                            value={this.state.birthInputText}
                            //onChangeText={text => this.setState({ birthInputText: text })}
                            onChangeText = {(text) => this.onBirthTextChange('birthInputText', text)}
                        />
                    </View>
                    <View style={{}}>
                        <Input
                            placeholder='YYYYMMDD'
                            label='청약 가입일'
                            labelStyle={{ fontSize: 13 }}
                            inputStyle={{ height: 13 }}
                            value={this.state.joinInputText}
                            style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                            onChangeText = {(text) => this.onBirthTextChange('joinInputText', text)}/>
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
// onBirthTextChange = (text) => {
//     var birthFromTxt = text;
//     if (text.length == 8) {
//         // YYYY-MM-DD형태로 만들기
//         birthFromTxt = text.substr(0, 4) + '-' + text.substr(4, 2) + '-' + text.substr(6, 2);

//     }
//     console.log(text, '->', birthFromTxt);

//     this.data.result.birth = text;
//     this.setState({
//         birthInputText: birthFromTxt
//     })
// }