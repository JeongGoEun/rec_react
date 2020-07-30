import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const House_Date = ({ navigation }) => {
    const [date_data, setValues] = useState ({
        amount_wanted: '',
        amount_investment: '',
        amount_holding: '',
    });
    const numbers = '0123456789';

    const onChange_amount_wanted = text => {
        let newText = '';
        if(text !== ''){
            for(var i = 0; i<text.length; i++){
                if(numbers.indexOf(text[i])>-1){
                    newText = newText + text[i];
                }
                else{
                    alert("please enter numbers only");
                }
            }
        }
        setValues({
            ...date_data,
            ["amount_wanted"]: newText
        });
    };

    const onChange_amount_investment = text => {
        let newText = '';
        if(text !== ''){
            for(var i = 0; i<text.length; i++){
                if(numbers.indexOf(text[i])>-1){
                    newText = newText + text[i];
                }
                else{
                    alert("please enter numbers only");
                }
            }
        }
        setValues({
            ...date_data,
            ["amount_investment"]: newText
        });
    };

    const onChange_amount_holding = text => {
        let newText = '';
        if(text !== ''){
            for(var i = 0; i<text.length; i++){
                if(numbers.indexOf(text[i])>-1){
                    newText = newText + text[i];
                }
                else{
                    alert("please enter numbers only");
                }
            }
        }
        setValues({
            ...date_data,
            ["amount_holding"]: newText
        });
    };

    return (
        <ScrollView>
            <View style={styles.inputContainer}>
                <View style={{alignItems: "center", paddingTop: 10}}>
                    <Image
                        source={require('../../images/img_home_date.jpg')}
                        style={{ width: 240, height: 240, resizeMode: 'contain', borderRadius: 15 }}
                    />
                </View>
                <View style={styles.container}>
                    <Text style = {styles.text_container1}>목표금액</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor={'#999'}
                        autoCorrect={false}
                        value = {date_data.amount_wanted}
                        onChangeText = {onChange_amount_wanted}
                    />
                    <Text style = {styles.text_container}>만원</Text>
                </View>
                <View style={styles.container}>
                    <Text style = {styles.text_container2}>투자가능금액(월)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor={'#999'}
                        autoCorrect={false}
                        value = {date_data.amount_investment}
                        onChangeText = {onChange_amount_investment}
                    />
                    <Text style = {styles.text_container}>만원</Text>
                </View>
                <View style={styles.container}>
                    <Text style = {styles.text_container3}>보유금액(대출포함)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0"
                        placeholderTextColor={'#999'}
                        autoCorrect={false}
                        value = {date_data.amount_holding}
                        onChangeText = {onChange_amount_holding}
                    />
                    <Text style = {styles.text_container}>만원</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('House_Date_Result_Page', date_data)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>분석하기</Text>
                    </View>          
                </TouchableOpacity> 
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 60,
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFBC00',
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        textAlign: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
        fontSize: 16,
    },
    input: {
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: '#FFBC00',
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
        height: 45,
        width: 120,
        fontSize: 20,
        textAlign: 'right',
    },
    text_container: {
        margin: 20,
    },
    text_container1: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 55,
    },
    text_container2: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    text_container3: {
        marginTop: 20,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 0,
    }
});

export default House_Date;