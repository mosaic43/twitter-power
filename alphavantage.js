var today = new Date();
var dd = today.getDate()-1;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = yyyy + '-' + mm + '-' + dd;
console.log(today);

function getDow(resolve, reject) {
    $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJIA&apikey=NOO8RI5C6S41PIKA', function(myresponse){
        console.log("Dow:")
        console.log(myresponse["Time Series (Daily)"][today])
        return myresponse
    });
}

function getSP500(resolve, reject) {
    $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&apikey=NOO8RI5C6S41PIKA', function(myresponse){
        console.log("S&P 500:")
        console.log(myresponse["Time Series (Daily)"][today])
        return myresponse
    });
}

function getNASDAQ(resolve, reject){
    $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=COMP&apikey=NOO8RI5C6S41PIKA', function(myresponse){
        console.log("NASDAQ:")
        console.log(myresponse["Time Series (Daily)"][today])
        return myresponse
    });
}

function getOil(resolve, reject) {
    $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=CL.1&apikey=NOO8RI5C6S41PIKA', function(myresponse){
        console.log("Oil:")
        console.log(myresponse["Time Series (Daily)"][today])
        return myresponse

    });
}

function getGold(resolve, reject) {
    $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GC00&apikey=NOO8RI5C6S41PIKA', function(myresponse){
        console.log("Gold:")
        console.log(myresponse["Time Series (Daily)"][today])
        
    });
}

document.addEventListener('DOMContentLoaded', function(){

    Promise(getDow)
    .then(getSP500)
    .then(getNASDAQ)
    .then(getOil)
    .then(getGold)

})

