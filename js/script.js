var map = new Map();
map.set("first","hello");
map.set("sencond","world");

for(let [key,value] of map){
	console.log(key + " is " + value);
}