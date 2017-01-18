/*大广告*/
$(function(){
	$(".zhankai").mouseenter(function(){
		$(".zhankai").html("展开");
		$(".fixpic a img").attr({src:"img/big02.jpg"}).animate({"height":"80px"},200,function(){
			$(".fixpic a img").stop();
		});
	});
});
$(function(){
	$(".zhankai").click(function(){
		$(".zhankai").html("收起");
		$(".fixpic a img").attr({src:"img/big01.jpg"}).animate({"height":"270px"},200,function(){
			$(".fixpic a img").stop();
		});
	});
});
/*6F*/
$(function(){
	$(".secondsix_true div img").each(function(){
		$(this).mouseenter(function(){
			
			$(this).animate({"left":"-156px"},"10",function(){
				$(this).stop();
			});
		});
		$(this).mouseleave(function(){
			$(this).finish();
			$(this).animate({"left":"0px"},"10");
			
		});
	});
});	
/*APP*/
$(function(){
	$(".focus_us").mouseenter(function(){
		$(".fix_APP").show();
		$(".focus_us").mouseleave(function(){
			$(".fix_APP").hide();
		});
		$(".fix_APP").mouseenter(function(){
			$(".fix_APP").show();
		});
		$(".fix_APP").mouseleave(function(){
			$(".fix_APP").hide();
		});
	});
});
/*下栏*/
$(function(){
	$(".zhongxin").mouseenter(function(){
		$(".zhongxin").css({"height":"29px","width":"65px","background-color":"#ffffff","border":"1px solid #f7f7f7"});
		$(".zhongxin .span").css({"position":"relative","top":"-30px","left":"49px"});
		$(".yonghu_b").show();
		$(".zhongxin").mouseleave(function(){
			$(".yonghu_b").hide();
			//$(".zhongxin").css({"background-color":"#ffffff"});
			$(".zhongxin").css({"background-color":"#f7f7f7"});
		});
		$(".yonghu_b").mouseenter(function(){
			$(".yonghu_b").show();
			$(".zhongxin").css({"background-color":"#ffffff"});
			$(".yonghu_b").mouseleave(function(){
				$(".yonghu_b").hide();
				
				$(".zhongxin .span").css({"position":"relative","top":"-30px","left":"49px"});
				$(".zhongxin").css({"background-color":"#f7f7f7"});
			});
		});	
	});
	$(".yonghu_b a").each(function(){
		console.log($(".yonghu_b a"));
		$(this).mouseenter(function(){
			$(this).css({"color":"red"});
		});
		$(this).mouseleave(function(){
			$(this).css({"color":"#656565"});
		});
	    
	});
	
});

$(function(){
	$(".cebianlana1").mouseenter(function(){
		$(".cebianlana1").css({"background-color":"#c40000"});
		$(".cebianlana1 .ce01").css({"color":"#ffffff"});
		$(".cekuang01").animate({"left":"-100px","opacity":"1"},"slow");
		$(".cebianlana1").mouseleave(function(){
			$(".cebianlana1").css({"background-color":"#eaeaea"});
		    $(".cebianlana1 .ce01").css({"color":"#000000"});
		});
	});
});
	
	
	



















































































