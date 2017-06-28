window.onload = function(){
	
	//轮播图
	var list = id("list");
	var nav = document.getElementsByTagName("nav")[0];
	var lis = nav.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var olis = nav.getElementsByTagName("ol")[0].getElementsByTagName("li");
	
    var w = view().w;
	list.innerHTML += list.innerHTML;
	listWidth();
    var timer = 0;
    var num = 0;
    var now = 0;
   var startx = 0;
   var x = 0;
   var a = document.getElementsByClassName('a');
	 auto();
       function listWidth(){
				list.style.width = lis.length*w/40 + 'rem';
				for(var i=0;i<lis.length;i++){
					lis[i].style.width = w/40+'rem';
				}
			}
   
    function auto(){
    	timer = setInterval(function(){
				num++;
			    tabAuto();
				tab();
				
    	},2000)
    }
	 
	 
	 function tab(){
	 		list.style.transform = 'translateX(-'+(w*num/40)+'rem)';
				if(num == 5){
					list.style.transition = 'none';
					list.style.transform = 'translateX(0rem)';
					num = 0;
					setTimeout(function(){
						num = 1;
						list.style.transition = '1s';
						list.style.transform = 'translateX(-'+(num*w/40)+'rem)';
					},20)	
				}	
				
	 }
	
	   		function tabAuto(){
					list.style.transition = '1s';
				    for(var i=0;i<olis.length;i++){
						removeClass(olis[i],"active");
					}
					addClass(olis[num%olis.length],'active');
			}
		 bind(list,'touchstart',start);
		bind(list,'touchmove',move);
		bind(list,'touchend',end);
		function start(ev){
			clearInterval(timer);
			ev = ev.changedTouches[0];
			list.style.transition = 'none'
			startx = ev.pageX;
			x = now;
		}
	
	function move(ev){
		ev = ev.changedTouches[0];
		var disx = ev.pageX - startx;
		now = x + disx;
		list.style.transform = list.style.webkitTransform ="translateX("+(now/40)+"rem)"; 

	}
	
	function end(){
		num = -Math.round(now/w);
		now = -num*w;
		list.style.transition = '.5s';
		list.style.transform = list.style.webkitTransform ="translateX("+(now/40)+"rem)"; 
		if(num>=lis.length){
			num = lis.length-1;
		}
		if(num<=0){
			num=0;
		}
		tabAuto();
		tab();
		auto();
	}
	
	
var  listMain = id("listMain");
var str = "";	
for(var i = 0;i<aData.goodsA.imgs.length;i++){
	str = '<li>'+
	                   ' <a href="#" class="a">'+
							
						'</a>'+
						'<a class="goods-a" href="#">'+
							'<img src="'+aData.goodsA.imgs[i]+'"class="gPic" >'+
							'<span class="newIcon">新品</span>'+
						'</a>'+
							'<a >'+
								'<h3>'+aData.title.titles[i]+'</h3>'+
							'</a>'+
						'<div class="listpPrice">'+
							'<a>'+
								'<span class="prinNew"><i>&yen;</i>'+aData.priceNew.priceNew[i]+'</span><i class="del">&yen;'+aData.del.del[i]+'</i>'+
							'</a>'+
							'<a class="priceTotal">售'+aData.priceTotal.priceTotal[i]+'</a>'+
						'</div>'+
				'</li>';
				
	listMain.innerHTML += str;
				
}
	for(var i = 5;i<10;i++){
		if(aData.newIcon.newIcon[i]){
			a[i].innerHTML += '<span class="newIconA">'+
								'<em >'+aData.newIcon.newIcon[i]+'元券<br>点击领取</em>'+
							'</span>'
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//尾部
}
