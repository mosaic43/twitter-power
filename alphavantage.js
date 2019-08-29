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


function fetchDow() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJIA&apikey=NOO8RI5C6S41PIKA')    
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        let dowJSON = json;  
        let dowOpen = dowJSON["Time Series (Daily)"][yesterday]["1. open"]
        let dowClose = dowJSON["Time Series (Daily)"][yesterday]["4. close"]      
        console.log("Dow open:")
        // console.log(dowJSON["Time Series (Daily)"][yesterday]["1. open"])
        console.log(dowOpen)
        console.log("Dow close:")
        // console.log(dowJSON["Time Series (Daily)"][yesterday]["4. close"])
        console.log(dowClose)
        // if (dowJSON["Time Series (Daily)"][yesterday]["1. open"])
        // let dowHTML = ""
    })
    
}

function fetchSP500() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&apikey=NOO8RI5C6S41PIKA')    
    .then(function(response) {
        return response.json();
      })
    .then(function(json) {
        let SP500JSON = json;        
        console.log("S&P 500 open:")
        console.log(SP500JSON["Time Series (Daily)"][yesterday]["1. open"])
        console.log("S&P 500 close:")
        console.log(SP500JSON["Time Series (Daily)"][yesterday]["4. close"])
    });
}

function fetchNASDAQ() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&apikey=NOO8RI5C6S41PIKA')    
    .then(function(response) {
        return response.json();
      })
    .then(function(json) {
        let NASDAQJSON = json;        
        console.log("NASDAQ open:")
        console.log(NASDAQJSON["Time Series (Daily)"][yesterday]["1. open"])
        console.log("NASDAQ close:")
        console.log(NASDAQJSON["Time Series (Daily)"][yesterday]["4. close"])
    });
}

function fetchOil() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=OIL&apikey=NOO8RI5C6S41PIKA')    
    .then(function(response) {
        return response.json();
      })
    .then(function(json) {
        let OilJSON = json;   
        console.log("Oil open:")
        console.log(OilJSON["Time Series (Daily)"][yesterday]["1. open"])
        console.log("Oil close:")
        console.log(OilJSON["Time Series (Daily)"][yesterday]["4. close"])
    });
}

function fetchGold() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&apikey=NOO8RI5C6S41PIKA')    
    .then(function(response) {
        return response.json();
      })
    .then(function(json) {
        let GoldJSON = json;   
        console.log("Gold open:")
        console.log(GoldJSON["Time Series (Daily)"][yesterday]["1. open"])
        console.log("Gold close:")
        console.log(GoldJSON["Time Series (Daily)"][yesterday]["4. close"])
    });
}

document.addEventListener('DOMContentLoaded', function(){

    fetchDow()
    fetchSP500()
    fetchNASDAQ()
    fetchOil()
    fetchGold()

    // Promise.all(fetchDow())
})

