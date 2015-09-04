
var twit = require('twit');

var T = new twit({
  consumer_key:         'EvxNgGSP6cuj4HwfadOdK4TQf',
  consumer_secret:      'wOq3oKUklLTQgyra5Pxc7FAgoL86sRSnO5M2a5GkksXH8tzENE',
  access_token:         '3444500774-tjrjJO7x8zDBysQxcwUT7KxHQYfkPnGOkWng1Ml',
  access_token_secret:  'JW9zxhT437WfPGTkhX5Rox8EcIYAMd2UAOoRZ6IzJ5jsP'
});

//
//  tweet 'hello world!'
//
// T.post('statuses/update', { status: 'Hello World, from Node.js!' }, function(err, data, response) {
//   console.log(data)
// });

T.get('search/tweets', { q: '#startupidea', count: 5, language: 'en'}, function(err, data, response) {
  console.log(data)
});

