//固定导航

$(window).scroll(function(){
	var oHeight =$(".top-right").height();
	var oScrollTop =$(window).scrollTop();
	if(oScrollTop>=oHeight){
		$(".header").fadeIn()
	}else{
		$(".header").fadeOut()
	}
})


$(".close").click(function(){
	$(".top").css("display","none")
})
$(".id").css("display","none")
$(".left").find("li").eq(0).hover(function(){
	$(".left").find("li").eq(0).css({
		"background":"white",
		"color":"#333",
		"borderBottom":"1px solid white"
		
	})
	$(".id").css("display","block")
},function(){
	$(".left").find("li").eq(0).css({
		"border":"0px",
		"color":"#666",
		"background":"#eee"
		})
	$(".id").css("display","none")
})
$(".id").hover(function(){
	$(".left").find("li").eq(0).css({
		"background":"white",
		"color":"#333",
		"borderBottom":"1px solid white"
		
	})
	$(".id").css("display","block")
},function(){
	$(".left").find("li").eq(0).css({
		"color":"#666",
		"background":"#eee",
		"borderBottom":"1px solid #ccc"
		})
	$(".id").css("display","none")
})


$(".idt").css("display","none")
$(".right").find("li:last").hover(function(){
	$(".right").find("li:last").css({
		"background":"white",
		"color":"#333",
		"borderBottom":"1px solid white"
	})
	$(".idt").css("display","block")
},function(){
	$(".right").find("li:last").css({
		"border":"0px",
		"color":"#666",
		"background":"#eee"
		})
	$(".idt").css("display","none")
})
$(".idt").hover(function(){
	$(".right").find("li:last").css({
		"background":"white",
		"color":"#333",
		"borderBottom":"1px solid white"
		
	})
	$(".idt").css("display","block")
},function(){
	$(".right").find("li:last").css({
		"border":"0px",
		"color":"#666",
		"background":"#eee"
		})
	$(".idt").css("display","none")
})







$(".shoppings").css("display","none")
$(".shopping").hover(function(){
	$(".shopping").css({
		"background":"white",
		"color":"#f00",
		"borderBottom":"1px solid white"
	})
	$(".shoppings").css("display","block")
},function(){
	$(".shopping").css({
		"border":"1px solid #ccc",
	})
	$(".shoppings").css("display","none")
})

$(".shoppings").hover(function(){
	$(".shopping").css({
		"background":"white",
		"color":"#f00",
		"borderBottom":"1px solid white"
		
	})
	$(".shoppings").css("display","block")
},function(){
	$(".shopping").css({
		"background":"white",
		"color":"#f00",
		"borderBottom":"1px solid #ccc"
		})
	$(".shoppings").css("display","none")
})

//第一个轮播图
var num=0;
var timer=null;
$(".next").click(function(){
	num++
	if(num>$(".banner").find("li").length-1){
		num=0
	}
	$(".banner li").eq(num).addClass("active").siblings().removeClass("active")
	$(".dots li").eq(num).addClass('none').siblings().removeClass('none');
})

$(".dots li").click(function(){
	num=$(this).index();	
	$(".banner li").eq(num).addClass('active').siblings().removeClass('active');
	$(".dots li").eq(num).addClass('none').siblings().removeClass('none')
})

timer=setInterval(function(){
	$(".next").click()
},3000)
$(".banner-right").mousemove(function(){
	clearInterval(timer)
})
$(".banner-right").mouseout(function(){
	timer=setInterval(function(){
		$(".next").click()
	},3000)
})

//banner右边标题
var sum=0
$("#list").find("li").hover(function(){
	sum++
	if(sum>$("#list").find("li").length-1){
		sum=0
	}
	$("#list").find("li").eq(sum).addClass("color").siblings().removeClass("color")
},function(){
	$("#list").find("li").eq(sum).addClass("color").siblings().removeClass("color")
})

