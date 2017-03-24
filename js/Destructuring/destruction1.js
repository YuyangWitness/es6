//es6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这种被称为解构
let [a,b,c] = [1,2,3]; //对变量a,b,c分别赋值

let [,,third] = ["a","b","c"];

let [x,y,...z,n] = [1,2,3,4,5,6];//...z会变成一个数组。...操作符也是es6的新扩展操作符。

let [bar,foo] = [1];//1 undefined,解构不成功为undefined

//如果等号右边不是数组，那么就会报错
let [foo] = 1;
let [foo] = false;
let [foo] = null;
let [foo] = undefined;
let [foo] = {};

//事实上，只要是某种数据结构具有Interator接口，就可以采用数组形式的解构
let [x,y,z] = new Set(['a','b','c']);

