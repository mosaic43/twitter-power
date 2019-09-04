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
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2019-08-27'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2019-08-30'
          }
      ]
    });
    calendar.render();

// calendar changes for 9-3
// customButtons: {
//     addEventButton: {
//       text: 'add event...',
//       click: function() {
//         var dateStr = prompt('Enter a date in YYYY-MM-DD format');
//         var date = new Date(dateStr + 'T00:00:00'); // will be in local time

//         if (!isNaN(date.valueOf())) { // valid?
//           calendar.addEvent({
//             title: 'dynamic event',
//             start: date,
//             allDay: true
//           });
//           alert('Great. Now, update your database...');
//         } else {
//           alert('Invalid date.');
//         }
//       }
//     }
//   }

// End calendar changes for 9-3

  });


 





