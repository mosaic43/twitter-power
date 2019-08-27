var delayInMilliseconds = 100; 

setTimeout(function() {
    var chart = new Taucharts.Chart({
        data: bloombergMainUrl,
        type: 'line',
        x: 'timestamp',
        y: 'dow',
        color: 'type',
        plugins: [
            Taucharts.api.plugins.get('tooltip')({
                fields: ['timestamp', 'text', 'dow']
            })
        ],
        guide: {
            x: {
                label: {text: 'Date'}
            },
            y: {
                label: {text: 'Stock Price', 
                color: {brewer: ['#ffffff']}},
                min: '25k',
                max: '27k',
                nice: false,
                autoScale: false,
            },
            padding: {b:40,l:40,t:10,r:10},
            showGridLines: 'y'
        },
        settings: {
            fitModel: 'fit-width'
        }
    });
    
    chart.renderTo(document.getElementById('stocks'));
}, delayInMilliseconds);




















// var chart = new Taucharts.Chart({
//     data: bloombergMainUrl,
//     type: 'line',
//     x: 'timestamp',
//     y: 'dow',
//     color: 'type',
//     plugins: [
//         Taucharts.api.plugins.get('tooltip')({
//             fields: ['timestamp', 'text', 'dow']
//         })
//     ],
//     guide: {
//         x: {
//             label: {text: 'Date'}
//         },
//         y: {
//             label: {text: 'Stock Price', 
//             color: {brewer: ['#ffffff']}},
//             min: '25k',
//             max: '27k',
//             nice: false,
//             autoScale: false,
//         },
//         padding: {b:40,l:40,t:10,r:10},
//         showGridLines: 'y'
//     },
//     settings: {
//         fitModel: 'fit-width'
//     }
// });

// chart.renderTo(document.getElementById('stocks'));
