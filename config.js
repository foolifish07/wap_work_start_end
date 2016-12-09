var st = {
	time: {hour: 17, interval: 10},
	url: 'https://ckip.worksap.co.jp/cws/cws/srwtimerec',
	dataMap: function (username, passwd){
		return 	{
			dakoku: 'syussya',
			timezone: '480',
			user_id: username,
			password: passwd,
			watch: '',
		}
	}
}
var ed = {
	time: {hour: 12, interval: 10},
	url: 'https://ckip.worksap.co.jp/cws/cws/srwtimerec',
	dataMap: function (username, passwd){
		return 	{
			dakoku: 'taisya',
			timezone: '480',
			user_id: username,
			password: passwd,
			watch: '',
		}
	}
}

module.exports = {
	st: st,
	ed: ed,
}

// test
if (require.main === module){
	var account = {
		username: 'username',
		passwd: 'password',
	}
	console.log(st.dataMap(account.username, account.passwd));
	console.log(ed.dataMap(account.username, account.passwd));
}