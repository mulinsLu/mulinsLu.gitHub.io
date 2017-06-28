window.onload = function() {
	var s = document.getElementsByClassName('s')[0];
	var search = document.getElementById('search');
	var searchIn = document.querySelectorAll('.search ul li a');
	var souRight = document.querySelectorAll('.souRight ul li');
	var utilTip = document.querySelectorAll('.util-tip');
	var nav1Li = document.querySelectorAll('.nav .nav1>li');
	var nav2 = document.querySelectorAll('.nav2');
	var navzLeft = document.querySelectorAll('.navzLeft ul li');
	var leftDel = document.querySelectorAll('.leftDel>div');
	var leftDelZ = document.querySelectorAll('.leftDel')[0];

	var btnLeft = document.querySelectorAll('.btnLeft')[0];
	var btnRight = document.querySelectorAll('.btnRight')[0];
	var picActive = document.querySelectorAll('.picActive')[0];
	var spans = picActive.getElementsByTagName('span');
	var list = picActive.getElementsByTagName('ul')[0];
	var lis = list.getElementsByTagName('li');
	var timer = null;
	var num = 0;
	var w = lis[0].offsetWidth;

	var autoActive = document.querySelectorAll('.autoActive ul')[0];
	var autoActivelis = autoActive.querySelectorAll('.autoActive>ul>li');
	var autoActItemSpan = document.querySelectorAll('.autoActiveItem span');
	
	var LeftDelDivDlDdaA = document.querySelectorAll('.leftDel div dl dd a');
	var brandSelLeftLis = document.querySelectorAll('.brandSelLeft ul li');
	
	
	var floorConLis = document.querySelectorAll('.floorCon li');
	var contentTitle = document.querySelectorAll('.contentTitle');
	var floorConActive = document.querySelectorAll('.floorConActive');
	
	
	var promo1 = document.querySelectorAll('.promo1');
	var leftListls = document.querySelector('#rightList li:nth-of-type(1)');
	

	s.onmouseenter = function() {
		this.style.backgroundColor = '#ff4883';
		search.style.color = "#fff";
	}
	s.onmouseleave = function() {
		this.style.backgroundColor = '';
		search.style.color = "";
	}
	for(var a = 0; a < searchIn.length; a++) {
		searchIn[a].onmouseenter = function() {
			this.style.backgroundColor = '#dfdfdf';
		}
		searchIn[a].onmouseleave = function() {
			this.style.backgroundColor = '';
		}

		souRight[a].index = a;
		souRight[a].onmouseenter = function() {
			utilTip[this.index].style.display = 'block';
		}
		souRight[a].onmouseleave = function() {
			utilTip[this.index].style.display = 'none';
		}

	}
	for(var b = 0; b < nav1Li.length; b++) {
		nav1Li[b].onmouseenter = function() {

			this.style.backgroundColor = '#080809';
		}
		nav1Li[b].onmouseleave = function() {
			this.style.backgroundColor = '';
		}
	}

	//二级导航
	for(var c = 0; c < navzLeft.length; c++) {
		navzLeft[c].index = c;
		if(c == 3 || c == 5) {
			navzLeft[c].onmouseenter = function() {
				for(var c = 0; c < navzLeft.length; c++) {
					navzLeft[c].className = '';
				}
				this.className = 'write';
			}
		} else {
			navzLeft[c].onmouseenter = function() {
					leftDelZ.style.display = 'block';
				for(var c = 0; c < navzLeft.length; c++) {
					navzLeft[c].className = '';
					leftDel[c].style.display = 'none';
				}
				this.className = 'write';
				leftDel[this.index].style.display = 'block';
			}
		}

		leftDelZ.onmouseenter = function() {
			leftDelZ.style.display = 'block';
		}
		leftDelZ.onmouseleave = function() {
				leftDelZ.style.display = 'none';
			}
		navzLeft[c].onmouseleave = function() {
			leftDelZ.style.display = 'none';
			this.className = '';
		}
	}
	//图片轮播
	list.innerHTML += list.innerHTML;
	listWidth();
	timer = setInterval(function() {
			auto();
		}, 2000)
		//	picActive.onmouseenter = function(){
		//		for(var i = 0;i<spans.length;i++){
		//			spans[i].style.display = 'block';
		//			spans[i].style.transition = "1s";
		//			start();
		//		}
		//	}
		//	picActive.onmouseleave = function(){
		//		for(var i = 0;i<spans.length;i++){
		//			spans[i].style.display = '';
		//			spans[i].style.transition = "1s";
		//			timer = setInterval(function(){
		//                 auto();
		//			 },2000)
		//		}
		//	}

	//	
	function listWidth() {
		list.style.width = lis.length * lis[0].offsetWidth + 'px';
		for(var i = 0; i < lis.length; i++) {
			lis[i].style.width = lis[0].offsetWidth + 'px';
		}
	}

	function start() {
		clearInterval(timer);
	}

	function auto() {
		num++;
		list.style.left = -num * w + "px";
		list.style.transition = '.7s';
		if(num == 3) {
			num = 0;
			list.style.transition = 'none';
			list.style.left = "0px";
			setTimeout(function() {
				num = 1;
				list.style.transition = '.7s';
				list.style.left = -num * w + "px";
			}, 15)
		}
	}

	btnLeft.onclick = function() {
		auto();
	}

	//右边轮播
	var nun = -1;
	var k = -1;
	var timer1 = null;
	
	timer1 = setInterval(autoAct, 1000)
	autoAct();
	function autoAct() {
		k++;
		nun++;
		if(nun == 2) {
			nun = 1;
		}
		if(k == 2) {
			k = 0;
		}
		for(var j = 0; j < autoActItemSpan.length; j++) {
				autoActItemSpan[j].className = '';
			}
			autoActItemSpan[k].className = 'AutoActiveColor';
		
		
		if(autoActivelis[nun].style.opacity == '1') {
			autoActivelis[nun].style.opacity = '0';
			
		} else {
			autoActivelis[nun].style.opacity = '1';
		}
	}

	for(var i = 0;i<brandSelLeftLis.length;i++){
		brandSelLeftLis[i].onmouseenter = function(){
   		 this.style.border = '1px solid #FF318C';
		}
		brandSelLeftLis[i].onmouseleave = function(){
   		 this.style.border = '1px solid #DFDFDF';
		}

	}


   for(var i = 0;i<floorConLis.length;i++){
   	
   		floorConLis[i].index = i;
   		
	   	floorConLis[i].onmouseenter = function(){
	   		this.style.border = '1px solid #ff4883';
	   		contentTitle[this.index].style.color = '#ff4883';
	   		floorConActive[this.index].style.opacity = '.7';
	   	}
	   	floorConLis[i].onmouseleave = function(){
	   		this.style.border = '1px solid #fff';
	   		contentTitle[this.index].style.color = '';
	   		floorConActive[this.index].style.opacity = '0';
	   	}
   	
   }


for(var i = 0;i<promo1.length;i++){
		if(promo1[i].innerText){
			promo1[i].style.backgroundColor = '#ff4883';
		}
	}


var istop = true;
for(var i = 0;i<leftList.length;i++){
	istop = false;
}

console.log(leftListls)
var timer2 = null;
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
leftListls.onclick = function(){
	clearInterval(timer2);
	timer2 = setInterval(function(){
		var Top = Math.ceil(scrollTop/20);
		if(document.body.scrollTop){
						if(document.body.scrollTop==0){
							clearInterval(timer2)
						}else{
							document.body.scrollTop -= Top;
						}
					}else{
						if(document.documentElement.scrollTop==0){
							clearInterval(timer2);
						}else{
							document.documentElement.scrollTop -= Top;
						}
					}
	},30)
}























	//
}