'use strict';

var pump = require('pump');

var pumpPromise = function() {
  var streams = Array.prototype.slice.call(arguments);
  if (Array.isArray(streams[0])) streams = streams[0];
  if (streams.length < 2) throw new Error('pump requires two streams per minimum');

  return new Promise(function(resolve, reject) {
    pump(streams, function(error) {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

module.exports = pumpPromise;
