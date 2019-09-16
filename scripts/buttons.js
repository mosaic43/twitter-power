let yearButton = $('.btn')

//year button active

yearButton.click(function () {
    
    $(this).addClass('is-active').siblings().removeClass('is-active');

})

//CUSTOM LEGEND

let nasdaqButton = $('#nasdaqButton')
let oilButton = $('#oilButton')
let goldButton = $('#goldButton')
let sp500Button = $('#sp500Button')
let dowButton = $('#dowButton')


nasdaqButton.click(function () {
   //changes button color and text strikethrough 
    nasdaqButton.toggleClass("isNasdaq")
    nasdaqButton.toggleClass("strike")

    //displays stock

    if (myChart.data.datasets[0].hidden === false) {
        myChart.data.datasets[0].hidden = true
    } else {
        myChart.data.datasets[0].hidden = false
    }

    myChart.update();
})

oilButton.click(function () {
   oilButton.toggleClass("isOil")
   oilButton.toggleClass("strike")

   //displays stock

   if (myChart.data.datasets[1].hidden === false) {
    myChart.data.datasets[1].hidden = true
} else {
    myChart.data.datasets[1].hidden = false
}

myChart.update();
})

goldButton.click(function () {
    goldButton.toggleClass("isGold")
    goldButton.toggleClass("strike")

    //displays stock

    if (myChart.data.datasets[2].hidden === false) {
        myChart.data.datasets[2].hidden = true
    } else {
        myChart.data.datasets[2].hidden = false
    }

    myChart.update();
})

sp500Button.click(function () {
    sp500Button.toggleClass("isSP500")
    sp500Button.toggleClass("strike")

    //displays stock

    if (myChart.data.datasets[3].hidden === false) {
        myChart.data.datasets[3].hidden = true
    } else {
        myChart.data.datasets[3].hidden = false
    }

    myChart.update();
})

dowButton.click(function () {
    dowButton.toggleClass("isDow")
    dowButton.toggleClass("strike")

    //displays stock

    if (myChart.data.datasets[4].hidden === false) {
        myChart.data.datasets[4].hidden = true
    } else {
        myChart.data.datasets[4].hidden = false
    }

    myChart.update();

})

//delete Button

let deleteButton = $('#deleteButton') 

deleteButton.click(function () {
    $('#chartDiv').removeClass('is-two-thirds')
    $('#chartDiv').addClass('is-full')

    
})