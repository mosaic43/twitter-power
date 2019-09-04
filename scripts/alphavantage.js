var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
// var yesterday = "2019-09-01"
// console.log(yesterday)
// console.log(moment(yesterday).format('dddd'))

function checkForWeekday () {
  if (moment(yesterday).format('dddd') === "Sunday") {
    yesterday = moment(yesterday).subtract(2, "days").format("YYYY-MM-DD")
    console.log("converting Sunday to Friday")
    console.log("yesterday was Sunday. Changing date to: " + moment(yesterday).format('dddd') + " " + yesterday)
    console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
  else if (moment(yesterday).format('dddd') === "Saturday") {
    yesterday = moment(yesterday).subtract(1, "days").format("YYYY-MM-DD")
    console.log("yesterday was Saturday. Changing date to: " + moment(yesterday).format('dddd') + " " + yesterday)
    console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
  // this one checks for Labor Day 2019 specifically
  else if (yesterday === "2019-09-02") {
    yesterday = moment(yesterday).subtract(3, "days").format("YYYY-MM-DD")
    console.log("yesterday was Labor Day. Changing date to: " + moment(yesterday).format('dddd') + " " + yesterday)
    console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
  else {
    console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
}

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

function fetchDow () {

  checkForWeekday()

  return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJIA&outputsize=full&apikey=NOO8RI5C6S41PIKA')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      fullDowJSON = json
      console.log('fullDowJSON:')
      console.log(fullDowJSON)
      console.log('~~~~~~~~~~')
      dowArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return dowArray
    })
}

function fetchSP500 () {

  checkForWeekday()

  return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=NOO8RI5C6S41PIKA')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      fullSP500JSON = json
      console.log('fullSP500JSON:')
      console.log(fullSP500JSON)
      console.log('~~~~~~~~~~')
      SP500Array = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return SP500Array
    })
}

function fetchNASDAQ () {

  checkForWeekday()

  return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&outputsize=full&apikey=NOO8RI5C6S41PIKA')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      fullNASDAQJSON = json
      console.log('fullNASDAQJSON:')
      console.log(fullNASDAQJSON)
      console.log('~~~~~~~~~~')
      NASDAQArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return NASDAQArray
    })
}

function fetchOil () {

  checkForWeekday()

  return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=OIL&outputsize=full&apikey=NOO8RI5C6S41PIKA')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      fullOilJSON = json
      console.log('fullOilJSON:')
      console.log(fullOilJSON)
      console.log('~~~~~~~~~~')
      oilArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return oilArray
    })
}

function fetchGold () {

  checkForWeekday()

  return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&outputsize=full&apikey=NOO8RI5C6S41PIKA')
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      fullGoldJSON = json
      console.log('fullGoldJSON:')
      console.log(fullGoldJSON)
      console.log('~~~~~~~~~~')
      goldArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return goldArray
    })
}

var stockTickerHTML = ''
function checkStockDelta (stockArray) {
  if (stockArray[1] > stockArray[2]) {
    console.log(stockArray[0] + ' open is higher than close')
    stockTickerHTML = stockTickerHTML + `
        <div class="ticker__item__down">${stockArray[0]}</div>
        <div class="ticker__image"><img src="img/sad-trump-face.png" alt="Sad Trump Face"></div>
        <div class="ticker__value__down">${stockArray[2]}</div>
        `
  } else {
    console.log(stockArray[0] + ' close is higher than open')
    stockTickerHTML = stockTickerHTML + `
        <div class="ticker__item__up">${stockArray[0]}</div>
        <div class="ticker__image"><img src="img/happy-trump-face.png" alt="Happy Trump Face"></div>
        <div class="ticker__value__up">${stockArray[2]}</div>
        `
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var ticker = document.getElementById('ticker')

  Promise.all([fetchDow(), fetchSP500(), fetchNASDAQ(), fetchOil(), fetchGold()])
    .then(function (array) {
      console.log('all', array)
      console.info('~~~~~~~~')

      console.log('dowArray:')
      console.log(dowArray)
      console.info('~~~~~~~~')

      console.log('SP500Array:')
      console.log(SP500Array)
      console.info('~~~~~~~~')

      console.log('NASDAQArray:')
      console.log(NASDAQArray)
      console.info('~~~~~~~~')

      console.log('oilArray:')
      console.log(oilArray)
      console.info('~~~~~~~~')

      console.log('goldArray:')
      console.log(goldArray)
      console.info('~~~~~~~~')

      checkStockDelta(dowArray)
      checkStockDelta(SP500Array)
      checkStockDelta(NASDAQArray)
      checkStockDelta(oilArray)
      checkStockDelta(goldArray)
      // console.log(stockTickerHTML)
      ticker.innerHTML = `<div class="ticker__item__up">${moment(yesterday).format('MMMM Do YYYY')}</div>` + stockTickerHTML
    })
    .catch(function (error) {
      console.log('error! Alphavantage API did not return a value! Reverting to historical data.')
      console.log(error)
      dowArray = [historicalDow['Meta Data']['2. Symbol'], historicalDow['Time Series (Daily)']["2019-08-30"]['1. open'], historicalDow['Time Series (Daily)']["2019-08-30"]['4. close']]
      SP500Array = [historicalSP500['Meta Data']['2. Symbol'], historicalSP500['Time Series (Daily)']["2019-08-30"]['1. open'], historicalSP500['Time Series (Daily)']["2019-08-30"]['4. close']]
      NASDAQArray = [historicalNASDAQ['Meta Data']['2. Symbol'], historicalNASDAQ['Time Series (Daily)']["2019-08-30"]['1. open'], historicalNASDAQ['Time Series (Daily)']["2019-08-30"]['4. close']]
      oilArray = [historicalOil['Meta Data']['2. Symbol'], historicalOil['Time Series (Daily)']["2019-08-30"]['1. open'], historicalOil['Time Series (Daily)']["2019-08-30"]['4. close']]
      goldArray = [historicalGold['Meta Data']['2. Symbol'], historicalGold['Time Series (Daily)']["2019-08-30"]['1. open'], historicalGold['Time Series (Daily)']["2019-08-30"]['4. close']]
      checkStockDelta(dowArray)
      checkStockDelta(SP500Array)
      checkStockDelta(NASDAQArray)
      checkStockDelta(oilArray)
      checkStockDelta(goldArray)
      // console.log(stockTickerHTML)
      ticker.innerHTML = `<div class="ticker__item__up">${moment(yesterday).format('MMMM Do YYYY')}</div>` + stockTickerHTML
    })
})
