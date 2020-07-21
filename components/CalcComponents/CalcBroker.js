import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements'


class CalcBroker extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 16 }}>
                    <View style={{ backgroundColor: '#E0E0E0', padding: 13, borderRadius: 15 }}>
                        <View style={{ flexDirection: "row", marginBottom: 6 }}>
                            <Icon type='entypo' name='users' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                            <Text style={{ fontSize: 20, marginBottom: 7 }}>중개수수료</Text>
                        </View>
                        <View>
                            <Text >부동산 매매, 임대차 계약 시 공인중개사에 지불해야 하는 중개보수(중개수수료)를 계산합니다.</Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

export default CalcBroker;