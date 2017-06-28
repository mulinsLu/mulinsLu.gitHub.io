let aData = {
	date : function(arr,n){
					var s = '';
		
					var n = n || 0;
					var aStr = ['年月日时分秒','-- ::','// ::'];
		
					if(n>aStr.length-1)n=aStr.length-1;
		
					for(var i=0; i<arr.length; i++){
						s += arr[i] + aStr[n].charAt(i);
						if(i==2&&n==0)s += ' ';
					}
		
					if(s.charAt(s.length-1) == '-'||s.charAt(s.length-1) == '/'){
						s = s.substring(0,s.length-1);
					}
		
					return s;
             	},
             	
          //goodsA : 
            goodsA : {
     				 name : 'tody',
     				 imgs : [
     				 			"img/TB1ExtBOVXXXXchapXXYXGcGpXX_M2.SS2_240x240.jpg",
     				 			"img/TB2EusLnhxmpuFjSZFNXXXrRXXa_!!1751135515.jpg_240x240.jpg",
     				 			"img/700x700.7c5d22cc943e6afaece97d707a4aa252.342x374.jpg",
     				 			"img/700x700.b3a63770cad1b7105975a008a871b440.342x374.jpg",
     				 			"img/TB1Z9JIPVXXXXbaapXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg",
     				 			
     				 			"img/TB2_PETsYXlpuFjSszfXXcSGXXa_!!3021337036.jpg_240x240.jpg",
     				 			"img/TB1cGspQXXXXXb_XFXXYXGcGpXX_M2.SS2_240x240.jpg",
     				 			"img/TB2vb.2pNBmpuFjSZFDXXXD8pXa_!!3008278324.jpg_240x240.jpg",
     				 			"img/TB2JQDRlNBmpuFjSZFDXXXD8pXa_!!2787286092.jpg_240x240.jpg",
     				 			"img/TB2AT0ymmXlpuFjy0FeXXcJbFXa_!!2347579333.jpg_240x240.jpg"
     				 	]
     				 },
//     				 title :
     				  title : {
     				 name : 'h3',
     				 titles : [
     				          "新款休闲胸包男韩版腰包皮质小包包男士斜挎包单肩包运动背包潮包",
     				          "宽松破洞牛仔短裤女夏季2017新款胖mm大码百搭阔腿裤显瘦跨",
     				          "夏季薄款卫裤男运动裤",
     				          "花花公子贵宾t恤男短袖",
     				          "春秋装新款中长款衬衫女韩范宽松纯棉百搭上衣大码显瘦长袖白衬衣",
     				          
     				          
     				          "《格林童话》故事绘本30本",
     				          "Bejirog/北极绒  夏季儿童短袖套装",
     				          "逸璇 薄款棉麻宽松长裤",
     				          "遇见香芬 嫩白氨基酸护颈霜60ml",
     				          "雅佰哈  竹炭软毛牙刷10支套装"
     				 	]
     				 },
     				 // priceNew : 
     				priceNew : {
     				 name : 'priceNew',
     				 priceNew : [
     				          "38.0",
     				          "29.9	",
     				          "18.9",
     				          "39.0",
     				          "59.0",
     				          
     				          
     				          "14.8",
     				          "17.9",
     				          "38.0",
     				          "26.0",
     				          "16.8"
     				 	]
     				 },
     				 // del:
     				del: {
     				 name : 'del',
     				 del : [
     				          "76.0",
     				          "99.0	",
     				          "129.0",
     				          "268.0",
     				          "159.0",
     				          
     				          
     				          "120.0",
     				          "79.8",
     				          "68.0",
     				          "188.0",
     				          "39.9"
     				 	]
     				 },
     				 //priceTotal: 
     				priceTotal: {
     				 name : 'priceTotal',
     				 priceTotal : [
     				          "1.1万",
     				          "694",
     				          "1298",
     				          "119",
     				          "971",
     				          
     				          
     				          "1.1万",
     				          "9579",
     				          "2140",
     				          "1805",
     				          "1146"
     				 	]
     				 },
     				 //newIcon: 
     				newIcon:  {
     				 name : 'newIcon',
     				 newIcon : [
     				          "",
     				          "",
     				          "",
     				          "",
     				          "",
     				          
     				          
     				          
     				          "15",
     				          "2",
     				          "20",
     				          "30",
     				          "10"
     				 	]
     				 },
};
//console.log(Boolean(!aData.newIcon.newIcon[0]))

