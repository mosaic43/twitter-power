let tweetContainer = $('#tweetContainer');
let datePickerEl = $('#datePicker');

datePickerEl.change(findTweets) //listens for a change on the datepicker
       
        function checkFetch () {
        fetch('http://localhost:5000/historicalTweets/condensed_2017.json')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
             alert(data);
        })
        }
        
        let tweets2017 = checkFetch();

       
       

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

