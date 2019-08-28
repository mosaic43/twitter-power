let JSONcontainer = document.getElementById('jsonOutput');


function changeDateFormat (twitterTimelineArray) {

//runs change date on each item in the JSON

    twitterTimelineArray.map(changeDate)
    return twitterTimelineArray;

}

function changeDate (tweetObject) {
    tweetObject.date = parseTwitterDate(tweetObject.created_at)
}

function parseTwitterDate(aDate)
{   
    var date = moment(aDate).format("YYYY-MM-DD");
    // var formatted = date.toString("MM-dd-yyyy");
    return date;
}
JSONcontainer.innerHTML = JSON.stringify(changeDateFormat(tweets2019), null, 4)