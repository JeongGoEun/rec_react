import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

// LTV 
// http://xn--989a00af8jnslv3dba.com/ltv
class CalcLtv extends React.Component {
    data = {
        result: {
            id: 4,
            loan: 10000, // 대출 금액
            price: 30000, // 주택담보가액
            rent_deposit: 1000, // 임차보증금
            other_loans: 5000, // 본담보기대출액
            room: 2, // 방 개수 (기타주택만 해당)
            home_type: 0, // 아파트(0), 기타주택(1)
            area_type: 0 // 서울(0), 수도권(1), 광역시(2), 기타(3)
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcLtv: ', JSON.stringify(props));
        this.state = {
            etc_checked: 0,
            area_cehcked: 0
        }
    }

    updateSelectedIndex = (selectedIndex) => {
        if (selectedIndex == 0) { // 아파트인 경우
            this.data.result.home_type = 0;
            this.setState({ etc_checked: 0 });
        } else if (selectedIndex == 1) { // 기타주택인 경우
            this.data.result.home_type = 1;
            this.setState({ etc_checked: 1 });
        }
        console.log("아파트 구분 : ", this.data.result.home_type);
    }

    updateAreaIndex = (selectedIndex) => {
        if (selectedIndex === 0){ // 서울 
            this.data.result.area_type = 0
            this.setState({ area_cehcked: 0 });
        } else if (selectedIndex === 1){// 수도권
            this.data.resultarea_type = 1
            this.setState({ area_cehcked: 1 });
        } else if (selectedIndex === 2){// 광역시
            this.data.result.area_type = 2
            this.setState({ area_cehcked: 2 });
        } else if (selectedIndex === 3){// 기타
            this.data.result.area_type = 3
            this.setState({ area_cehcked: 3 });
        }
        console.log("지역 선택 ID : ", this.data.result.area_type);
    }

    render() {
        const { navigation } = this.props;
        const contractButtons = ['아파트', '기타주택'];
        const houseButtons = ['서울', '수도권', '광역시', '기타'];
        const { etc_checked } = this.state;

        return (
            <ScrollView style={{ flex: 1 }}>
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

                    {/* Button 그룹 */}
                    <View style={{ marginTop: 9 }}>
                        <ButtonGroup
                            onPress={this.updateSelectedIndex}
                            selectedIndex={etc_checked}
                            buttons={contractButtons}
                            containerStyle={{ height: 30 }}
                        />
                    </View>

                    {/* 조건에 따른 View 표출 ( 0 : default(아파트) ) */}
                    {this.state.etc_checked === 0 ?
                        <View></View>
                        :
                        <View style={{ marginBottom: 10 }}>
                            <ButtonGroup
                                onPress={this.updateAreaIndex}
                                selectedIndex={this.state.area_cehcked}
                                buttons={houseButtons}
                                containerStyle={{ height: 30 }}
                            />
                        </View>}

                    <View style={{ paddingHorizontal: 8, flex: 4 }}>
                        <View style={{}}>
                            <Input
                                placeholder='대출 희망금액'
                                label='대출금액(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText = {text => this.data.result.loan = parseInt(text)}
                            />
                        </View>
                        <View style={{}}>
                            <Input
                                placeholder='평균 시세(감정가)'
                                label='주택담보가액(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ fontSize: 8 }}
                                onChangeText = {text => this.data.result.price = parseInt(text)}
                            />
                        </View>
                        <View style={{}}>
                            <Input
                                placeholder='전월세의 보증금'
                                label='임차보증금(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText = {text => this.data.result.rent_deposit = parseInt(text)}
                            />
                        </View>
                        <View style={{}}>
                            <Input
                                placeholder='만원 단위 금액 입력'
                                label='본담보기대출액(단위: 만원)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText = {text => this.data.result.other_loans = parseInt(text)}
                            />
                        </View>

                        {/* 조건에 따른 View 표출 ( 0 : default(아파트) ) */}
                        {this.state.etc_checked === 0 ?
                        <View></View>
                        :
                        <View style={{}}>
                            <Input
                                placeholder='소액 보증금 계산용'
                                label='방수 (개수)'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ height: 13 }}
                                style={{ marginBottom: 2, fontSize: 8, height: 5 }}
                                onChangeText = {text => this.data.result.room = parseInt(text)}
                            />
                        </View>}
                        
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
            </ScrollView>
        );
    }
}

export default CalcLtv;