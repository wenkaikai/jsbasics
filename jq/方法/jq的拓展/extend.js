/**
 * Created by ZMJ.Wr on 2017/10/12.
 */

/*
 $.fn是指jquery的命名空间，加上fn上的方法及属性，会对jquery实例每一个有效。
 如扩展$.fn.abc(),即$.fn.abc()是对jquery扩展了一个abc方法,那么后面你的每一个jquery实例都可以引用这个方法了.
 */

$.fn.abc=function(){//为每一个jquery 对象添加方法
    console.log("ok")
}
/*
 jQuery.extend(object);　为jQuery类添加添加类方法，可以理解为添加静态方法。如：
 */

jQuery.extend({
    adddd:function(a,b){
        console.log("ok");
    }
});



// (function($){
//     $.extend({
//         adddd:function(a,b){
//             console.log("ok");
//         }
//     });
//
//
// })(window.jQuery)
// // jQuery.extend({
// //     getHtml:function(url,params,callback){
// //         $.ajax({
// //             url:url,type:"POST",dataType:"html",data:params,
// //             success : function(html) {
// //                 if(typeof callback == "function") callback(html);
// //             },
// //             error : function(data) {failMsg("请求失败：" + url);}
// //         });
// //     }
// // })
// function fn1(self){
//     console.log($("p"));
//
//     console.log(self)
//     fn(1,2);  
// }

