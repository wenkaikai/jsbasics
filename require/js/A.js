define(function(){
	document.write("这是一个A.js");
	// 难道require 引入的js 必须要定义一个模块吗。
	// 如果没有定义模块直接写的document.write
	//就会报一个Failed to execute 'write' on 'Document': 
	//It isn't possible to write into a document from an 
	//asynchronously-loaded external script unless it is explicitly opened.

})
