import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'
import CalcStyle from '../styles/style';
import SketchModal from '../SketchModal';

// 중개 수수료
class CalcBroker extends React.Component {
    data = {
        result: {
            id: 1,  // 중개 수수료는 아이디가 1
            contractId: 0,
            houseId:0,
            fee: 0,
            monthlyFee: 0,   //월세
            headerText: '매매가(단위: 만원)',
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
    }

    updateContractIndex = (selectedIndex) => {
        if (selectedIndex == 0) {
            this.data.result.headerText = '매매가(단위: 만원)';
            this.data.result.monthlyFee=0;
        } else if (selectedIndex == 1) {
            this.data.result.headerText = '전세가(단위: 만원)';
            this.data.result.monthlyFee=0;
        } else {
            this.data.result.headerText = '보증금(단위: 만원)';
        }
        this.data.result.contractId = selectedIndex;
        this.setState({ selectedIndex: selectedIndex });
    }
    updateHouseIndex = (houseIndex) => {
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
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={CalcStyle.calcDescriptionStyle}>
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
                            containerStyle={{ height: 30, }}
                            selectedButtonStyle={{backgroundColor: '#FFBC00'}}
                        />
                    </View>

                    <View style={{ marginTop: 9 }}>
                        <ButtonGroup
                            onPress={this.updateHouseIndex}
                            selectedIndex={houseIndex}
                            buttons={houseButtons}
                            containerStyle={{ height: 30 }}
                            selectedButtonStyle={{backgroundColor: '#FFBC00'}}
                        />
                    </View >
                </View>

                <View style={{ padding: 16, flex: 4 }}>
                    <View style={{}}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{flex: 1}}>
                                <Input
                                    placeholder='금액 입력'
                                    label={this.data.result.headerText}
                                    style={{ marginBottom: 7, fontSize: 10 }}
                                    onChangeText = {text => this.data.result.fee = parseInt(text)}
                                />
                            </View>
                            <SketchModal />
                        </View>                        
                        {this.state.selectedIndex == 2 ?
                            <View style={{ flexDirection: "row", marginBottom: 6 }}>
                                <View style={{flex: 1}}>
                                    <Input
                                        placeholder='금액 입력'
                                        label='월세'
                                        style={{ marginBottom: 7, fontSize: 10 }}
                                        onChangeText = {text => this.data.result.monthlyFee = parseInt(text)}
                                    />
                                </View>
                                <SketchModal />
                            </View>
                            : <View></View>}
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 100,  justifyContent: "flex-end"}}>
                        <Button
                            icon={
                                <Icon type='ionicon' name='calculator' style={{ alignSelf: "flex-end", marginRight: 7 }} />
                            }
                            title="계산"
                            titleStyle={{color: '#fff',}}
                            buttonStyle={{backgroundColor: '#FFBC00'}}
                            onPress = {() => {
                                navigation.navigate('CalcResultPage',{
                                    // send result data
                                  result: this.data.result
                                });
                              }}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default CalcBroker;