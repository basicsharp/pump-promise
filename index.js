'use strict';

var pump = require('pump');

var noop = function () {}

var isFn = function (fn) {
  return typeof fn === 'function'
}

var pumpPromise = function() {
  var streams = Array.prototype.slice.call(arguments);
  isFn(streams[streams.length - 1] || noop) && streams.pop() || noop;
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
