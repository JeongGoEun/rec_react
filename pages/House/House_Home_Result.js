import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

const House_Home_Result = ({ route, navigation }) => {
    const home_data = {
        date_year: Number(route.params.date_year),
        date_month: Number(route.params.date_month),
        amount_investment: Number(route.params.amount_investment),
        amount_holding: Number(route.params.amount_holding),
        amount_loanable: Number(route.params.amount_loanable),
    }
    console.log(home_data);
    console.log(home_data.amount_loanable);
    console.log(typeof(home_data.amount_loanable));

    var img_path = '../../images/number';
    
    return (
        <View style={styles.inputContainer}>
            <View style={styles.container}>
                <Text>목표금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
                />
                <Text>원</Text>
            </View>
            <View style={styles.container}>
                <Text>투자가능금액</Text>
                <TextInput
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor={'#999'}
                    autoCorrect={false}
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
                />
                <Text>원</Text>
            </View>
            
            <View style={styles.button}>
                <Button title={'돌아가기'} onPress={() => navigation.navigate('House_Home_Page')}/>
            </View>
        </View>
    );
}

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

export default House_Home_Result;