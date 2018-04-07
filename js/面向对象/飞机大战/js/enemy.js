function Enemy(container,bullets){
	this.createTime = 1500; //控制创建飞机频率
	this.container = container;
	this.img = "enemy1_fly_1.png";
	this.bullets = bullets;
	this.init();
}
Enemy.prototype = {
	init:function(){
		var that = this;
		setInterval(function(){
			that.create();
		},this.createTime);
	},
	create:function(){
		this.enemy = document.createElement("img");
		this.enemy.src = "images/" + this.img;
		//console.log(this.container.offsetWidth);
		var enemyX = Math.random() * (this.container.offsetWidth - 34);
		this.enemy.style.cssText = "position:absolute; left:"+ enemyX +"px; top:-24px;";
		this.container.appendChild(this.enemy);
		var enemy = this.enemy;
		var container = this.container;
		var bullets = this.bullets;
		var isImpact = true;
		this.enemy.timer = setInterval(function(){
			enemy.style.top = enemy.offsetTop + 2 + "px";
			for(var i = 0; i < bullets.length; i++){
				if(bullets[i].offsetLeft + bullets[i].offsetWidth > enemy.offsetLeft && 
					bullets[i].offsetLeft < enemy.offsetLeft + enemy.offsetWidth){
					if(bullets[i].offsetTop + bullets[i].offsetHeight > enemy.offsetTop && 
						bullets[i].offsetTop < enemy.offsetTop + enemy.offsetHeight && isImpact){
						isImpact = false;
						enemy.src = "images/enemy1_fly_3.gif";
						container.removeChild(bullets[i]);
						bullets.remove(bullets[i]);
						setTimeout(function(){
							container.removeChild(enemy);
						},300);
					}
				}
			}
			if(enemy.offsetTop >= container.offsetHeight){
				container.removeChild(enemy);
				clearInterval(enemy.timer);
			}
		},20);
	}
};

