//symbol还可以作为属性名，防止某个键不小心被覆盖

let mySymbol = Symbol();
//第一种写法
var a = {};
a[mySymbol] = "hello"
//第二种写法
let a = {
	[mySymbol]: "hello"
}
//第三种写法
Object.defineProperty(a, mySymbol, { value: "hello" });



//Symbol值作为对象属性名的时候必须在大括号里面
//如果在点号后面的话它就是一个字符串
let a = {}

a.mySymbol = 'hello';

a[mySymbol]; //undefined
a['mySymbol'] //hello

//Symbol还可以作为常量名，这样的好处是可以保证常量与其他任何值都不可能有相同值
