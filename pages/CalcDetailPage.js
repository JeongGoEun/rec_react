import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import {CalcBroker, CalcDti, CalcLease, CalcLtv, CalcRent, CalcSubscription} from '../components/CalcComponents'

class CalcDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }
    getDetailComponent(id) {
        const {navigation} = this.props;

        switch (id) {
            case '1': return <CalcBroker navigation={navigation}/>
            case '2': return <CalcDti navigation={navigation}/>
            case '3': return <CalcSubscription navigation={navigation}/>
            case '4': return <CalcLtv navigation={navigation}/>
            case '5': return <CalcRent navigation={navigation}/>
            case '6': return <CalcLease navigation={navigation}/>
        }
    }
    render() {
        // Get it from props
        const params = this.props.route.params;
        //console.log('CalcDetailPage: ',params);
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 16 }}>
                    {this.getDetailComponent(params.id)}
                </View>
            </SafeAreaView>
        );
    }
}

export default CalcDetailPage;