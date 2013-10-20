#!/usr/bin/env node

var readline = require('readline');

var inited = false;
var plays = new Object();
var counters = { 'rock':'paper', 'paper':'scissors', 'scissors':'rock' };

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (cmd) {
  if(cmd === 'init' && !inited) {
    console.log(move(null));
    inited = true;
  }
  else if(inited) {
    var results = cmd.split(' ');
    if(plays[results[1]]) {
      plays[results[1]] = plays[results[1]] + 1;
    }
    else {
      plays[results[1]] = 1;
    }
    console.log(move(results[1]));
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log('You just typed: '+cmd);
>>>>>>> Initial nobot bot
=======
    console.log('You just typed: '+cmd);
>>>>>>> Initial nobot bot
  }
});

var move = function(played) {
  if(!inited) {
    return 'scissors';
  }
<<<<<<< HEAD
<<<<<<< HEAD
  var mostPlayed = Object.keys(plays).sort(function(a, b) { return (plays[b] - plays[a])});
=======
  var mostPlayed = Object.keys(plays).sort(function(a, b) { return (plays[a] - plays[b])});
>>>>>>> Initial nobot bot
=======
  var mostPlayed = Object.keys(plays).sort(function(a, b) { return (plays[a] - plays[b])});
>>>>>>> Initial nobot bot
  return counters[mostPlayed[0]];
};
