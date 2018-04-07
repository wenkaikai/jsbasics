$(".box2").load("1.html .box1")
$(".box1").delegate("li","click",function(){
	console.log("ok");
})