
var twit = require('twit');

var T = new twit({
  consumer_key:         'EvxNgGSP6cuj4HwfadOdK4TQf',
  consumer_secret:      'wOq3oKUklLTQgyra5Pxc7FAgoL86sRSnO5M2a5GkksXH8tzENE',
  access_token:         '3444500774-tjrjJO7x8zDBysQxcwUT7KxHQYfkPnGOkWng1Ml',
  access_token_secret:  'JW9zxhT437WfPGTkhX5Rox8EcIYAMd2UAOoRZ6IzJ5jsP'
});

function findStartupIdeas() {
	T.get('search/tweets', {q: "#startupideas OR #startupidea", result_type: "recent"}, function (err, data,response) {
		if (!err && data.statuses[0] && data.statuses[0].id_str) {
			var tweet = data.statuses[0].id_str;
			T.post('statuses/retweet/' + tweet, { }, function (err, response) {
				if (response) {
					console.log('Retweeted: ' + '"' + data.statuses[0].text + '" tweet ID: ' + data.statuses[0].id_str);
				}
				if (err) {
					console.log('Retweet Error: ', err);
				}
			});
		} else {
			console.log('Error: ' + err);
		}
	});
}

findStartupIdeas();
try{
  setInterval(findStartupIdeas, 3600000);
} catch (e){
  console.error(e);
}
