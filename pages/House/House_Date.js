import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

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
             b   }
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
        <View style={styles.inputContainer}>
            <View style={styles.container}>
                <Text>목표금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {date_data.amount_wanted}
                    onChangeText = {onChange_amount_wanted}
                />
                <Text>만원</Text>
            </View>
            <View style={styles.container}>
                <Text>투자가능금액(월)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {date_data.amount_investment}
                    onChangeText = {onChange_amount_investment}
                />
                <Text>만원</Text>
            </View>
            <View style={styles.container}>
                <Text>보유금액(대출포함)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {date_data.amount_holding}
                    onChangeText = {onChange_amount_holding}
                />
                <Text>만원</Text>
            </View>
            
            <View style={styles.button}>
                <Button title={'분석하기'} onPress={() => navigation.navigate('House_Date_Result_Page', date_data)}/>
            </View>
        </View>
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
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white'
  },
  input: {
      borderBottomColor: '#bbb',
      borderBottomWidth: 1,
      fontSize: 24,
      marginLeft: 20,
  }
});

export default House_Date;