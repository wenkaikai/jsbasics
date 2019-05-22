/**
  方法一 随机一个范围的数
  @prams start end 开始的一个数结束的一个数
  100-500
*/
function rnd(start, end) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
}


// 
/** 
  方法二 保留N位数字
 * str 字符串或者数字
 * number 保留的位数
 * 
 */

function saveNumber(str, number) {
    number = number ? number : 2;
    str = str + ''
    let index = str.search(/[^\d.]/g);
    let str1, str2, str3, str4, num;
    let number = 4;
    if (index > 0) {
        str1 = str.substring(0, index);
        num = parseFloat(str1)
        if (Number.isInteger(num)) {
            str2 = num;
        } else {
            str2 = num.toFixed(number);
        }
        str3 = str.substring(index);
        str4 = str2 + str3;
    } else {
        str1 = str.substring(0);
        num = parseFloat(str1)
        if (Number.isInteger(num)) {
            str2 = num;
        } else {
            str2 = num.toFixed(number);
        }
        str4 = str2
    }

    return str4

}


/**
  方法三  对象的深拷贝
*/
const cloneDeep = function(obj) {
    // Handle the 3 simple types, and null or undefined or function
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array or Object
    if (obj instanceof Array | obj instanceof Object) {
        var copy = (obj instanceof Array) ? [] : {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr))
                copy[attr] = cloneDeep(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to clone obj! Its type isn't supported.");
};

/**
    方法三 判断是不是pc
*/

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    console.log(userAgentInfo)
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}