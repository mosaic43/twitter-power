let TweetContainer = $('#renderedTweets');

// console.log(tweets2019);

function changeDateFormat (twitterTimelineArray) {

    twitterTimelineArray.map(changeDate)

}

function changeDate (tweetObject) {
    console.log(parseTwitterDate(tweetObject.created_at))
}

function parseTwitterDate(aDate)
{   
  return new Date(
    aDate.replace(/^\w+ (\w+) (\d+) ([\d:]+)(\d+)$/,
        "$1 $2 $4 $3 UTC"));
  //sample: Wed Mar 13 09:06:07 +0000 2013 
}

changeDateFormat(tweets2019);