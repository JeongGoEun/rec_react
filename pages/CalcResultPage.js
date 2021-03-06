import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'
import { Button, Text,Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import * as util from '../components/CalcComponents/util'
import * as textUtil from '../components/CalcComponents/text'

class CalcResultPage extends React.Component {
    data = {
        title: '',
        description: '',
        result: {},
        tableHead: [],
        tableTitle: [],
        tableData: [],
        ltv_result: 0, // LTV 계산 결과값 (Percent)
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
                this.data.title = '<중개보수 결과>';
                break;
            case 2:
                this.getDti();          //간주임대료
                this.data.title = '<간주임대료 결과>';
                break;
            case 3:
                this.getSubscriptionFee();      // 청약 가점 계산
                break;
            case 4:
                this.getLtv();      // 주택담보 대출비율
                break;
            case 5:
                this.getRent();         //전/월세 변환
                this.data.title = '<전/월세 변환 결과>';
                break;
            case 6:
                this.getLease();    //임대수익률
                this.data.title = '<임대수익률 결과>';
                break;
        }
        // 참고 설명
        this.data.description = textUtil.resultText.descript.text[this.data.result.id];
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
        this.data.tableHead = ['#', '적요', '금액'];
        this.data.tableTitle = ['1', '2', '3', '4'];
        this.data.tableData = [
            [data.headerText.substr(0, 3), data.fee+"만원"],
            ['상한요율', payRate.toFixed(1)+'%'],
            ['기준금액', transactionValue+'만원'],
            ['중개수수료', result+"만원"]
        ];
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
        var referAmount = 0, conRentFee = 0;    //기준금액, 간주임대료
        // 기준금액 = (보증금-3억)*0.6
        referAmount = (result.fee - 30000) * 0.6;
        conRentFee = referAmount * result.rate * 100;

        if (result.termIndex == 1) {
            // 날짜 입력 시
            // 대상기간일수 / 365(윤년: 366)
            var divYear = 365, days = 0;
            if (util.isLeapYear(result.outDate.substr(0, 4))) {
                console.log('윤년');
                divYear += 1;
            }
            days = util.convertYearToDays(result.inDate, result.outDate);
            var localrate = days / divYear;
            localrate = localrate.toFixed(2);   //소수점 두자리수
            conRentFee *= localrate;
        }
        this.data.tableHead = ['#', '적요', '금액'];
        this.data.tableTitle = ['1', '2', '3', '4'];
        this.data.tableData = [
            ['보증금', result.fee+"만원"],
            ['정기예금이율', result.rate+'%'],
            ['기준금액', referAmount+'만원'],
            ['간주임대료', (parseInt(conRentFee)/10000)+'만원']
        ];
        // 기간 지정 시
        if (result.termIndex == 1) {
            this.data.tableTitle = [...this.data.tableTitle, '5', '6', '7', '8'];

            this.data.tableData.splice(2, 0, ['입주일', util.convertYearFormat(result.inDate)]);
            this.data.tableData.splice(3, 0, ['퇴거일', util.convertYearFormat(result.outDate)]);
            this.data.tableData.splice(4, 0, ['임대기간', days]);
            this.data.tableData.splice(5, 0, ['적용 비율', localrate]);
        }
    }

    getSubscriptionFee = () => {
        const data = this.data.result;
        var family_score = 5, houseNum_score = 0, parent_houseNum_score = 0;

        // 부양 가족수
        if (data.familyNum == 0) {
            family_score = 5;
        } else if (data.familyNum == 1) {
            family_score = 10;
        } else if (data.familyNum == 2) {
            family_score = 15;
        } else if (data.familyNum == 3) {
            family_score = 20;
        } else if (data.familyNum == 4) {
            family_score = 25;
        } else if (data.familyNum == 5) {
            family_score = 30;
        } else if (data.familyNum >= 6) {
            family_score = 35;
        }

        //보유 가구수 
        if (data.houseNum == 2) {
            houseNum_score = -10;
        } else if (data.houseNum == 3) {
            houseNum_score = -15;
        } else if (data.houseNum == 4) {
            houseNum_score = -20;
        } else if (data.houseNum == 5) {
            houseNum_score = -25;
        } else if (data.houseNum == 6) {
            houseNum_score = -30;
        } else if (data.houseNum == 7) {
            houseNum_score = -35;
        } else if (data.houseNum == 8) {
            houseNum_score = -40;
        } else if (data.houseNum == 9) {
            houseNum_score = -45;
        } else if (data.houseNum == 10) {
            houseNum_score = -50;
        } else if (data.houseNum >= 11) {
            houseNum_score = -55;
        }

        // 만 60세 이상 직계존속 보유 가구수
        if (data.parent_houseNum == 2) {
            parent_houseNum_score = -5;
        } else if (data.parent_houseNum == 3) {
            parent_houseNum_score = -10;
        } else if (data.parent_houseNum == 4) {
            parent_houseNum_score = -15;
        } else if (data.parent_houseNum == 5) {
            parent_houseNum_score = -20;
        } else if (data.parent_houseNum == 6) {
            parent_houseNum_score = -25;
        } else if (data.parent_houseNum == 7) {
            parent_houseNum_score = -30;
        } else if (data.parent_houseNum == 8) {
            parent_houseNum_score = -35;
        } else if (data.parent_houseNum == 9) {
            parent_houseNum_score = -40;
        } else if (data.parent_houseNum == 10) {
            parent_houseNum_score = -45;
        } else if (data.parent_houseNum == 11) {
            parent_houseNum_score = -50;
        } else if (data.parent_houseNum == 12) {
            parent_houseNum_score = -55;
        } else if (data.parent_houseNum == 13) {
            parent_houseNum_score = -60;
        } else if (data.parent_houseNum == 14) {
            parent_houseNum_score = -65;
        } else if (data.parent_houseNum == 15) {
            parent_houseNum_score = -70;
        } else if (data.parent_houseNum == 16) {
            parent_houseNum_score = -75;
        } else if (data.parent_houseNum == 17) {
            parent_houseNum_score = -80;
        } else if (data.parent_houseNum >= 18) {
            parent_houseNum_score = -85;
        }

        // 결과
        this.data.tableHead = ['#', '기준', '가점점수'];
        this.data.tableTitle = ['1', '2', '3', '4', '5', '6'];
        this.data.tableData = [['무주택 기간',data.score], 
                                ['부양가족수',family_score], 
                                ['청약통장 가입기간',data.period_score],
                                ['보유하신 가구수',houseNum_score],
                                ['직계존속 보유가구수',parent_houseNum_score],
                                ['총점',data.score + family_score + data.period_score + houseNum_score + parent_houseNum_score]];        
    }

    // LTV 계산
    getLtv = () => {
        console.log("아파트 ID : ", this.data.result.home_type)
        const data = this.data.result

        if (data.home_type === 0) { // 아파트인 경우
            console.log(data.loan, data.price, data.rent_deposit, data.other_loans)
            var possible_loan = data.price - data.rent_deposit - data.other_loans;
            if (possible_loan <= 0) this.data.score = 0
            else this.data.score = (((data.loan / possible_loan) * 100).toFixed(1)).toString() + ' %'
            console.log("아파트 : ", this.data.score)

            // 결과
            this.data.tableTitle = ['1', '2', '3', '4', '5', '6'];
            this.data.tableHead = ['#', '기준', '금액'];
                
            this.data.tableData = [['대출금액',data.loan], 
                                ['주택시세',data.price], 
                                ['임차보증금',data.rent_deposit],
                                ['기대출액',data.other_loans],
                                ['담보가능금액',possible_loan],
                                ['LTV', this.data.score]];  
        } else { //기타 주택인 경우
            var deposit = 0;
            if(data.area_type === 0){ // 서울
                deposit = 3700
            } else if (data.area_type === 1) { // 수도권
                deposit = 3400
            } else if (data.area_type === 2) { // 광역시
                deposit = 2000
            } else { // 기타
                deposit = 2000
            }
            console.log("대출금액 : ", typeof(data.loan))

            var possible_loan = data.price - data.rent_deposit - data.other_loans - (data.room-1) * deposit
            if (possible_loan <= 0) this.data.score = 0
            else this.data.score = (((data.loan / possible_loan) * 100).toFixed(1)).toString() + ' %'
            console.log("기타주택 : ", this.data.score)

            // 결과
            this.data.tableTitle = ['1', '2', '3', '4', '5', '6', '7']; 
            this.data.tableHead = ['#', '기준', '금액'];
                
            this.data.tableData = [['대출금액',data.loan], 
                                ['주택시세',data.price], 
                                ['임차보증금',data.rent_deposit],
                                ['기대출액',data.other_loans],
                                ['소액보증금',(data.room-1) * deposit],
                                ['담보가능금액',possible_loan],
                                ['LTV', this.data.score]];   
        }
    }

    getRent = () => {   // 5. 전/월세 전환
        const result = this.data.result;
        var proper_deposit_monthly = 0;     //적정 월세 보증금
        var proper_deposit_long_term = 0;   //적정 전세 보증금

        if(result.convertIndex == 1){ //월세 -> 전세
            proper_deposit_long_term = parseInt((result.payment_monthly * 12 / result.conversion_rate * 100) + result.deposit_monthly);
            this.data.tableHead = ['#', '적요', '금액'];
            this.data.tableTitle = ['1', '2', '3', '4'];
            this.data.tableData = [['전월세전환율', result.conversion_rate.toString()+'%'],
                                ['현재 월세', result.payment_monthly.toString() + ' 만원'],
                                ['현재 월세 보증금', result.deposit_monthly.toString() + ' 만원'],
                                ['적정 전세 보증금', proper_deposit_long_term.toString() + ' 만원']];
        }
        else{
            proper_deposit_monthly = parseInt(result.deposit_long_term - (result.payment_monthly * 12 / result.conversion_rate * 100));
            this.data.tableHead = ['#', '적요', '금액'];
            this.data.tableTitle = ['1', '2', '3', '4'];
            this.data.tableData = [['전월세전환율', result.conversion_rate.toString() +' %'],
                                ['현재 전세 보증금', result.deposit_long_term.toString() + ' 만원'],
                                ['원하는 월세', result.payment_monthly.toString() + ' 만원'],
                                ['적정 월세 보증금', proper_deposit_monthly.toString() + ' 만원']];
        }
    }

    getLease = () => {  // 6. 임대수익률
        const result = this.data.result;
        var rental_yield = 0.0;     //임대수익률
        if(result.checked == true){ //대출 있을 시 임대수익률
            rental_yield = ((result.rent_monthly * 12) - (result.amount_loan * result.rate_loan_interest  / 100)) / (result.price_purchase - result.deposit_total - result.fee_additional - result.amount_loan) * 100;
        }
        else{                       //대출 없을 시 임대수익률
            rental_yield = (result.rent_monthly * 12) / (result.price_purchase - result.deposit_total - result.fee_additional) * 100;
        }
        rental_yield = rental_yield.toFixed(3);
        this.data.tableHead = ['#', '적요', '금액'];
        this.data.tableTitle = ['1'];
        this.data.tableData = [
            ['임대수익률', rental_yield.toString() + ' %'],
        ];
    }

    render() {
        const { navigation } = this.props;
        const {id} = this.data.result.id;

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#E0E0E0' }}>
                {this.state.isCalculated
                    ?
                    <View style={{ flex: 1, paddingHorizontal: 50 }}>
                        <View style={{ padding: 20, }}>
                            <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.data.title}</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#FFBC00' }}>
                                <Row data={this.data.tableHead} flexArr={[1, 2, 3]} style={styles.head} textStyle={styles.text} />
                                <TableWrapper style={styles.wrapper}>
                                    <Col data={this.data.tableTitle} style={styles.title} heightArr={[40, 40, 40]} textStyle={styles.text} />
                                    <Rows data={this.data.tableData} flexArr={[2, 3]} style={styles.row} textStyle={styles.text} />
                                    
                                </TableWrapper>
                                
                            </Table>
                        </View>

                        <View style={{ padding: 16, flex: 1, marginTop: 10}}>
                            <View style={{borderWidth:2, padding: 13, borderRadius: 15}}>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon type='ionicon' name='alert-circle' style={{ alignSelf: "flex-end", marginRight: 10 }} />
                                    <Text style={{ fontSize: 18, marginBottom: 7 }}>참고사항</Text>
                                </View>
                                <View>
                                    <Text >{this.data.description}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, paddingHorizontal: 80, justifyContent: "flex-end", marginTop: 20 }}>
                            <Button
                                title='메인화면'
                                type="solid"
                                titleStyle={{color: '#fff',}}
                                buttonStyle={{backgroundColor: '#FFBC00'}}
                                onPress={() => {
                                    navigation.navigate('CalcPage');
                                }}
                            />
                        </View>
                    </View>
                    :
                    <View>
                        <Text>Calc Result Page</Text>
                    </View>}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 40 },
    text: { textAlign: 'center', fontSize: 16 }
}); 

export default CalcResultPage;
