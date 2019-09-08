// dowArray
// SP500Array
// NASDAQArray
// oilArray
// goldArray

//creates a new array with an object that contains timestamp and close date

let historicalDowTimeAndClose = getCloseDates(historicalDow)
let historicalSP500TimeAndClose = getCloseDates(historicalSP500)
let historicalNASDAQTimeAndClose = getCloseDates(historicalNASDAQ)
let historicalOilTimeAndClose = getCloseDates(historicalOil)
let historicalGoldTimeAndClose = getCloseDates(historicalGold)

//makesDOWObject to 2017

let historicalDowTime2017To2019 = [];
let historicalDowTime2017To2018 = [];
let historicalDowTime2018To2019 = [];
let historicalDowTime2017 = [];
let historicalDowTime2018 = [];
let historicalDowTime2019 = [];

let historicalDowClose2017To2019 = [];
let historicalDowClose2017To2018 = [];
let historicalDowClose2018To2019 = [];
let historicalDowClose2017 = [];
let historicalDowClose2018 = [];
let historicalDowClose2019 = [];


historicalDowTimeAndClose.map(createdDowObject => {

    if (createdDowObject.timestamp.includes("2019")) {
        historicalDowTime2017To2019.push(createdDowObject.timestamp)
        historicalDowTime2018To2019.push(createdDowObject.timestamp)
        historicalDowTime2019.push(createdDowObject.timestamp)
       
        historicalDowClose2017To2019.push(createdDowObject.value)
        historicalDowClose2018To2019.push(createdDowObject.value)
        historicalDowClose2019.push(createdDowObject.value)
       

    } else if (createdDowObject.timestamp.includes("2018")) {

        historicalDowTime2017To2019.push(createdDowObject.timestamp)
        historicalDowTime2018To2019.push(createdDowObject.timestamp)
        historicalDowTime2017To2018.push(createdDowObject.timestamp)
        historicalDowTime2018.push(createdDowObject.timestamp)

        historicalDowClose2017To2019.push(createdDowObject.value)
        historicalDowClose2018To2019.push(createdDowObject.value)
        historicalDowClose2017To2018.push(createdDowObject.value)
        historicalDowClose2018.push(createdDowObject.value)


    } else if (createdDowObject.timestamp.includes("2017")) {
        historicalDowTime2017To2019.push(createdDowObject.timestamp)
        historicalDowTime2017To2018.push(createdDowObject.timestamp)
        historicalDowTime2017.push(createdDowObject.timestamp)
        
        
        historicalDowClose2017To2019.push(createdDowObject.value)
        historicalDowClose2017To2018.push(createdDowObject.value)
        historicalDowClose2017.push(createdDowObject.value)


    }

}) 


// SP500

let historicalSP500Time2017To2019 = [];
let historicalSP500Time2017To2018 = [];
let historicalSP500Time2018To2019 = [];
let historicalSP500Time2017 = [];
let historicalSP500Time2018 = [];
let historicalSP500Time2019 = [];

let historicalSP500Close2017To2019 = [];
let historicalSP500Close2017To2018 = [];
let historicalSP500Close2018To2019 = [];
let historicalSP500Close2017 = [];
let historicalSP500Close2018 = [];
let historicalSP500Close2019 = [];


historicalSP500TimeAndClose.map(createdDowObject => {

    if (createdDowObject.timestamp.includes("2019")) {
        historicalSP500Time2017To2019.push(createdDowObject.timestamp)
        historicalSP500Time2018To2019.push(createdDowObject.timestamp)
        historicalSP500Time2019.push(createdDowObject.timestamp)
       
        historicalSP500Close2017To2019.push(createdDowObject.value)
        historicalSP500Close2018To2019.push(createdDowObject.value)
        historicalSP500Close2019.push(createdDowObject.value)
       

    } else if (createdDowObject.timestamp.includes("2018")) {

        historicalSP500Time2017To2019.push(createdDowObject.timestamp)
        historicalSP500Time2018To2019.push(createdDowObject.timestamp)
        historicalSP500Time2017To2018.push(createdDowObject.timestamp)
        historicalSP500Time2018.push(createdDowObject.timestamp)

        historicalSP500Close2017To2019.push(createdDowObject.value)
        historicalSP500Close2018To2019.push(createdDowObject.value)
        historicalSP500Close2017To2018.push(createdDowObject.value)
        historicalSP500Close2018.push(createdDowObject.value)


    } else if (createdDowObject.timestamp.includes("2017")) {
        historicalSP500Time2017To2019.push(createdDowObject.timestamp)
        historicalSP500Time2017To2018.push(createdDowObject.timestamp)
        historicalSP500Time2017.push(createdDowObject.timestamp)
        
        
        historicalSP500Close2017To2019.push(createdDowObject.value)
        historicalSP500Close2017To2018.push(createdDowObject.value)
        historicalSP500Close2017.push(createdDowObject.value)


    }

}) 


