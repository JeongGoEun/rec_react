import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'

import calcStyle from './styles/style.js'

export default class CalcButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button
                title={this.props.title}
                type="clear"
                titleStyle={calcStyle.btnTextColor}
            />
        );
    }
}