// 윤년 확인
function isLeapYear(_year) {
    var year = parseInt(_year);
    if((year%4 == 0 && year%100 != 0) || year%400 == 0) {
        return true;
    }else{
        return false;
    }
}

// 돈 세자리씩 끊어주는 것
function convertMoney(money) {
    var m = money.toString(), newMoney = '';
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = m;
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
    return n;
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

// 19960207 -> 1996-02-07
function convertYearFormat(year) {
    return year.substr(0, 4) + '-' + year.substr(4, 2) + '-' + year.substr(6, 2);
}

export{
    isLeapYear,
    convertMoney,
    convertYearToDays,
    convertYearFormat,
}