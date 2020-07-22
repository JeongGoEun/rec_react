import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'


class CalcBroker extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
        result: {
            id: 1,  // 중개 수수료는 아이디가 0
            contractId: 0,
            houseId:0,
            fee: 0,
            monthlyFee: 0   //월세
        }
    }

    constructor(props) {
        super(props);
        console.log('CalcBroker: ',JSON.stringify(props));
        this.state = {
            // index는 0부터 시작
            selectedIndex: 0,
            houseIndex: 0,
        }
        // binding function
        this.updateContractIndex = this.updateContractIndex.bind(this);
        this.updateHouseIndex = this.updateHouseIndex.bind(this);

    }

    updateContractIndex(selectedIndex) {
        if (selectedIndex == 0) {
            this.data.inputTextHeader = '매매가(단위: 만원)';
        } else if (selectedIndex == 1) {
            this.data.inputTextHeader = '전세가(단위: 만원)';
        } else {
            this.data.inputTextHeader = '보증금(단위: 만원)';
        }
        this.data.result.contractId = selectedIndex;
        this.setState({ selectedIndex: selectedIndex });
    }
    updateHouseIndex(houseIndex) {
        this.data.result.houseId = houseIndex;
        this.setState({ houseIndex: houseIndex });
    }

    render() {
        const contractButtons = ['매매계약', '전세계약', '월세계약'];
        const houseButtons = ['주택', '오피스텔', '그 외'];
        const { selectedIndex, houseIndex } = this.state;
        const {navigation} = this.props;
        
        console.log('index: ', selectedIndex, houseIndex)

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row"}}>
                            <Icon type='entypo' name='users' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>중개수수료</Text>
                        </View>
                        <View>
                            <Text >부동산 매매, 임대차 계약 시 공인중개사에 지불해야 하는 중개보수(중개수수료)를 계산합니다.</Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ marginTop: 9 }}>
                        <ButtonGroup
                            onPress={this.updateContractIndex}
                            selectedIndex={selectedIndex}
                            buttons={contractButtons}
                            containerStyle={{ height: 30 }}
                        />
                    </View>

                    <View style={{ marginTop: 9 }}>
                        <ButtonGroup
                            onPress={this.updateHouseIndex}
                            selectedIndex={houseIndex}
                            buttons={houseButtons}
                            containerStyle={{ height: 30 }}
                        />
                    </View >
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
                        {this.state.selectedIndex == 2 ?
                            <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                <Input
                                    placeholder='금액 입력'
                                    label='월세'
                                    style={{ marginBottom: 7, fontSize: 10 }}
                                    onChangeText = {text => this.data.result.monthlyFee = parseInt(text)}
                                />
                            </View>
                            : <View></View>}
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

export default CalcBroker;