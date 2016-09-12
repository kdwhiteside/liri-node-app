if (process.argv[2] == 'my-tweets') {
  var twitterKeys = require('./keys.js');
  var twitter = require('twitter');
  object = twitterKeys.twitterKeys;
  // console.log("consumer key: " + object.consumer_key);
  // console.log("consumer_secret: " + object.consumer_secret);
  // console.log("access_token_key: " + object.access_token_key);
  // console.log("access_token_key: " + object.access_token_key);
  var Twitter = require('twitter');
  var client = new Twitter(twitterKeys.twitterKeys);

  var params = {screen_name: 'wiseguy517'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
    	for (var key in tweets) {
    		console.log(tweets[key].text)
    	}
      // console.log(tweets[0] + "tweets")

    	// console.log(response)
    }else{
    	console.log("ERROR" + error);
    	
    }
  });
}else if (process.argv[2] == 'spotify-this-song') {
  var spotify = require('spotify');
 
  spotify.search({ type: 'track', query: process.argv[3], limit: 1}, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }else{
        console.log(data.tracks); 
      }

  })}
