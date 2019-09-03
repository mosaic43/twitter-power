let tweetContainer = $('#tweetContainer');
let datePickerEl = $('#datePicker');

datePickerEl.change(findTweets) //listens for a change on the datepicker
       

function findTweets (e) {

    let chosenDate = datePickerEl.val(); 

        tweetContainer.empty(); //clears out previous tweets
   
        if (chosenDate.includes("2019")) {

            //for 2019
            
            tweets2019.map(function (tweet) {

                if (tweet.date === chosenDate) {
                    tweetContainer.append(renderTweets(tweet));
                } 
            })

        } else if (chosenDate.includes("2018")) {
            
            //for 2018

            tweets2018.map(function (tweet) {

                if (tweet.date === chosenDate) {
                    tweetContainer.append(renderTweets(tweet));
                } 
            })

        } else if (chosenDate.includes("2017")) {
            
            //for 2017

            tweets2017.map(function (tweet) {

                if (tweet.date === chosenDate) {
                    tweetContainer.append(renderTweets(tweet));
                } 
            })

        } else {
            tweetContainer.html("NO TWEETS AVAILABLE")
        }


}

function renderTweets (tweet) {

    return `
    <div class="tile is-4 is-parent">

        <div class="tile is-child tweet">

            <div class="box">
                <article class="media">

                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="img/trump-face.png" alt="Trump Face">
                        </figure>
                    </div>

                    <div class="media-content">
                        <div class="content">
                            <p>
                            <strong>Donald J. Trump</strong> <small>@realDonaldTrump</small> <small>${moment(tweet.created_at).format('h:mm A')}</small>
                            <br>
                            ${tweet.text}
                            </p>
                        </div>

                    </div>
                </article>
            </div>
        </div>
    </div>`


}

// PROMISES!!

function fetchTweets2017 () {
    fetch('http://localhost:5000/historicalTweets/condensed_2017.json')
    .then(function (response) {
        console.log(response.json())
        return response.json()

    })
    }

    function fetchTweets2018 () {
        fetch('http://localhost:5000/historicalTweets/condensed_2018.json')
        .then(function (response) {
            return response.json()
        })
        }

        function fetchTweets2019 () {
            fetch('http://localhost:5000/historicalTweets/condensed_2019.json')
            .then(function (response) {
                return response.json()

            })
            }

Promise.all([fetchTweets2017(), fetchTweets2018(), fetchTweets2019()]).then((resultsArr) => {

    const tweets2017 = resultsArr[0];
    const tweets2018 = resultsArr[1];
    const tweets2019 = resultsArr[2];

    console.log(resultsArr)
    console.log('This is 2017', JSON.parse(tweets2017))
    console.log('This is 2018', tweets2018)
    console.log('This is 2019', tweets2019)

})
            