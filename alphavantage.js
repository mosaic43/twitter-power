
document.addEventListener('DOMContentLoaded', function(){

        var urlData;

    $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo', function(myresponse){
        urlData = myresponse["Time Series (Daily)"];
        console.log(urlData)
    });
})

