document.addEventListener('DOMContentLoaded', function () {
  
  calendar.render()
})
var calendarEl = document.getElementById('calendar')

var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: ['dayGrid'],
  header: {
    left: 'prevYear,prev,next,nextYear today',
    center: 'title',
    right: 'dayGridMonth,dayGridWeek,dayGridDay'
  },
  defaultDate: '2019-08-12',
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  eventLimit: true, // allow "more" link when too many events
  events: [

    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: '2019-08-28'
    }
  ]
  
})
calendar.events.push({
  title: 'ADDED',
  url: 'http://google.com/',
  start: '2019-08-30'
})


