import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

const House_Date_Result = ({ route, navigation }) => {
    const amount_wanted = Number(route.params.amount_wanted.amount_wanted_value);
    const amount_investment = Number(route.params.amount_investment.amount_investment_value);
    const amount_holding = Number(route.params.amount_holding.amount_holding_value);
    const amount_loanable = Number(route.params.amount_loanable.amount_loanable_value);

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
            <Button title={'돌아가기'} onPress={() => navigation.navigate('House_Date_Page')}/>
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

export default House_Date_Result;