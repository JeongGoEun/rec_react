import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

const House_Home = ({ navigation }) => {
    const [home_data, setValues] = useState ({
        date_year: '',
        date_month: '',
        amount_investment: '',
        amount_holding: '',
        amount_loanable: '',
    });
    const numbers = '0123456789';

    const onChange_date_year_value = text => {
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
            ...home_data,
            ["date_year"]: newText
        });
    };
    const onChange_date_month_value = text => {
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
            ...home_data,
            ["date_month"]: newText
        });
    };
    const onChange_amount_investment_value = text => {
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
            ...home_data,
            ["amount_investment"]: newText
        });
    };
    const onChange_amount_holding_value = text => {
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
            ...home_data,
            ["amount_holding"]: newText
        });
    };
    const onChange_amount_loanable_value = text => {
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
            ...home_data,
            ["amount_loanable"]: newText
        });
    };

    return (
        <View style={styles.inputContainer}>
            <View style={styles.container}>
                <Text>목표기간</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {home_data.date_year}
                    onChangeText = {onChange_date_year_value}                    
                />
                <Text style={marginRight=20}>년</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {home_data.date_month}
                    onChangeText = {onChange_date_month_value}
                />
                <Text>개월</Text>
            </View>
            <View style={styles.container}>
                <Text>투자가능금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {home_data.amount_investment}
                    onChangeText = {onChange_amount_investment_value}
                />
                <Text>원</Text>
            </View>
            <View style={styles.container}>
                <Text>보유금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {home_data.amount_holding}
                    onChangeText = {onChange_amount_holding_value}
                />
                <Text>원</Text>
            </View>
            <View style={styles.container}>
                <Text>대출가능금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {home_data.amount_loanable}
                    onChangeText = {onChange_amount_loanable_value}
                />
                <Text>원</Text>
            </View>
            
            <View style={styles.button}>
                <Button title={'분석하기'} onPress={() => navigation.navigate('House_Home_Result_Page', home_data)}/>
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

export default House_Home;