//属性名遍历
//Symbol作为属性名，该属性不会出现在for...in、for...of循环中
//也不会出现在Object.keys(), Object.getOwnPropertyNames(), Json.stringify()返回
//但是Object.getOwnsPropertySymbols方法可以返回指定对象的所有Symbol属性名
let a = Symbol("a");
let b = Symbol("b");
let c = Symbol("c");
let obj = {
	[a]: "hello",
	[b]: "es6",
	[c]: "fine",
	age: 23,
	name: "yuyang"
}

//都不能遍历出Symbol属性
for( let key in obj){
	console.log(obj[key]); //23 yuyang
}

Object.getOwnPropertyNames(obj); //["age", "name"]
Object.keys(obj); //["age", "name"]
JSON.stringify(obj); //{"age":23,"name":"yuyang"}

//可以遍历出Symbol属性的方法Object.getOwnPropertySymbols

Object.getOwnPropertySymbols(obj); //[Symbol(a), Symbol(b), Symbol(c)]

//有一个新的API可以遍历出所有类型的键名，包括常量键和Symbol键名

Reflect.ownKeys(obj); //["age", "name", Symbol(a), Symbol(b), Symbol(c)]


//所以Symbol可以使用在对象中，顶一一些非私有但是只在内部的方法