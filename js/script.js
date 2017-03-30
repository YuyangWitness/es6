function* test(){
	yield "abc";
	yield "def";
}

let t = test();

let res1 = t.next();
console.log(res1);