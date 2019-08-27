<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Twitter Power</title>
    <link rel="stylesheet" href="bulma.css">
    <link rel="stylesheet" href="style.css">

    <!-- REQUIRED TAUCHART CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/taucharts@2/dist/taucharts.min.css">
    <!-- END TAUCHART CSS -->

    <script src="alphavantage.js"></script>

</head>
<body>

<!-- PHP TO RETRIEVE TWEETS ***GK****  -->

<?php 

//Twitter tokens

require_once('twitterapi/OAuth.php');
require_once('twitterapi/TwitterAPIExchange.php');
require_once('twitterapi/twitteroauth.php');

$settings = array(
    'oauth_access_token' => "281880066-ZdSb40LGOgYEAV1NAADeXZirpA2mmrTPtLpoVfPG",
    'oauth_access_token_secret' => "DMI5ONcG5wb6aRWCyZ9i0IIXqB4lZCCF3cifKRpXMWHCA",
    'consumer_key' => "Fw5LP5vbPS9hHeD53TWP71JYP",
    'consumer_secret' => "OVmF1VwkD6u7nNvVU7pTj4NHY9GJLNorRYWFQ76vHkdT2Z7Aay"
);

$requestMethod = 'GET';

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

$getField = '?screen_name=realDonaldTrump&exclude_replies=true&include_rts=false&count=10&trim_user=true';

$twitter = new TwitterAPIExchange($settings);
$response = $twitter -> setGetfield($getField)
                    -> buildOauth($url,$requestMethod)
                    -> performRequest();

// echo json_encode($response);

?>

<!-- END OF PHP ***GK***  -->

    <nav class="navbar is-light">

        <div class="navbar-brand">
            <img class="navbar-item" id="navbar-photo" src="img/trump-face.png" alt="Trump Face">
            <a href="#" class="navbar-item">Twitter-Power</a>
        </div>

        <div class="navbar-end">
            <a href="#" class="navbar-item">About</a>
        </div>
    </nav>

    <section class="hero is-dark has-text-centered">
        <div class="hero-body">
          <div class="container">
              <!-- CHART DIV -->
              <div style="color: white" id='stocks'></div>
              <!-- END CHART DIV -->
          </div>
        </div>
      </section>
  
    <!-- My addin -->
    <div class="searchArea">
      <h3>Search for Major Stock Market Events</h3>
      <input class="input is-rounded" type="text" placeholder="Rounded input">
      <button class="btn btn-primary input-group-btn" type="submit">Search</button>
    </div>
    <section class="searchResults">
    <div class="container">

    </div>
    </section>
      <!-- My addin - end -->
  
    

    
  
  <!-- JS to create trumpTweets variable ***GK*** -->
  <script>var trumpTweets = JSON.parse(<?php echo json_encode($response, JSON_PRETTY_PRINT); ?>)
  </script>
  <!-- End of trumpTweets JS  -->

  <!-- REQUIRED TAUCHART SCRIPTS -->
  <script src="https://cdn.jsdelivr.net/npm/d3@4.13.0/build/d3.min.js" charset="utf-8"></script>
  <script src="https://cdn.jsdelivr.net/npm/taucharts@2/dist/taucharts.min.js" type="text/javascript"></script>
  <!-- END OF TAUCHART SCRIPTS -->

  <script src="jquery-3.3.1.min.js"></script>
  <script src="sample-data.js"></script>
  <script src="chart.js"></script>
  <script src="tweets.js"></script>

</body>
</html>