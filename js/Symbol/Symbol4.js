//使用同一个Symbol值
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
//s1等于Symbol('foo')的时候,会搜索是否有以该字符串为参数的Symbol,如果没有则创建一个，如果有则返回这个Symbol值

//s2创建的时候检测到已经有了s1,所以不能重新创建了，返回s1的值给s2

//Symbol.for登记在全局中，有登记机制，而Symbol没有

//所以创建30个Symbol.for只会返回一个Symbol
//而创建30个Symbol会返回30个不一样的Symbol，所以Symbol没有登记机制

s1 === s2 //true


//Symbols.keyFor可以返回已经登记的key
let s1 = Symbol.for("foo");
let s2 = Symbol("bar");

Symbol.keyFor(s1); // foo
Symbol.keyFor(s2); // undefined

//注意：Symbol.for为全局登记，所以在iframe中也可以获取到

