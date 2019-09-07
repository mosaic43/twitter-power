
// var keyOne = '95HH1JNCQL22W9NX'
var keyOne = 'YB6ZT5O0KXPJUC7J'
// var keyTwo = 'W9RSPLFTK9VC6IAY'
var keyTwo = 'DGAKEYRA6U8QOI3S'
var keyThree = '5BFY5U7SB317S6H0'
//var calendarEvents = []
var symbolTicker
var open = "1. open"
var close = "4. close"

var sp500Event = []
var spOil = []
var spSpx = []
var spGold = []
var dowEvent = []

//////// Main Function for Creating Event for Calendar////////
function getEvents(tickerData) {

 var symbolTicker = [tickerData['Meta Data']['2. Symbol']]
 var tickerObject = [tickerData['Meta Data']['2. Symbol'], tickerData['Time Series (Daily)']]
 
  var stockDates = tickerObject[1]

 var result = Object.keys(stockDates).map(function(key, object) {
    var colorStock = ''     
    var thisOpen = stockDates[key][open]
    var thisClose = stockDates[key][close]

    if (thisClose > thisOpen) {
      colorStock = 'green'
    } else {
      colorStock = 'red'
    }
  var thisEvent = {title: symbolTicker[0], start: key, color:colorStock}
  calendarEvents.push(thisEvent)
})
}

////////////// Function for each Ticker ///////////////
function fetchNASDAQ () {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDAQ&outputsize=full&apikey=${keyOne}`)
    .then(function (response) {
    return  response.json() 
    })
    .then(function (json) {
      getEvents(json) 
    })

 }

 function fetchSP500 () {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=${keyTwo}`)
    .then(function (response) {
    return  response.json() 
    })
    .then(function (json) {
      getEvents(json) 
    })
}

function fetchOil () {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=OIL&outputsize=full&apikey=${keyThree}`)
    .then(function (response) {
    return  response.json() 
    })
    .then(function (json) {
      getEvents(json) 
    })
  }

  function fetchGold () {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOLD&outputsize=full&apikey=${keyOne}`)
    .then(function (response) {
    return  response.json() 
    })
    .then(function (json) {
      getEvents(json) 
    })
  }

  function fetchDow () {
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DOW&outputsize=full&apikey=${keyTwo}`)
    .then(function (response) {
    return  response.json() 
    })
    .then(function (json) {
      getEvents(json) 
    })
  }

  //////Promise which calls all functions//////
  Promise.all([fetchDow(), fetchSP500(), fetchNASDAQ(), fetchOil(), fetchGold()])
    .then(function () {
      setCalendar(calendarEvents) 
    })
    .catch(function() {
      setCalendar()
    })


   
//////////Function to create calendar
function setCalendar() {
  var calendarEl = document.getElementById('calendar')


  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid', 'interaction'],
    header: {
      left: 'prevYear,prev,next,nextYear',
      center: 'title,addEventButton',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    defaultDate: '2019-09-07',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: calendarEvents,
    eventOrder: "-title",
    dateClick: function(info) {
      calendarDateClick = info.dateStr
      findTweets(info.dateStr)
    }
});


// End calendar changes for 9-3
calendar.render()
}
  
