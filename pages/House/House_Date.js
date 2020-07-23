import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons';

const House_Date = ({ navigation }) => {
    const [amount_wanted_value, set_amount_wanted_value] = useState('');
    const [amount_investment_value, set_amount_investment_value] = useState('');
    const [amount_holding_value, set_amount_holding_value] = useState('');
    const [amount_loanable_value, set_amount_loanable_value] = useState('');
<<<<<<< HEAD

    const onChange_amount_wanted_value = text => {
        set_amount_wanted_value(text);
    };
    const onChange_amount_investment_value = text => {
        set_amount_investment_value(text);
=======
    const numbers = '0123456789';

    const onChange_amount_wanted_value = text => {
        if(text===''){
            set_amount_wanted_value('');
        }
        else{
            let newText = '';
            for(var i = 0; i<text.length; i++){
                if(numbers.indexOf(text[i])>-1){
                    newText = newText + text[i];
                    set_amount_wanted_value(newText);
                }
                else{
                    alert("please enter numbers only");
                }
            }
        }   
    };
    const onChange_amount_investment_value = text => {
        let newText = '';
        for(var i = 0; i<text.length; i++){
            if(numbers.indexOf(text[i])>-1){
                newText = newText + text[i];
                set_amount_investment_value(newText);
            }
            else{
                alert("please enter numbers only");
            }
        }
>>>>>>> origin/feature/home
    };
    const onChange_amount_holding_value = text => {
        set_amount_holding_value(text);
    };
    const onChange_amount_loanable_value = text => {
        set_amount_loanable_value(text);
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
                    value = {amount_wanted_value}
                    onChangeText = {onChange_amount_wanted_value}
                />
<<<<<<< HEAD
                <Text>원</Text>
=======
                <Text>만원</Text>
>>>>>>> origin/feature/home
            </View>
            <View style={styles.container}>
                <Text>투자가능금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {amount_investment_value}
                    onChangeText = {onChange_amount_investment_value}
                />
<<<<<<< HEAD
                <Text>원</Text>
=======
                <Text>만원</Text>
>>>>>>> origin/feature/home
            </View>
            <View style={styles.container}>
                <Text>보유금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {amount_holding_value}
                    onChangeText = {onChange_amount_holding_value}
                />
<<<<<<< HEAD
                <Text>원</Text>
=======
                <Text>만원</Text>
>>>>>>> origin/feature/home
            </View>
            <View style={styles.container}>
                <Text>대출가능금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {amount_loanable_value}
                    onChangeText = {onChange_amount_loanable_value}
                />
<<<<<<< HEAD
                <Text>원</Text>
=======
                <Text>만원</Text>
>>>>>>> origin/feature/home
            </View>
            
            <View style={styles.button}>
                <Button title={'분석하기'} onPress={() => navigation.navigate('House_Date_Result_Page', {
                    amount_wanted: {amount_wanted_value},
                    amount_investment: {amount_investment_value},
                    amount_holding: {amount_holding_value},
                    amount_loanable: {amount_loanable_value},
                })}/>
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