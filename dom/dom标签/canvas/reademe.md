 ##
 var canvas = document.getElementById("canvas");
 let ctx = canvas.getContext("2d");
 
 一   首先，canvas 方法总结：
    1，fillRect(x, y, width, height)  绘制一个填充的矩形
    2，strokeRect(x, y, width, height)  绘制一个矩形的边框
    3，clearRect(x, y, width, height)  清除指定矩形区域，让清除部分完全透明
    4，beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
    5，closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。
    6，stroke() 通过线条来绘制图形轮廓。
    7，fill() 通过填充路径的内容区域生成实心的图形。
    8，moveTo(x, y)  将笔触移动到指定的坐标x以及y上。
    9，lineTo(x, y) 绘制一条从当前位置到指定x以及y位置的直线。
    10，arc() 画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
    11，fillStyle = color 设置图形的填充颜色。
    12，strokeStyle = color  设置图形轮廓的颜色。
    13，fillText(text, x, y [, maxWidth]) 在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的。
    14，strokeText(text, x, y [, maxWidth])  在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.
    15, restore  这是一段简单的代码片段，使用 save() 方法保存默认的状态，使用 restore() 进行恢复。 所以，稍后你可以使用默认的状态绘制一个矩形。
    ```
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      ctx.save(); // save the default state

      ctx.fillStyle = "green";
      ctx.fillRect(10, 10, 100, 100);

      ctx.restore(); // restore to the default state
      ctx.fillRect(150, 75, 100, 100);
    ```