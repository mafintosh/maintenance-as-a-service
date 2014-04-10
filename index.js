#!/usr/bin/env node

var port = process.argv.indexOf('--port');
if (port === -1) port = process.argv.indexOf('-p');

port = parseInt(process.argv[port+1], 10) || 80;

var http = require('http');
var fs = require('fs');
var path = require('path');

var buf = fs.readFileSync(path.join(__dirname, 'maintainance.html'));

var server = http.createServer(function(request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	response.end(buf);
});

server.listen(port);
