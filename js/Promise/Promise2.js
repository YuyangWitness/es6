let p1 = new Promise(function(reslove,reject){
	setTimeout(function(){
		reslove("p1");
	},2000)
	
});
let p2 = new Promise(function(reslove,reject){
	reslove("p2")
});
let p3 = new Promise(function(reslove,reject){
	reslove("p3")
});

//data返回了一个数组，把三个promise的resolve的返回值放在数组里  ["p1", "p2", "p3"]
Promise.all([p1,p2,p3]).then(function(data){
	console.log(data);
})；


//谁最快执行哪个
Promise.race([p1,p2,p3]).then(function(data){
	console.log(data);
})