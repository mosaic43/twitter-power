//TO DO
// Look into dayView and figure out how to render tweets for the date
//Look into making the trump face show up based on whether close/open data is good and whether he tweeted that day
//Look into changing background color based on market Trend


var calendarEvents = [] //empty array in which to load tweets
var calendarEl = document.getElementById('calendar')

//renders Calendar on dom load
document.addEventListener('DOMContentLoaded', function () {
  
  // calendar.render()


  calendarEl.addEventListener("click", function(e) {
    var target = $(e.target);
    // console.log(e.target);

    if (target.hasClass('fc-day-number')) {

      
      findTweets(target.data('goto').date);

    } else if (target.hasClass('fc-day')) {
      findTweets(target.data('date'))
    }
  })
})


function findTweets (date) {
  const chosenDate = date
  tweetContainer.empty() // clears out previous tweets
  $('#renderedTweets').removeClass("hidden")
  if (chosenDate.includes('2019')) {
    // for 2019

    tweets2019.map(function (tweet) {
      if (tweet.date === chosenDate) {
        tweetContainer.append(renderTweets(tweet))
      }
    })
  } else if (chosenDate.includes('2018')) {
    // for 2018

    tweets2018.map(function (tweet) {
      if (tweet.date === chosenDate) {
        tweetContainer.append(renderTweets(tweet))
      }
    })
  } else if (chosenDate.includes('2017')) {
    // for 2017

    tweets2017.map(function (tweet) {
      if (tweet.date === chosenDate) {
        tweetContainer.append(renderTweets(tweet))
      }
    })
  } else {
    tweetContainer.html('NO TWEETS AVAILABLE')
  }
}



function pushTweets () {
//Adds tweet count to calendar
pushTweetCount(tweets2019);
pushTweetCount(tweets2018);
pushTweetCount(tweets2017);
// console.log(calendarEvents);
// calendar.render();

}

pushTweets(); //adds tweets to eventArray;



///USED TO GET TWEET EVENT COUNT TO SHOW UP
function pushTweetCount (tweetArray) {
let tweetCount = 1;
let tweetDate = tweetArray[0]['date'];

for(let i=0; i < tweetArray.length; i++) {
  if (tweetDate === tweetArray[i].date) {
    tweetCount++;
  } else if (tweetDate !== tweetArray[i].date) {
    calendarEvents.push( {
      title: "Trump tweeted " + tweetCount + " times",
      start: tweetDate
    })
    tweetDate = tweetArray[i].date
    tweetCount = 1
  }
}
}


//Calendar Object
// var calendar = new FullCalendar.Calendar(calendarEl, {
//   plugins: ['dayGrid', 'interaction'],
//   header: {
//     left: 'prevYear,prev,next,nextYear today',
//     center: 'title',
//     right: 'dayGridMonth,dayGridWeek,dayGridDay'
//   },
//   navLinks: true, // can click day/week names to navigate views
//   // editable: true,
//   eventLimit: true, // allow "more" link when too many events
//   events: calendarEvents
//   // dateClick: tweetChecker
// })


//UNUSED

function renderTweetsForSpecificDay () {
  var selectedDay = $('.fc-today').data('date')
  console.log("I've been clicked")
  console.log(selectedDay)

  // console.log(tweets2019.find(selectedDay))
 
}

//UNUSED

function addTrumpPic () {

  $('.fc-day').addClass('trumpPicture'); //adds trump picture, can use make a css class for good and bad to correlate with closing numbers

}

//UNUSED

// function to add tweet events to calendar
function pushTweetEvents (tweetArray) {
  //runs through array and turns each tweet into an event object then adds it to event array
tweetArray.map(individualTweet => {
  // var tweetCount = 0;
  if (individualTweet !== tweetArray.length) {
  calendarEvents.push( {
    title: individualTweet.text,
    start: individualTweet.date,
  }, ) 
  } else {
    calendarEvents.push( {
      title: 'Last Tweet',
      start: individualTweet.date
    } )
  }

})
}

//UNUSED

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
