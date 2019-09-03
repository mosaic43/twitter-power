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

// yesterday = yyyy + '-' + mm + '-' + dd;
yesterday = "2019-08-27"
console.log(yesterday);

var dowArray = []
var SP500Array = []
var NASDAQArray = []
var oilArray = []
var goldArray = []
var fullDowJSON = []
var fullSP500JSON = []
var fullNASDAQJSON = []
var fullOilJSON = []
var fullGoldJSON = []

function fetchDow() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJIA&outputsize=full&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            fullDowJSON = json
            console.log("fullDowJSON:")
            console.log(fullDowJSON)
            console.log("~~~~~~~~~~")
            dowArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return dowArray
        })
}

function fetchSP500() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            fullSP500JSON = json
            console.log("fullSP500JSON:")
            console.log(fullSP500JSON)
            console.log("~~~~~~~~~~")
            SP500Array = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return SP500Array
    });
}

function fetchNASDAQ() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&outputsize=full&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            fullNASDAQJSON = json
            console.log("fullNASDAQJSON:")
            console.log(fullNASDAQJSON)
            console.log("~~~~~~~~~~")
            NASDAQArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return NASDAQArray
    });
}

function fetchOil() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=OIL&outputsize=full&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            fullOilJSON = json
            console.log("fullOilJSON:")
            console.log(fullOilJSON)
            console.log("~~~~~~~~~~")
            oilArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return oilArray
    });
}

function fetchGold() {
    return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&outputsize=full&apikey=NOO8RI5C6S41PIKA')    
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            fullGoldJSON = json
            console.log("fullGoldJSON:")
            console.log(fullGoldJSON)
            console.log("~~~~~~~~~~")
            goldArray = [json["Meta Data"]["2. Symbol"], json["Time Series (Daily)"][yesterday]["1. open"], json["Time Series (Daily)"][yesterday]["4. close"]]
            return goldArray
    });
}

var stockTickerHTML = ''
function checkStockDelta(stockArray) {
        
    if (stockArray[1] > stockArray[2]){
        console.log(stockArray[0] + " open is higher than close")
        stockTickerHTML = stockTickerHTML + `
        <div class="ticker__item__down">${stockArray[0]}</div>
        <div class="ticker__image"><img src="img/sad-trump-face.png" alt="Sad Trump Face"></div>
        <div class="ticker__value__down">${stockArray[2]}</div>
        `
    }

    else {
        console.log(stockArray[0] + " close is higher than open")
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

            console.log("all", array);
            console.info("~~~~~~~~");

            console.log("dowArray:")
            console.log(dowArray)
            console.info("~~~~~~~~");

            console.log("SP500Array:")
            console.log(SP500Array)
            console.info("~~~~~~~~");

            console.log("NASDAQArray:")
            console.log(NASDAQArray)
            console.info("~~~~~~~~");

            console.log("oilArray:")
            console.log(oilArray)
            console.info("~~~~~~~~");

            console.log("goldArray:")
            console.log(goldArray)
            console.info("~~~~~~~~");

            checkStockDelta(dowArray)
            checkStockDelta(SP500Array)
            checkStockDelta(NASDAQArray)
            checkStockDelta(oilArray)
            checkStockDelta(goldArray)
            console.log(stockTickerHTML)
            ticker.innerHTML = stockTickerHTML
        })
        .catch(function(error){
            console.log("error!")
            console.log(error)
    })
})

