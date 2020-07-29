import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Icon, Button } from 'react-native-elements'

import Modal from 'react-native-modal';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

// require the module
var RNFS = require('react-native-fs');

export default class SketchModal extends Component {
    data = {
        id: '',
        ocr_result: 0,
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isSave: false,
            imageURI: '',
        };
    }

    componentDidUpdate() {
        this.data.id = this.props.id;
        console.log('SketchModal componentDidUpdate',this.props);
    }

    _getData = async () => {
        var uri = 'file://' + this.state.imageURI;
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..file uri:', uri)
        const base64 = await RNFS.readFile(uri, 'base64')
        //const buf = Buffer.from(base64, 'base64')
        var buffer = { result: base64 }
        //console.log("buffer : ", buffer)
        const r = await fetch('http://192.168.100.189:4548/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Origin': '*'
            },
            body: JSON.stringify(buffer),
            //body: JSON.stringify(data)
        })
        if (r.status != 200) { // 200 : ok
            throw new Error(r.statusText);
        }
        var result = await r.json()
        this.data.ocr_result = result;

        console.log('_getData', this.data.ocr_result);    //부모 parent에 전달해야 할 결과 값
        this.props.updateText(this.data.id,this.data.ocr_result);
    }

    toggleModal = () => {
        console.log('toggleModal', this.state.isModalVisible);
        // fetch
        this.setState({
            isModalVisible: !this.state.isModalVisible,
        });
    };

    render() {
        return (
            <View style={{  marginTop: 30 }}>
                <Button
                    buttonStyle={{backgroundColor: '#E0E0E0'}}
                    icon={
                        <Icon type='ionicon' name='pencil' style={{ alignSelf: "flex-end", marginRight: 7 }} />
                    }
                    onPress={this.toggleModal}/>
                <Modal isVisible={this.state.isModalVisible} style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, }}>
                        <View style={styles.container}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                <RNSketchCanvas
                                    containerStyle={{ backgroundColor: 'transparent', flex: 1, marginHorizontal: 30 }}
                                    canvasStyle={{ backgroundColor: 'transparent', flex: 1, borderWidth: 1 }}
                                    defaultStrokeIndex={0}
                                    defaultStrokeWidth={15}
                                    undoComponent={this.state.isSave ? <View /> : <View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
                                    clearComponent={this.state.isSave ? <View /> : <View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
                                    eraseComponent={this.state.isSave ? <View /> : <View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
                                    saveComponent={this.state.isSave ? <View /> : <View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
                                    savePreference={() => {
                                        return {
                                            folder: 'RNSketchCanvas',
                                            filename: String(Math.ceil(Math.random() * 100000000)),
                                            transparent: false,
                                            imageType: 'png'
                                        }
                                    }}
                                    //onSketchSaved={(success, path) => {this.onSketchSaved} }
                                    onSketchSaved={(success, path) => {
                                        //Alert.alert(success ? 'saved!' + path : 'failed');
                                        this.state.imageURI = path;
                                        this._getData();
                                        this.toggleModal();
                                    }}
                                />
                            </View>
                        </View>

                        <Button title="돌아가기" onPress={this.toggleModal} buttonStyle={{margin: 30, backgroundColor: '#848069'}}/>
                    </View>
                </Modal>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#968877', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});