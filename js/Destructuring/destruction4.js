//字符串解构
let [a,b,c,d] = "hello"
a //h
b //e
c //l
d //l

//字符串也有一个length属性
let {length: len} = "hello" //len: 5

//数值和布尔值的解构
//如果解构赋值时，如果等号右边是数值或者布尔值，先回转换为对象
//undefined和null无法转换为对象，所以会报错
let { toString: s} = 123
s === Number.prototype.toString //true

let { prop: x } = null //TypeError

//函数参数的解构
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3

//函数参数解构的默认值
function move({x = 0, y = 0} = {}){
	return [x,y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

//会得到不一样的结果，因为这个函数里面是为参数赋值，而上面函数是为x和y赋值
function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]
