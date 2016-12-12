var schedule = require('node-schedule');
var post = require('./post');
var st = config = require('./config.js').st.time;
var ed = config = require('./config.js').ed.time;

function task(){
	var now = new Date();
	console.log('It\'s time to do something at: ',now.toUTCString());

	if (now.getHours() === st.hour){
		console.log('START work');
		timeoutpost(st.interval, post.gaost(now));
	}
	if (now.getHours() === ed.hour){
		console.log('END work');
		timeoutpost(ed.interval, post.gaoed(now));
	}

	console.log();
}

function timeoutpost(interval, fn){
	var millisec = Math.random() * interval * 1000; 
	console.log('After', millisec / 1000 / 60, ' minutes later gao yi bo');

	setTimeout(fn, millisec);
}

function main(){
	schedule.scheduleJob('0 0 */1 * * *', task);
}

module.exports = main;

// test
if (require.main === module){
	schedule.scheduleJob('*/3 * * * * *', task);
}