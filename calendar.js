document.addEventListener('DOMContentLoaded', function(){

    var calendarEl = document.getElementById('calendar');
    var chooseTicker = document.getElementById('chooseTicker');


    var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid', 'timeGrid', 'list', 'reduceDateProfile', 'reduce', 'Calendar.reduce', 'Calendar.dispatch', 'Calendar.batchRendering', 'Calendar.hydrate', 'new Calendar', 'HTMLDocument.<anonymous>', ],
    header: {
        left: 'prevYear,prev,next,nextYear chooseTicker',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      defaultDate: '2019-08-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
      
        {
          title: 'img src="img/trump-face.png"',
          url: 'http://google.com/',
          start: '2019-08-29'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2019-08-27'
          }
      ]
    });
    calendar.render();
  });


 





