Array.prototype.remove = function(element){
	for(var i = 0; i < this.length; i++){
		if(this[i] == element){
			this.splice(i,1);
		}
	}
}

function MyPlan(x,y,container){
	this.x = x;
	this.y = y;
	this.img = "my.gif";
	this.container = container;
	this.bullets = [];
	this.init();
}

MyPlan.prototype = {
	init:function(){
		this.create();
		this.planMove();
		var that = this;
		setInterval(function(){
			that.createBullets();
		},300);
	},
	planMove:function(){
		var that = this;
		this.container.onmousemove = function(e){
			e = e || event;
			var maxWidth = that.container.offsetWidth - that.plan.offsetWidth;
			var maxHeight = that.container.offsetHeight - that.plan.offsetHeight;

			var planX = Math.max(Math.min(e.clientX - that.container.offsetLeft - that.plan.offsetWidth / 2,maxWidth),0);
			var planY = Math.max(Math.min(e.clientY - that.container.offsetTop - that.plan.offsetHeight / 2,maxHeight),0);
			that.plan.style.left = planX + "px";
			that.plan.style.top =  planY + "px";

		}
	},
	create:function(){
		this.plan = document.createElement("img");
		this.plan.src = "images/" + this.img;
		this.plan.style.cssText = "position:absolute; left:"+ this.x +"px; top:"+ this.y +"px;";
		this.container.appendChild(this.plan);
	},
	createBullets:function(){
		this.bull = document.createElement("img");
		this.bull.src = "images/bullet1.png";
		var bullX = this.plan.offsetLeft + this.plan.offsetWidth / 2 - 3;
		var bullY = this.plan.offsetTop - 14;

		this.bull.style.cssText = "position:absolute; left:"+ bullX +"px; top:"+ bullY +"px;";
		this.container.appendChild(this.bull);
		this.bullets.push(this.bull);
		var bull = this.bull;
		var container = this.container;
		var bullets = this.bullets;
		this.bull.timer = setInterval(function(){
			bull.style.top = bull.offsetTop - 3 + "px";
			if(bull.offsetTop <= -14){
				container.removeChild(bull);
				bullets.remove(bull);
				clearInterval(bull.timer);
			}
		},7);
	}
};