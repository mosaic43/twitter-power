// var datasource = [{
//     type:'us', count:20, date:'12-2013'
//   },{
//     type:'us', count:10, date:'01-2014'
//   },{
//     type:'bug', count:15, date:'02-2014'
//   },{
//     type:'bug', count:23, date:'05-2014'
//   }];

var chart = new Taucharts.Chart({
    data: datasource,
    type: 'line',
    x: 'date',
    y: 'count',
    color: 'type' // there will be two lines with different colors on the chart
});

chart.renderTo(document.getElementById('line'));

var chart = new Taucharts.Chart({
    data: modifiedStockData,
    type: 'line',
    x: 'chartDate',
    y: 'chartNumbers',
    color: 'type' // there will be two lines with different colors on the chart
});

chart.renderTo(document.getElementById('stocks'));
