var request = require('request');
var config = require('./config.js');
var accounts = require('./accounts.js');

function gaost(now){
	var datas = accounts.map(function(ele){
		return config.st.dataMap(
			ele.username, 
			ele.password
		);
	});
	return function(){
		datas.forEach(function(data){
			post(config.st.url, data, now);
		});	
	}
}

function gaoed(now){
	var datas = accounts.map(function(ele){
		return config.ed.dataMap(
			ele.username, 
			ele.password
		);
	});
	return function(){
		datas.forEach(function(data){
			post(config.ed.url, data, now);
		});	
	}
}

function post(url, data, now){
	var prefix = '> POST FOR ' + now.toUTCString() + ' :::: ' + data.user_id;

	request.post({
		url: url, 
		form: data,
	}, function(error, response, body){
		var res = body.match(/start/);
		if (res)
	    	console.log(prefix, 'fail!');
	    else 
	    	console.log(prefix, 'success!');
	});
}

module.exports = {
	gaost: gaost,
	gaoed: gaoed,
}

// test
if (require.main === module){
	// gaost(new Date())();
	gaoed(new Date())();
}