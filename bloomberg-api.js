document.addEventListener('DOMContentLoaded', function(){

    var urlData;

$.getJSON('https://www.bloomberg.com/bbg-gfx/trump-market-tweets-vs-dow/main.json', function(myresponse){
    urlData = myresponse
    console.log(urlData)
});
})

