// document.addEventListener('DOMContentLoaded', function(){

var bloombergMainUrl

$.ajax({
  type: 'GET',
  headers: { 'Access-Control-Allow-Origin': '*' },
  url: 'https://www.bloomberg.com/bbg-gfx/trump-market-tweets-vs-dow/main.json?callback=?'
}).done(function (myresponse) {
  bloombergMainUrl = myresponse
})

// })
