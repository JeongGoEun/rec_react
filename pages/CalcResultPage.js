import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'
import { Button } from 'react-native-elements'
import CalcBroker from '../components/CalcComponents/CalcBroker'

import calcStyle from '../components/styles/style'

import * as util from '../components/CalcComponents/util'

class CalcResultPage extends React.Component {
    data = {
        result: {},
        tableHead: [],
        tableTitle: [],
        tableData: []
    }

    constructor(props) {
        super(props);
        this.state = {
            isCalculated: false,
        }
        this.data.result = this.props.route.params.result;
    }
    componentDidMount() {
        this.calculateResult();
        this.setState({ isCalculated: true });
    }
    calculateResult = () => {
        console.log('calculateResult: ', this.data.result.id);

        switch (this.data.result.id) {
            case 1:
                this.getBrokerFee();    //중개보수
                break;
            case 2:
                this.getDti();          //간주임대료
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
        }
    }
    /**
     * @params
     * result: {
            id: 0, 
            contractId: 0,
            houseId:0,
            fee: 0,
            monthlyFee: 0   //월세
        }
     */
    getBrokerFee = () => {
        const data = this.data.result;
        var transactionValue = 0, payRate = 0.01, result = 0;

        if (data.monthlyFee == 0) {
            // 매매, 전세 거래가액 == 계약 금액
            transactionValue = data.fee;
        } else {
            transactionValue = data.fee + (data.monthlyFee * 100);
            if (transactionValue < 5000) {
                transactionValue = data.fee + (data.monthlyFee * 70);
            }
        }

        //주택
        if (data.houseId == 0) {
            if (data.contractId == 0) {
                if (transactionValue < 5000) {
                    payRate *= 0.6;
                    result = transactionValue * payRate;
                    result = result > 25 ? 25 : result;
                } else if (transactionValue < 20000) {
                    payRate *= 0.5;
                    // 한도액 있는 경우
                    result = transactionValue * payRate;
                    result = result > 80 ? 80 : result;
                } else if (transactionValue < 60000) {
                    payRate *= 0.4;
                    result = transactionValue * payRate;
                } else if (transactionValue < 90000) {
                    payRate *= 0.5;
                    result = transactionValue * payRate;
                } else {
                    payRate *= 0.9;
                    result = transactionValue * payRate;
                }
            } else {
                // 임대차 - 전, 월세
                if (transactionValue < 5000) {
                    payRate *= 0.5;
                    // 한도액 있는 경우
                    result = transactionValue * payRate;
                    result = result > 20 ? 20 : result;
                } else if (transactionValue < 10000) {
                    payRate *= 0.4;
                    // 한도액 있는 경우
                    result = transactionValue * payRate;
                    result = result > 30 ? 30 : result;
                } else if (transactionValue < 30000) {
                    payRate *= 0.3;
                    result = transactionValue * payRate;
                } else if (transactionValue < 60000) {
                    payRate *= 0.4;
                    result = transactionValue * payRate;
                } else {
                    payRate *= 0.8;
                    result = transactionValue * payRate;
                }
            }
        } else if (data.houseId == 1) {
            // 오피스텔
            if (data.contractId == 0) {
                // 매매
                payRate *= 0.5;
            } else {
                // 임대차 - 전, 월세
                payRate *= 0.4;
            }
            result = transactionValue * payRate;
        } else {
            // 그외
            payRate *= 0.9;
            result = transactionValue * payRate;
        }
        payRate *= 100;
        this.data.tableHead = ['#', '적요', '금액' ];
        this.data.tableTitle = ['1', '2', '3'];
        this.data.tableData = [[data.headerText.substr(0,3), data.fee*10000], ['상한요율', payRate.toFixed(1)], ['중개수수료', parseInt(result*10000)]];
    }

    /**
     * @params
     * result: {
            id: 2,          // 간주임대료는 아이디가 2
            termIndex: 0,   // 1년 전체, 기간 지정
            rateIndex: 0,   // 국세청이율 사용, 이자율 직접 입력
            fee: 0,         // 보증금액
            rate: 2.1,      // 이자율
            inDate: '',     // 입주일
            outDate: '',    // 퇴거일    
        }
     */
    getDti = () => {
        const result = this.data.result;
        var referAmount=0, conRentFee=0;    //기준금액, 간주임대료
        if(result.termIndex == 0) {
            // 기준금액 = (보증금-3억)*0.6
            referAmount = (result.fee - 30000) * 0.6;

            // 간주임대료 = 기준금액 * 예금이율
            conRentFee = referAmount * result.rate * 100;
        }else{
            // 날짜 입력 시
            // 대상기간일수 / 365(윤년: 366)
            var divYear=365;
            if(util.isLeapYear(result.outDate.substr(0,4))) {
                console.log('윤년');
                divYear+=1;
            }

        }
        this.data.tableHead = ['#', '적요', '금액' ];
        this.data.tableTitle = ['1', '2', '3','4'];
        this.data.tableData = [['보증금',result.fee*10000], ['정기예금이율',result.rate], ['기준금액', referAmount*10000], ['간주임대료', conRentFee]];
    }

    render() {
        const {navigation} = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {this.state.isCalculated
                    ?
                    <View style={{ flex: 1, padding: 50, backgroundColor: '#E0E0E0' }}>
                        <View style={{ flex: 2 }}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#FFBC00' }}>
                                <Row data={this.data.tableHead} flexArr={[1, 2, 3]} style={styles.head} textStyle={styles.text} />
                                <TableWrapper style={styles.wrapper}>
                                    <Col data={this.data.tableTitle} style={styles.title} heightArr={[40, 40, 40]} textStyle={styles.text} />
                                    <Rows data={this.data.tableData} flexArr={[2, 3]} style={styles.row} textStyle={styles.text} />
                                </TableWrapper>
                            </Table>
                        </View>

                        <View style={{ flex: 1, paddingHorizontal: 80,justifyContent: "flex-end" }}>
                            <Button
                                title='메인화면'
                                type="solid"
                                titleStyle={calcStyle.btnTextColor}
                                onPress={() => {
                                    navigation.navigate('CalcPage');
                                }}
                            />
                        </View>
                    </View>
                    :
                    <View style={{ flex: 1, padding: 16, backgroundColor: '#E0E0E0' }}>
                        <Text>Calc Result Page</Text>
                    </View>}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 40 },
    text: { textAlign: 'center', fontSize: 17 }
});
export default CalcResultPage;