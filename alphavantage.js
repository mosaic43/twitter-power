let yesterday = new Date();
let dd = yesterday.getDate()-1;
let mm = yesterday.getMonth()+1; //January is 0!
let yyyy = yesterday.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

yesterday = yyyy + '-' + mm + '-' + dd;
console.log(yesterday);

var dowArray = []
var SP500Array = []
var NASDAQArray = []
var oilArray = []
var goldArray = []


function fetchDow() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJIA&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json)
            // let dowOpen = json["Time Series (Daily)"][yesterday]["1. open"]
            // let dowClose = json["Time Series (Daily)"][yesterday]["4. close"]
            // console.log("Dow open:")
            // console.log(json["Time Series (Daily)"][yesterday]["1. open"])
            // console.log("Dow close:")
            // console.log(json["Time Series (Daily)"][yesterday]["4. close"])
            dowArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return dowArray
        })
}

function fetchSP500() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // let SP500Open = json["Time Series (Daily)"][yesterday]["1. open"]
            // let SP500Close = json["Time Series (Daily)"][yesterday]["4. close"]        
            // console.log("S&P 500 open:")
            // console.log(json["Time Series (Daily)"][yesterday]["1. open"])
            // console.log("S&P 500 close:")
            // console.log(json["Time Series (Daily)"][yesterday]["4. close"])
            SP500Array = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return SP500Array
    });
}

function fetchNASDAQ() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // let NASDAQOpen = json["Time Series (Daily)"][yesterday]["1. open"]
            // let NASDAQClose = json["Time Series (Daily)"][yesterday]["4. close"]       
            // console.log("NASDAQ open:")
            // console.log(json["Time Series (Daily)"][yesterday]["1. open"])
            // console.log("NASDAQ close:")
            // console.log(json["Time Series (Daily)"][yesterday]["4. close"])
            NASDAQArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return NASDAQArray
    });
}

function fetchOil() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=OIL&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // let OilOpen = json["Time Series (Daily)"][yesterday]["1. open"]
            // let OilClose = json["Time Series (Daily)"][yesterday]["4. close"]        
            // console.log("Oil open:")
            // console.log(json["Time Series (Daily)"][yesterday]["1. open"])
            // console.log("Oil close:")
            // console.log(json["Time Series (Daily)"][yesterday]["4. close"])
            oilArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return oilArray
    });
}

function fetchGold() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            // let GoldOpen = json["Time Series (Daily)"][yesterday]["1. open"]
            // let GoldClose = json["Time Series (Daily)"][yesterday]["4. close"]        
            // console.log("Gold open:")
            // console.log(json["Time Series (Daily)"][yesterday]["1. open"])
            // console.log("Gold close:")
            // console.log(json["Time Series (Daily)"][yesterday]["4. close"])
            goldArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return goldArray
    });
}

// function stockTickerHTML(array) {
//     console.log("stockTickerHTML function:")
//     console.log(array)
// }

let stockTickerHTML = ""

function checkStockDelta(stockArray) {
        
    if (stockArray[1] > stockArray[2]){
        console.log("open is higher than close")
        stockTickerHTML = stockTickerHTML + `
        <div class="ticker__item__down">${stockArray[0]}</div>
        <div class="ticker__image"><img src="img/sad-trump-face.png" alt="Sad Trump Face"></div>
        <div class="ticker__value__down">${stockArray[2]}</div>
        `
    }

    else {
        console.log("close is higher than open")
        stockTickerHTML = stockTickerHTML + `
        <div class="ticker__item__up">${stockArray[0]}</div>
        <div class="ticker__image"><img src="img/happy-trump-face.png" alt="Happy Trump Face"></div>
        <div class="ticker__value__up">${stockArray[2]}</div>
        `
    }
}

document.addEventListener('DOMContentLoaded', function(){

    var ticker = document.getElementById('ticker')

    Promise.all([fetchDow(), fetchSP500(), fetchNASDAQ(), fetchOil(), fetchGold()])
    .then(function(array) {
        console.info("~~~~~~~~");
        console.log("all", array);
        console.info("~~~~~~~~");
        console.log("dowArray:")
        console.log(dowArray)
        console.log("SP500Array:")
        console.log(SP500Array)
        console.log("NASDAQArray:")
        console.log(NASDAQArray)
        console.log("oilArray:")
        console.log(oilArray)
        console.log("goldArray:")
        console.log(goldArray)
        checkStockDelta(dowArray)
        checkStockDelta(SP500Array)
        checkStockDelta(NASDAQArray)
        checkStockDelta(oilArray)
        checkStockDelta(goldArray)
        console.log(stockTickerHTML)
        ticker.innerHTML = stockTickerHTML
    })
    .catch(function(error){
        console.log(error)
    })
    console.log("outside of promise")
    console.log(dowArray)
})

