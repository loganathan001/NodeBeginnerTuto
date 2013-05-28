var server = require("./server");
var router = require("./router");
var handle = require("./requestMap").handle;

server.start(router.route, handle);