let TweetContainer = $('#renderedTweets');
let datePicker = $('#datePicker');

// function datePickerFn () {
//     datePicker.datePicker();
// }

// // datePickerFn();

datePicker.datePicker({
    onSelect: function() { 
        var dateObject = datePicker.datepicker('getDate'); 
        console.log(dateObject);
    }
})