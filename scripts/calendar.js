var eventArray = []

eventArray.push(

  {
    title: 'Manually added',
    url: 'http://google.com/',
    start: '2019-08-01'
  }
)

function pushTweetEvents (tweetArray) {

  tweetArray.map(individualTweet => {
    if (individualTweet !== tweetArray.length) {
    eventArray.push( {
      title: 'HE TWEEEEETED',
      start: individualTweet.date
    }, ) 
    } else {
      eventArray.push( {
        title: 'HE TWEEEEETED',
        start: individualTweet.date
      } )
    }

  })
}

pushTweetEvents(tweets2019);

document.addEventListener('DOMContentLoaded', function () {
  
  calendar.render()
})
var calendarEl = document.getElementById('calendar')

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

// console.log(calendar[Calender][events])


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