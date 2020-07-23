// 돈 세자리씩 끊어주는 것
function convertMoney(money) {
    var m = money.toString();
}

// 윤년 확인
function isLeapYear(_year) {
    var year = parseInt(_year);
    if((year%4 == 0 && year%100 != 0) || year%400 == 0) {
        return true;
    }else{
        return false;
    }
}
export{
    convertMoney,
    isLeapYear,
}