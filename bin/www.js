#!/usr/bin/env node

var app = require('../index');
var pg = require('../lib/postgres');

// Your database configuration
var DATABASE_URL = 'postgres://apiuser:apiuser123@localhost:5432/api';

// Connect to mysql database
pg.initialize(DATABASE_URL, function(err) {
  if (err) {
    throw err;
  }

  // Which port to listen on
  app.set('port', process.env.PORT || 3000);

  // Start listening for HTTP requests
  var server = app.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
});
