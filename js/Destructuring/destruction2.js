//解构是允许默认值的
let [foo = true] = [];//假如有变的数组没有可以匹配的数，默认为true


//注意在es6内部是严格使用 === 判断一个位置是否有值的，如果一个数严格等于undefined，那么默认值就会生效
let [x,y = "b"] = ["a",undefined];


