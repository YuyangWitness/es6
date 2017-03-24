let s = Symbol(); 
//Symbol是一个原始类型的值，不是对象，不能在前面加new
//它是一种类似于字符串的数据类型

//alert(typeof s);

let s1 = Symbol("foo");
let s2 = Symbol("bar");

console.log(s1);
console.log(s2);

//可以往Symbol里面加入对象，但是对象会被返回toString，如果没有这个则会返回object
let obj = {
	a: 12,
	b: 11,
	toString(){
		return "Abc"
	}
}

let s3 = Symbol(obj);

//相同参数的Symbol并不是相等
let s4 = Symbol(obj);

console.log(s3 === s4); //false
console.log(s3 == s4) //false

let sym = Symbol("hello");

sym + "es6" //报错，不能和其他类型的值进行计算

//可以转换为字符串
sym.toString(); //Symbol("hello")
String(sym); //Symbol("hello")

