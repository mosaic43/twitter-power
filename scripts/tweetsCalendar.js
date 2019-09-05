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
})

function renderTweetsForSpecificDay () {
  //should render tweets in fc-day 
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
  defaultDate: '2019-08-12',
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: eventArray,
  dateClick: tweetChecker
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
      title: 'HE TWEEEEETED',
      start: individualTweet.date,
      imageurl: '../img/trump-face.png'
    }, ) 
    } else {
      eventArray.push( {
        title: 'HE TWEEEEETED',
        start: individualTweet.date
      } )
    }

  })
}


