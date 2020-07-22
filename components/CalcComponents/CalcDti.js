import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Icon, ButtonGroup, Input, Button } from 'react-native-elements'

// DTI
class CalcDti extends React.Component {
    data = {
        inputTextHeader: '매매가(단위: 만원)',
    }

    constructor(props) {
        super(props);
        console.log('CalcBroker: ',JSON.stringify(props));

    }


    render() {
        const {navigation} = this.props;
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 16, flex: 1 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row"}}>
                            <Icon type='entypo' name='users' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>중개수수료</Text>
                        </View>
                        <View>
                            <Text >DTI설명.</Text>
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