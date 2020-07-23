// 돈 세자리씩 끊어주는 것
function convertMoney(money) {
    var m = money.toString(), newMoney = '';
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = m;
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
    return n;
}

// 윤년 확인
function isLeapYear(_year) {
    var year = parseInt(_year);
    // for test
    convertYearToDays('19960207','19960228');
    if((year%4 == 0 && year%100 != 0) || year%400 == 0) {
        return true;
    }else{
        return false;
    }
}

// 년도 별 일 수 구하기
function convertYearToDays(startYear, endYear) {
    //console.log('convertYearToDays',startYear.substr(0,4),startYear.substr(4,2),startYear.substr(6,2))
    var start = new Date(startYear.substr(0,4), Number(startYear.substr(4,2))-1,startYear.substr(6,2))
    var end = new Date(endYear.substr(0,4), Number(endYear.substr(4,2))-1,endYear.substr(6,2))
    var diff = (end.getTime() - start.getTime())/1000/60/60/24;
    //console.log('convertYearToDays',diff)
    return diff;
}

export{
    convertMoney,
    isLeapYear,
    convertYearToDays,
}