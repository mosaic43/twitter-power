var datasource = [{
    type:'us', count:20, date:'12-2013'
  },{
    type:'us', count:10, date:'01-2014'
  },{
    type:'bug', count:15, date:'02-2014'
  },{
    type:'bug', count:23, date:'05-2014'
  }];

var sampleStockData = [{
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "MSFT",
        "3. Last Refreshed": "2019-08-23",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Date": {
        "2019-08-23": {
            "1. open": "137.1897",
            "2. high": "138.3500",
            "3. low": "132.8000",
            "4. close": "133.3900",
            "5. volume": "32523998"
        },
        "2019-08-22": {
            "1. open": "138.6600",
            "2. high": "139.2000",
            "3. low": "136.2900",
            "4. close": "137.7800",
            "5. volume": "18697000"
        },
        "2019-08-21": {
            "1. open": "138.5500",
            "2. high": "139.4900",
            "3. low": "138.0000",
            "4. close": "138.7900",
            "5. volume": "14970300"
        },
        "2019-08-20": {
            "1. open": "138.2100",
            "2. high": "138.7100",
            "3. low": "137.2400",
            "4. close": "137.2600",
            "5. volume": "21170800"
        },
        "2019-08-19": {
            "1. open": "137.8500",
            "2. high": "138.5500",
            "3. low": "136.8900",
            "4. close": "138.4100",
            "5. volume": "24355700"
        },
        "2019-08-16": {
            "1. open": "134.8800",
            "2. high": "136.4600",
            "3. low": "134.7200",
            "4. close": "136.1300",
            "5. volume": "24449100"
        },
        "2019-08-15": {
            "1. open": "134.3900",
            "2. high": "134.5800",
            "3. low": "132.2500",
            "4. close": "133.6800",
            "5. volume": "28074400"
        },
        "2019-08-14": {
            "1. open": "136.3600",
            "2. high": "136.9200",
            "3. low": "133.6700",
            "4. close": "133.9800",
            "5. volume": "32527300"
        },
        "2019-08-13": {
            "1. open": "136.0500",
            "2. high": "138.8000",
            "3. low": "135.0000",
            "4. close": "138.6000",
            "5. volume": "25154600"
        }
    }

}]


function buildListOfDates(data) {

    console.log("running buildListOfDates function now")
    console.log("full data dump:")
    console.log(data)
    console.log("getting only dates")
    console.log(data.Date)
    console.log("checking specific date")
    console.log(data.Date['2019-08-13'])
    console.log("getting closing amount for that date")
    console.log(data.Date['2019-08-13']['4. close'])

    return {chartDate: data.Date, chartNumbers: 100}

}

let modifiedStockData = []

modifiedStockData = sampleStockData.map(buildListOfDates)
console.log(modifiedStockData)

// console.log(sampleStockData.Date['2019-08-13']['1. open'])


