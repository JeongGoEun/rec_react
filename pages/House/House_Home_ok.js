import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons';

const House_Home = ({ navigation }) => {
    const [date_year_value, set_date_year_value] = useState('');
    const [date_month_value, set_date_month_value] = useState('');
    const [amount_investment_value, set_amount_investment_value] = useState('');
    const [amount_holding_value, set_amount_holding_value] = useState('');
    const [amount_loanable_value, set_amount_loanable_value] = useState('');

    const onChange_date_year_value = text => {
        set_date_year_value(text);
    };
    const onChange_date_month_value = text => {
        set_date_month_value(text);
    };
    const onChange_amount_investment_value = text => {
        set_amount_investment_value(text);
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
                <Text>목표기간</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {date_year_value}
                    onChangeText = {onChange_date_year_value}
                />
                <Text style={marginRight=20}>년</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                    value = {date_month_value}
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
                    value = {amount_investment_value}
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
                    value = {amount_holding_value}
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
                    value = {amount_loanable_value}
                    onChangeText = {onChange_amount_loanable_value}
                />
                <Text>원</Text>
            </View>
            
            <View style={styles.button}>
                <Button title={'분석하기'} onPress={() => navigation.navigate('House_Home_Result_Page', {
                    date_year: {date_year_value},
                    date_month: {date_month_value},
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

export default House_Home;