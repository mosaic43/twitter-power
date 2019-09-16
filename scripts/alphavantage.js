// This sets a date variable to be used throughout the program. It is not necessarily always YESTERDAY'S date unfortunately. 
// Consider fixing this in the future
var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
// console.log("date" + yesterday)

// AlphaVantage API key
var firstAPIKey = "NOO8RI5C6S41PIKA"

// This function checks if the day being called is a weekday. 
// If the date is a weekend, the date called is adjusted back by one or two days to the most recent Friday
// Consider adding more cases for holidays in the future
function checkForWeekday () {
  // console.log("running checkForWeekday")
  if (moment(yesterday).format('dddd') === "Sunday") {
      yesterday = moment(yesterday).subtract(2, "days").format("YYYY-MM-DD")
      // console.log("converting Sunday to Friday")
      // console.log("yesterday was Sunday. Changing date to: " + moment(yesterday).format('dddd') + " " + yesterday)
      // console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
  else if (moment(yesterday).format('dddd') === "Saturday") {
      yesterday = moment(yesterday).subtract(1, "days").format("YYYY-MM-DD")
      // console.log("yesterday was Saturday. Changing date to: " + moment(yesterday).format('dddd') + " " + yesterday)
      // console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
  // this one checks for Labor Day 2019 specifically
  else if (yesterday === "2019-09-02") {
      yesterday = moment(yesterday).subtract(3, "days").format("YYYY-MM-DD")
      // console.log("yesterday was Labor Day. Changing date to: " + moment(yesterday).format('dddd') + " " + yesterday)
      // console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
  else {
      // console.log("checking stock for " + moment(yesterday).format('dddd') + " " + yesterday)
  }
}

// Setting some variables to be used throughout alphavantage.js and calendar.js
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
var calendarDateClick = ""
var stockTickerHTML = ""


// These five functions fetch stock data for five arbitrary stocks, then create arrays that are passed to getEvents and eventually checkStockDelta
function fetchDowTicker () {

  checkForWeekday()

  return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DJIA&outputsize=full&apikey=${firstAPIKey}`)
    .then(function (response) {
      // console.log(response)
      return response.json()
    })
    .then(function (json) {
      // console.log(json)
      getEvents(json) 
      fullDowJSON = json
      // console.log('fullDowJSON:')
      // console.log(fullDowJSON)
      // console.log('~~~~~~~~~~')
      dowArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return dowArray
    })
}

function fetchSP500Ticker () {

  checkForWeekday()

  return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=${firstAPIKey}`)
    .then(function (response) {
      // console.log(response)
      return response.json()
    })
    .then(function (json) {
      // console.log(json)
      getEvents(json) 
      fullSP500JSON = json
      // console.log('fullSP500JSON:')
      // console.log(fullSP500JSON)
      // console.log('~~~~~~~~~~')
      SP500Array = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return SP500Array
    })
}

function fetchNASDAQTicker () {

  checkForWeekday()

  return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&outputsize=full&apikey=${firstAPIKey}`)
    .then(function (response) {
      // console.log(response)
      return response.json()
    })
    .then(function (json) {
      // console.log(json)
      getEvents(json) 
      fullNASDAQJSON = json
      // console.log('fullNASDAQJSON:')
      // console.log(fullNASDAQJSON)
      // console.log('~~~~~~~~~~')
      NASDAQArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return NASDAQArray
    })
}

function fetchOilTicker () {

  checkForWeekday()

  return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=OIL&outputsize=full&apikey=${firstAPIKey}`)
    .then(function (response) {
      // console.log(response)
      return response.json()
    })
    .then(function (json) {
      // console.log(json)
      getEvents(json) 
      fullOilJSON = json
      // console.log('fullOilJSON:')
      // console.log(fullOilJSON)
      // console.log('~~~~~~~~~~')
      oilArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return oilArray
    })
}

function fetchGoldTicker () {

  checkForWeekday()

  return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&outputsize=full&apikey=${firstAPIKey}`)
    .then(function (response) {
      // console.log(response)
      return response.json()
    })
    .then(function (json) {
      getEvents(json) 
      // console.log(json)
      fullGoldJSON = json
      // console.log('fullGoldJSON:')
      // console.log(fullGoldJSON)
      // console.log('~~~~~~~~~~')
      goldArray = [json['Meta Data']['2. Symbol'], json['Time Series (Daily)'][yesterday]['1. open'], json['Time Series (Daily)'][yesterday]['4. close']]
      return goldArray
    })
}

// This function compares whether the open or the closing stock value is higher for the day. 
// It also begins generating HTML to be stored in the stockTickerHTML variable, which will eventually be inserted into the stock ticker on the page.
// Consider breaking these into separate functions in the future.
function checkStockDelta (stockArray) {
  if (stockArray[1] > stockArray[2]) {
      // console.log(stockArray[0] + ' open is higher than close')
      stockTickerHTML = stockTickerHTML + `
          <div class="ticker__item__down">${stockArray[0]}</div>
          <div class="ticker__image"><img src="img/sad-trump-face.png" alt="Sad Trump Face"></div>
          <div class="ticker__value__down">${stockArray[2]}</div>
          `
  } else {
      // console.log(stockArray[0] + ' close is higher than open')
      stockTickerHTML = stockTickerHTML + `
          <div class="ticker__item__up">${stockArray[0]}</div>
          <div class="ticker__image"><img src="img/happy-trump-face.png" alt="Happy Trump Face"></div>
          <div class="ticker__value__up">${stockArray[2]}</div>
          `
    }
}


document.addEventListener('DOMContentLoaded', function () {
  var ticker = document.getElementById('ticker')

  // All of the fetch functions for stock data are called here, then ran through the checkStockDelta function
  // The catch function runs if the API call fails, reverting to historical data we have stored in this repo
  Promise.all([fetchDowTicker(), fetchSP500Ticker(), fetchNASDAQTicker(), fetchOilTicker(), fetchGoldTicker()])

    .then(function (array) {

      // console.log('all', array)
      // console.info('~~~~~~~~')

      // console.log('dowArray:')
      // console.log(dowArray)
      // console.info('~~~~~~~~')

      // console.log('SP500Array:')
      // console.log(SP500Array)
      // console.info('~~~~~~~~')

      // console.log('NASDAQArray:')
      // console.log(NASDAQArray)
      // console.info('~~~~~~~~')

      // console.log('oilArray:')
      // console.log(oilArray)
      // console.info('~~~~~~~~')

      // console.log('goldArray:')
      // console.log(goldArray)
      // console.info('~~~~~~~~')

      checkStockDelta(dowArray)
      checkStockDelta(SP500Array)
      checkStockDelta(NASDAQArray)
      checkStockDelta(oilArray)
      checkStockDelta(goldArray)
      setCalendar(calendarEvents) 
      // console.log(stockTickerHTML)
      ticker.innerHTML = `<div class="ticker__item__up">${moment(yesterday).format('dddd MMMM Do YYYY')}</div>` + stockTickerHTML
    })
    .catch(function (error) {
      yesterday = "2019-08-27"
      console.log('error! Alphavantage API did not return a value! Reverting to historical data.')
      console.log(error)

      // The arrays that pass to the checkStockDelta function are assigned the historical data
      dowArray = [historicalDow['Meta Data']['2. Symbol'], historicalDow['Time Series (Daily)'][yesterday]['1. open'], historicalDow['Time Series (Daily)'][yesterday]['4. close']]
      SP500Array = [historicalSP500['Meta Data']['2. Symbol'], historicalSP500['Time Series (Daily)'][yesterday]['1. open'], historicalSP500['Time Series (Daily)'][yesterday]['4. close']]
      NASDAQArray = [historicalNASDAQ['Meta Data']['2. Symbol'], historicalNASDAQ['Time Series (Daily)'][yesterday]['1. open'], historicalNASDAQ['Time Series (Daily)'][yesterday]['4. close']]
      oilArray = [historicalOil['Meta Data']['2. Symbol'], historicalOil['Time Series (Daily)'][yesterday]['1. open'], historicalOil['Time Series (Daily)'][yesterday]['4. close']]
      goldArray = [historicalGold['Meta Data']['2. Symbol'], historicalGold['Time Series (Daily)'][yesterday]['1. open'], historicalGold['Time Series (Daily)'][yesterday]['4. close']]
      
      console.log("historical data assigned to stock arrays")

      // The getEvents function only seems to work when passing the actual historical data variable, need to troubleshoot this more, could be better optimized
      getEvents(historicalDow)
      getEvents(historicalSP500)
      getEvents(historicalNASDAQ)
      getEvents(historicalOil)
      getEvents(historicalGold)

      // console.log("events gotten")

      checkStockDelta(dowArray)
      checkStockDelta(SP500Array)
      checkStockDelta(NASDAQArray)
      checkStockDelta(oilArray)
      checkStockDelta(goldArray)

      // console.log("stock deltas checked")      

      setCalendar(calendarEvents) 

      // console.log("calendar set")
      // console.log(stockTickerHTML)
      ticker.innerHTML = `<div class="ticker__item__up">${moment(yesterday).format('dddd MMMM Do YYYY')}</div>` + stockTickerHTML
    })
})

// This function gets called when a date is clicked on the calendar, changing the stock ticker to display data from the day clicked.
function changeStockTicker (date) { 
stockTickerHTML = ""
  checkStockDelta(dowArray)
  checkStockDelta(SP500Array)
  checkStockDelta(NASDAQArray)
  checkStockDelta(oilArray)
  checkStockDelta(goldArray)
  // console.log(stockTickerHTML)
  ticker.innerHTML = `<div class="ticker__item__up">${moment(date).format('dddd MMMM Do YYYY')}</div>` + stockTickerHTML
}

// This event listener is part of making the calendar date click feed into changeStockTicker
document.getElementById('calendar').addEventListener('click', function() {
  setTimeout(() => {
    console.log('clicked on ' + calendarDateClick)
    yesterday = calendarDateClick
    checkForWeekday()
    changeStockTicker(yesterday)
  }, 500);
})