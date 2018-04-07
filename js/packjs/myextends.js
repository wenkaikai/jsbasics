/**
 * Created by ZMJ.Wr on 2017/9/24.
 */
function Myjs(){//定义一个空参的构造函数
};
/*
 Array.from()可以将各种值转为真正的数组，并且还提供map功能。这实际上意味着，只要有一个原始的数据结构，
 你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。
 */
Myjs.prototype.typeof = function(){//另一个例子是返回各种数据的类型。
    return Array.from(arguments,item=>typeof item);
}