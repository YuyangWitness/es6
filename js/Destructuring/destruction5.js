//解构的用途
//1.交换变量
let x = 1;
let y = 2;
[x,y] = [y,x];

//从函数返回多个值
//返回数组
function test(){

	return [1,2,3];
}

let [a,b,c] = test();
//返回对象
function test(){
	return {
		foo: 1,
		bar: 2
	}
}

let { foo,bar } = test();

//函数参数的定义
function test([a,b,c]){}
test([1,2,3]);

function test({a,b,c}){}
test({a:1,b:2,c:3});

//提取JSON数据
let jsonData = {
	id:42,
	name:"yy",
	data:[1,2]
}

let{ id,name,data } = jsonData;

//遍历Map
var map = new Map();
map.set("first","hello");
map.set("sencond","world");

for(let [key,value] of map){
	console.log(key + " is " + value);
}











