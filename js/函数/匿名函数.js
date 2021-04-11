

/**
 * 
 * 一 也是函数自执行
 */
// (function(a,b){
//     console.log(a)
// }("11"))


/**
 * 二 函数的参数时一个函数
 * 
 * 函数的形参时一个函数，然后掉这个函数的时候在把参数传给这个形参。
 */

 (function(fn){fn("1321")}(function(b){
     console.log(b)// 1321
 }))