//NASDAQ

let historicalNASDAQTime2017To2019 = [];
let historicalNASDAQTime2017To2018 = [];
let historicalNASDAQTime2018To2019 = [];
let historicalNASDAQTime2017 = [];
let historicalNASDAQTime2018 = [];
let historicalNASDAQTime2019 = [];

let historicalNASDAQClose2017To2019 = [];
let historicalNASDAQClose2017To2018 = [];
let historicalNASDAQClose2018To2019 = [];
let historicalNASDAQClose2017 = [];
let historicalNASDAQClose2018 = [];
let historicalNASDAQClose2019 = [];


historicalNASDAQTimeAndClose.map(createdDowObject => {

    if (createdDowObject.timestamp.includes("2019")) {
        historicalNASDAQTime2017To2019.push(createdDowObject.timestamp)
        historicalNASDAQTime2018To2019.push(createdDowObject.timestamp)
        historicalNASDAQTime2019.push(createdDowObject.timestamp)
       
        historicalNASDAQClose2017To2019.push(createdDowObject.value)
        historicalNASDAQClose2018To2019.push(createdDowObject.value)
        historicalNASDAQClose2019.push(createdDowObject.value)
       

    } else if (createdDowObject.timestamp.includes("2018")) {

        historicalNASDAQTime2017To2019.push(createdDowObject.timestamp)
        historicalNASDAQTime2018To2019.push(createdDowObject.timestamp)
        historicalNASDAQTime2017To2018.push(createdDowObject.timestamp)
        historicalNASDAQTime2018.push(createdDowObject.timestamp)

        historicalNASDAQClose2017To2019.push(createdDowObject.value)
        historicalNASDAQClose2018To2019.push(createdDowObject.value)
        historicalNASDAQClose2017To2018.push(createdDowObject.value)
        historicalNASDAQClose2018.push(createdDowObject.value)


    } else if (createdDowObject.timestamp.includes("2017")) {
        historicalNASDAQTime2017To2019.push(createdDowObject.timestamp)
        historicalNASDAQTime2017To2018.push(createdDowObject.timestamp)
        historicalNASDAQTime2017.push(createdDowObject.timestamp)
        
        
        historicalNASDAQClose2017To2019.push(createdDowObject.value)
        historicalNASDAQClose2017To2018.push(createdDowObject.value)
        historicalNASDAQClose2017.push(createdDowObject.value)


    }

}) 

//OIL

let historicalOilTime2017To2019 = [];
let historicalOilTime2017To2018 = [];
let historicalOilTime2018To2019 = [];
let historicalOilTime2017 = [];
let historicalOilTime2018 = [];
let historicalOilTime2019 = [];

let historicalOilClose2017To2019 = [];
let historicalOilClose2017To2018 = [];
let historicalOilClose2018To2019 = [];
let historicalOilClose2017 = [];
let historicalOilClose2018 = [];
let historicalOilClose2019 = [];


