//Symbol.hasInstance(简称SH)
//对象的SH属性指向内部的方法，当对象之用instanceof的时候就该用SH
class MyClass{
	[Symbol.hasInstance](foo){
		return foo instanceof Array
	}
}

[1,2,3,4] instanceof new MyClass // true

//如果给这个属性前面加static变成静态
class MyClass{
	static [Symbol.hasInstance](foo){
		return foo % 2 == 0
	}
}

//static不需要new
1 instanceof MyClass //false
1 instanceof MyClass //true

//Symbol.isContactSpreadable表示是否可以把字符串展开

//设置一个数组为false则和其他数组contact的时候不能展开
let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', ['c','d'], 'e']


//设置一个数组为true或者undefined的时候表示可以展开
let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = true;
['a', 'b'].concat(arr2, 'e') // ['a', 'b', 'c', 'd', 'e']


//Symbol.species表示当然的构造函数，它会代替构造函数在创建实例的时候运行
class MyArray extends Array{
	static get [Symbol.species](){
		return Array
	}
}

//Symbol.toPrimitive 该对象被转为原始类型的值时，会调用这个方法，返回原始值
//有三种运算模式  Number, String, Default(可以是数值也可以是字符串)

//对象的Symbol.iterator属性，指向该对象的默认遍历器方法。

//对象的Symbol.split属性，当对象被String.prototype.split调用的时候，会返回这个属性的值


//对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值。

//对象的Symbol.replace属性，指向一个方法，当对象的String.prototype.repalce方法被调用的时候，会返回该方法的值。

//对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值。
















