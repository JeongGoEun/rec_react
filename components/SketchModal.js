import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

// require the module
var RNFS = require('react-native-fs');

export default class SketchModal extends Component {
    state = {
        isModalVisible: false,
    };

    // /storage/emulated/0/Pictures/RNSketchCanvas/21997947.png
    componentDidMount() {
        console.log(RNFS.ExternalStorageDirectoryPath+'/Pictures/RNSketchCanvas')
        RNFS.readDir(RNFS.ExternalStorageDirectoryPath+'/Pictures/RNSketchCanvas') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
            .then((result) => {
                console.log('GOT RESULT', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button title="그리기" onPress={this.toggleModal} />
                <Modal isVisible={this.state.isModalVisible} style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <RNSketchCanvas

                                    containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                                    canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                                    defaultStrokeIndex={0}
                                    defaultStrokeWidth={8}
                                    undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
                                    clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
                                    eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
                                    strokeComponent={color => (
                                        <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
                                    )}
                                    strokeSelectedComponent={(color, index, changed) => {
                                        return (
                                            <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
                                        )
                                    }}
                                    strokeWidthComponent={(w) => {
                                        return (<View style={styles.strokeWidthButton}>
                                            <View style={{
                                                backgroundColor: 'white', marginHorizontal: 2.5,
                                                width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                                            }} />
                                        </View>
                                        )
                                    }}
                                    saveComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
                                    savePreference={() => {
                                        return {
                                            folder: 'RNSketchCanvas',
                                            filename: String(Math.ceil(Math.random() * 100000000)),
                                            transparent: false,
                                            imageType: 'png'
                                        }
                                    }}
                                    onSketchSaved={(success, path) => { Alert.alert(success ? 'saved!' + path : 'failed') }}
                                />
                            </View>
                        </View>
                        <Button title="돌아가기" onPress={this.toggleModal} />
                    </View>
                </Modal>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
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
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});