historicalOilTimeAndClose.map(createdDowObject => {

    if (createdDowObject.timestamp.includes("2019")) {
        historicalOilTime2017To2019.push(createdDowObject.timestamp)
        historicalOilTime2018To2019.push(createdDowObject.timestamp)
        historicalOilTime2019.push(createdDowObject.timestamp)
       
        historicalOilClose2017To2019.push(createdDowObject.value)
        historicalOilClose2018To2019.push(createdDowObject.value)
        historicalOilClose2019.push(createdDowObject.value)
       

    } else if (createdDowObject.timestamp.includes("2018")) {

        historicalOilTime2017To2019.push(createdDowObject.timestamp)
        historicalOilTime2018To2019.push(createdDowObject.timestamp)
        historicalOilTime2017To2018.push(createdDowObject.timestamp)
        historicalOilTime2018.push(createdDowObject.timestamp)

        historicalOilClose2017To2019.push(createdDowObject.value)
        historicalOilClose2018To2019.push(createdDowObject.value)
        historicalOilClose2017To2018.push(createdDowObject.value)
        historicalOilClose2018.push(createdDowObject.value)


    } else if (createdDowObject.timestamp.includes("2017")) {
        historicalOilTime2017To2019.push(createdDowObject.timestamp)
        historicalOilTime2017To2018.push(createdDowObject.timestamp)
        historicalOilTime2017.push(createdDowObject.timestamp)
        
        
        historicalOilClose2017To2019.push(createdDowObject.value)
        historicalOilClose2017To2018.push(createdDowObject.value)
        historicalOilClose2017.push(createdDowObject.value)


    }

}) 


//GOLD

let historicalGoldTime2017To2019 = [];
let historicalGoldTime2017To2018 = [];
let historicalGoldTime2018To2019 = [];
let historicalGoldTime2017 = [];
let historicalGoldTime2018 = [];
let historicalGoldTime2019 = [];

let historicalGoldClose2017To2019 = [];
let historicalGoldClose2017To2018 = [];
let historicalGoldClose2018To2019 = [];
let historicalGoldClose2017 = [];
let historicalGoldClose2018 = [];
let historicalGoldClose2019 = [];


historicalGoldTimeAndClose.map(createdDowObject => {

    if (createdDowObject.timestamp.includes("2019")) {
        historicalGoldTime2017To2019.push(createdDowObject.timestamp)
        historicalGoldTime2018To2019.push(createdDowObject.timestamp)
        historicalGoldTime2019.push(createdDowObject.timestamp)
       
        historicalGoldClose2017To2019.push(createdDowObject.value)
        historicalGoldClose2018To2019.push(createdDowObject.value)
        historicalGoldClose2019.push(createdDowObject.value)
       

    } else if (createdDowObject.timestamp.includes("2018")) {

        historicalGoldTime2017To2019.push(createdDowObject.timestamp)
        historicalGoldTime2018To2019.push(createdDowObject.timestamp)
        historicalGoldTime2017To2018.push(createdDowObject.timestamp)
        historicalGoldTime2018.push(createdDowObject.timestamp)

        historicalGoldClose2017To2019.push(createdDowObject.value)
        historicalGoldClose2018To2019.push(createdDowObject.value)
        historicalGoldClose2017To2018.push(createdDowObject.value)
        historicalGoldClose2018.push(createdDowObject.value)


    } else if (createdDowObject.timestamp.includes("2017")) {
        historicalGoldTime2017To2019.push(createdDowObject.timestamp)
        historicalGoldTime2017To2018.push(createdDowObject.timestamp)
        historicalGoldTime2017.push(createdDowObject.timestamp)
        
        
        historicalGoldClose2017To2019.push(createdDowObject.value)
        historicalGoldClose2017To2018.push(createdDowObject.value)
        historicalGoldClose2017.push(createdDowObject.value)


    }

}) 


// ACTUAL CHART 

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: historicalDowTime2019,
    datasets: [
      {
        data: historicalNASDAQClose2017To2019,
        label: "NASDAQ",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: historicalOilClose2019,
        label: "Oil",
        borderColor: "#e8c3b9",
        fill: false
      },
      {
        data: historicalGoldClose2019,
        label: "Gold",
        borderColor: "#c45850",
        fill: false
      },
      {
        data: historicalSP500Close2019,
        label: "S&P 500",
        borderColor: "#8e5ea2",
        hidden: true,
        fill: false
      },
      { 
        data: historicalDowClose2019,
        label: "DOW",
        borderColor: "#3e95cd",
        hidden: true,
        fill: false
      }
    ]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
    // Sloppy function to get value of a point and run it into the tweets function
    // also resizes the canvas
    onClick: function (e) {
        var activePoints = myChart.getElementsAtEvent(e);
        var selectedIndex = activePoints[0]._index;
        var chartDate = this.data.labels[selectedIndex]
        //resizes chart
        const chartDiv = $("#chartDiv")
        chartDiv.removeClass('is-full')
        chartDiv.addClass('is-two-thirds')
        findTweets(chartDate);
    }
    
}
});

