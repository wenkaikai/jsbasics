/**
	方法一 随机一个范围的数
	@prams start end 开始的一个数结束的一个数
	100-500
*/
   function rnd(start, end){
        var random = Math.floor(Math.random()*(m-n+1)+n);
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
  number = number?number:2;
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