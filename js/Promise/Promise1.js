let p = new Promise(function(reslove,reject){
	setTimeout(function(){
		console.log("aaaa");
		reslove("bbb");
	},2000);
})

p.then(function(data){
	console.log(data);
})

//链式,如果返回非Promise，那么会把返回值作为下个promise的reslove的值

p.then(function(data){
	console.log(data);
	return "cccc";
}).then(function(data){
	console.log(data);
})

//返回promise也可以使用链式，则返回一个promise的then
p.then(function(data){
	console.log(data);
	return p;
}).then(function(data){
	console.log(data);
})