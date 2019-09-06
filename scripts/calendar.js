
//document.addEventListener('DOMContentLoaded', function () {
/////////////////Alphavantage Import////////////////////
// var yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
var keyOne = '95HH1JNCQL22W9NX'
var keyTwo = 'W9RSPLFTK9VC6IAY'
var keyThree = '5BFY5U7SB317S6H0'
var calendarEvents = []
// var dowArray = []
// var SP500Array = []
// var NASDAQArray = []
// var oilArray = []
// var goldArray = []
// var fullDowJSON = []
// var fullSP500JSON = []
// var fullNASDAQJSON = []
// var fullOilJSON = []
// var fullGoldJSON = []
// var calendarDateClick = ""
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
      colorStock = 'darkgreen'
    } else {
      colorStock = 'darkred'
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
    plugins: ['dayGrid', 'timeGrid', 'list', 'reduceDateProfile', 'reduce', 'Calendar.reduce', 'Calendar.dispatch', 'Calendar.batchRendering', 'Calendar.hydrate', 'new Calendar', 'HTMLDocument.<anonymous>', 'interaction'],
    header: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title,addEventButton',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    defaultDate: '2019-08-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: calendarEvents,
    dateClick: function(info) {
      calendarDateClick = info.dateStr
    },

  customButtons: {
    addEventButton: {
      text: 'add ticker number',
      click: function() {
        var dateStr = prompt('test');
      }
    }
  }
});


// End calendar changes for 9-3
calendar.render()
}
  