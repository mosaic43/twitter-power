//TO DO
// Look into dayView and figure out how to render tweets for the date
//Look into making the trump face show up based on whether close/open data is good and whether he tweeted that day
//Look into changing background color based on market Trend


var eventArray = [] //empty array in which to load tweets
var calendarEl = document.getElementById('calendar')

//renders Calendar on dom load
document.addEventListener('DOMContentLoaded', function () {
  
  calendar.render()
  addTrumpPic()
  $(".fc-day-number").click(renderTweetsForSpecificDay);

  console.log(calendarEl);

  //*************** 
  // EVENT LISTENER 
  calendarEl.addEventListener("click", function(e) {
    console.log(e.target)
  })
  //************* */
})

function renderTweetsForSpecificDay () {
  var selectedDay = $('.fc-today').data('date')
  console.log("I've been clicked")
  console.log(selectedDay)

  // console.log(tweets2019.find(selectedDay))




  
  
}

function pushTweets () {
//Adds tweets to calendar
pushTweetEvents(tweets2019);
pushTweetEvents(tweets2018);
pushTweetEvents(tweets2017);
console.log(eventArray);
// calendar.render();

}

pushTweets(); //adds tweets to eventArray;




function addTrumpPic () {

  $('.fc-day').addClass('trumpPicture'); //adds trump picture, can use make a css class for good and bad to correlate with closing numbers

}
//Calendar Object
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: ['dayGrid', 'interaction'],
  header: {
    left: 'prevYear,prev,next,nextYear today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay'
  },
  navLinks: true, // can click day/week names to navigate views
  // editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: eventArray,
  dateClick: tweetChecker,
  dayClick: function(date, jsEvent, view) {

    alert('Clicked on: ' + date.format());

    alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

    alert('Current view: ' + view.name);

    // change the day's background color just for fun
    $(this).css('background-color', 'red');

  }
})



// checks tweet and pulls proper object based on dateClick
function tweetChecker (info) {

  console.log(info.dateStr)
  if (info.dateStr.includes('2019')) {
    console.log(tweets2019);
  } else if (info.dateStr.includes('2018')) {
    console.log(tweets2018);
  } else if (info.dateStr.includes('2017')) {
    console.log(tweets2017);
  } else {
    console.log('NO TWEETS BITCH')
  }
}

// function to add tweet events to calendar
function pushTweetEvents (tweetArray) {
    //runs through array and turns each tweet into an event object then adds it to event array
  tweetArray.map(individualTweet => {
    if (individualTweet !== tweetArray.length) {
    eventArray.push( {
      title: individualTweet.text,
      start: individualTweet.date,
      imageurl: '../img/trump-face.png'
    }, ) 
    } else {
      eventArray.push( {
        title: 'Last Tweet',
        start: individualTweet.date
      } )
    }

  })
}