//CHART UPDATE BUTTONS

let button2017 = $('#2017Button')
let button2018 = $('#2018Button')
let button2019 = $('#2019Button')
let button2017to2018 = $('#2017to2018Button')
let button2018to2019 = $('#2018to2019Button')
let button2017to2019 = $('#2017to2019Button')

button2017.click(only2017)
button2018.click(only2018)
button2019.click(only2019)
button2017to2018.click(only2017to2018)
button2018to2019.click(only2018to2019)
button2017to2019.click(only2017to2019)

//UPDATES TO ONLY SHOW 2017
function only2017 () {
    myChart.data.labels = historicalDowTime2017;

    myChart.data.datasets[0].data = historicalNASDAQClose2017;
    myChart.data.datasets[1].data = historicalOilClose2017
    myChart.data.datasets[2].data = historicalGoldClose2017
    myChart.data.datasets[3].data = historicalSP500Close2017
    myChart.data.datasets[4].data = historicalDowClose2017

    myChart.update();
}

//UPDATES TO ONLY SHOW 2018
function only2018 () {
    myChart.data.labels = historicalDowTime2018;

    myChart.data.datasets[0].data = historicalNASDAQClose2018;
    myChart.data.datasets[1].data = historicalOilClose2018
    myChart.data.datasets[2].data = historicalGoldClose2018
    myChart.data.datasets[3].data = historicalSP500Close2018
    myChart.data.datasets[4].data = historicalDowClose2018

    myChart.update();
}

//UPDATES TO ONLY SHOW 2019
function only2019 () {
    myChart.data.labels = historicalDowTime2019;

    myChart.data.datasets[0].data = historicalNASDAQClose2019;
    myChart.data.datasets[1].data = historicalOilClose2019
    myChart.data.datasets[2].data = historicalGoldClose2019
    myChart.data.datasets[3].data = historicalSP500Close2019
    myChart.data.datasets[4].data = historicalDowClose2019

    myChart.update();
}

//updates to show 2017-18
function only2017to2018 () {
    myChart.data.labels = historicalDowTime2017To2018;

    myChart.data.datasets[0].data = historicalNASDAQClose2017To2018;
    myChart.data.datasets[1].data = historicalOilClose2017To2018
    myChart.data.datasets[2].data = historicalGoldClose2017To2018
    myChart.data.datasets[3].data = historicalSP500Close2017To2018
    myChart.data.datasets[4].data = historicalDowClose2017To2018

    myChart.update();
}

//updates to show 2018-2019
function only2018to2019 () {
    myChart.data.labels = historicalDowTime2018To2019;

    myChart.data.datasets[0].data = historicalNASDAQClose2018To2019;
    myChart.data.datasets[1].data = historicalOilClose2018To2019
    myChart.data.datasets[2].data = historicalGoldClose2018To2019
    myChart.data.datasets[3].data = historicalSP500Close2018To2019
    myChart.data.datasets[4].data = historicalDowClose2018To2019

    myChart.update();
}

//updates to show 2017-19
function only2017to2019 () {
    myChart.data.labels = historicalDowTime2017To2019;

    myChart.data.datasets[0].data = historicalNASDAQClose2017To2019;
    myChart.data.datasets[1].data = historicalOilClose2017To2019
    myChart.data.datasets[2].data = historicalGoldClose2017To2019
    myChart.data.datasets[3].data = historicalSP500Close2017To2019
    myChart.data.datasets[4].data = historicalDowClose2017To2019

    myChart.update();
}

// Listener for CHART

// const chartDiv = $("#myChart");

// chartDiv.click(function (event) {
//     console.log(historicalDowTime2017To2019[event.clientX], event.clientX)
// })

//creates an object with timestamp: XXX and close: XXXX
function getCloseDates (stockArray) {

    var rawSeries = stockArray['Time Series (Daily)']
    var series = Object.keys(rawSeries).reverse().map(timestamp => {
        return {timestamp, value: rawSeries[timestamp]['4. close']}
      })

      return series
}
