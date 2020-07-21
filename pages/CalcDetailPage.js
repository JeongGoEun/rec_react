import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CalcBroker from '../components/CalcComponents/CalcBroker'

class CalcDetailPage extends React.Component {
    state={
        selected: false
    }
    constructor(props) {
        super(props);
    }
    getDetailComponent(id) {
        console.log("getDetailComponent " + id);
        switch (id) {
            case '1': return <CalcBroker />
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