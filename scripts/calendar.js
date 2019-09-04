document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar')

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid', 'timeGrid', 'list', 'reduceDateProfile', 'reduce', 'Calendar.reduce', 'Calendar.dispatch', 'Calendar.batchRendering', 'Calendar.hydrate', 'new Calendar', 'HTMLDocument.<anonymous>'],
    header: {
      left: 'prevYear,prev,next,nextYear today',
      center: 'title,addEventButton',
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
    ],

// calendar changes for 9-3
// var calendar = new FullCalendar.Calendar(calendarEl, {
//   plugins: [ 'dayGrid' ],
//   defaultView: 'dayGridMonth',
//   header: {
//     center: 'addEventButton'
//   },
  customButtons: {
    addEventButton: {
      text: 'add ticker number',
      click: function() {
        var dateStr = prompt('test');
        // var date = new Date(dateStr + 'T00:00:00'); // will be in local time

        // if (!isNaN(date.valueOf())) { // valid?
        //   calendar.addEvent({
        //     title: 'test',
        //     start: date,
        //     allDay: true
        //   });
        //   alert('Great. Now, update your database...');
        // } else {
        //   alert('Invalid date.');
        // }
      }
    }
  }
});


//     function addItem(){
//         var li = document.createElement("LI");  
//         var input = document.getElementById("add");
//         li.innerHTML = input.value;
//         input.value = "";

//         document.getElementById("faves").appendChild(li);
//     }


// <input type="button" id="btnAdd" value="Add" onclick="addItem()"></input>



// End calendar changes for 9-3


  calendar.render()
})
