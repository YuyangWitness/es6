//对象的解构赋值
let { foo,bar } = { foo:"aaa",bar:"bbb" }//aaa,bbb

let { foo,bar } = { bar:"bbb",foo:"aaa" }//aaa,bbb

let { baz } = { bar:"ccc" }//undefined
//以上的例子表示了顺序在对象解构中是没有任何影响的，变量名必须和对象名相同才可以取到正确值

//如果变量名和属性名不一样可以这样写
let { foo:f,bar:b } = { foo:"aaa",bar:"bbb" }

//对象的解构机制是先找到同名属性，然后再赋值给对应的变量，真正被赋值的是后者
//由此看出，foo才是属性名，bar是被赋值的变量名
let { foo: bar } = { foo:"aaa", bar:"bbb" } // bar:aaa foo:报错


//解构赋值的变量重新生命就会报错，不过使用var声明就不会报错了，因为var允许重新生命周期
let foo;
let {foo} = {foo:"aaa"} //报错  Duplicate declaration "foo"


let foo;
({foo} = {foo:"aaa"}) //如果不使用大括号会以为是代码块

//在这里面loc和start都是模式，是不会被赋值的
var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

var { loc: { start: { line }} } = node;
line // 1
loc  // error: loc is undefined
start // error: start is undefined


//对象解构也是可以指定默认值的，默认生效的条件是，对象的赋值严格等于undefined
let { x = 3 } = {} // 3
let { x = 3 } = { x: null } // null

var {x:y = 3} = {};
y // 3

var {x:y = 3} = {x: 5};
y // 5


//根据对象的解构，也可以将现有的对象方法赋值到某个变量
let { log, sin, cos } = Math;
