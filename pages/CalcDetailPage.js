import * as React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import CalcBroker from '../components/CalcComponents/CalcBroker'

class CalcDetailPage extends React.Component {
    constructor(props) {
        super(props);
        console.log("CalcDetailPage ",JSON.stringify(props));
    }
    getDetailComponent(id) {
        const {navigation} = this.props;

        switch (id) {
            case '1': return <CalcBroker navigation={navigation}/>
        }
    }
    render() {
        // Get it from props
        const params = this.props.route.params;
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