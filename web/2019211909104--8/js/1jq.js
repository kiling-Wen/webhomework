$(document).ready(function(){
	$(".m-end1").hide();
	var a=false;
	$(".m-photo").click(function(b){
		if(a==true) return;
		b.stopPropagation();
		a=true;
		$(".m-photo").css({"filter": "blur("+ 5 +"px)" });
		$(".m-end1").css({"background-color":$(this).css("background-color"),"z-index":"2"});
		$(".m-end1").fadeIn(500);
	});
	$(window).click(function(){
		if(a)
		{
			$(".m-photo").css({"filter": "blur("+ 0 +"px)" });
			$(".m-end1").fadeOut(500,function(){
				$(".m-end1").css({"z-index":"-1"});
			});
		}
		a=false;
	}
	)
	//第二
	$(".m-next").click(function(){
		$(".m-next").css({"background-color":"white"});
		$(this).css({"background-color":"grey"});
		$(".m-end>span").html(($(this).index()+1));
	})
	//第三
	var num = 1; //总数
    $('body').on('.m-next2', (e) => {
      doAdd(e);
    })
    $('body').on('.m-data-2', (e) => {
      doDel(e);
    })
    function doAdd(e) {
      let t = e.currentTarget;
      let item = `<div class="m-data"><div class="m-data-1"><span>${++num}</span></div><div class="m-data-2"><span>Delete</span></div></div>`
      $(t).prev().append(item);
    }
    function doDel(e) {
      let t = e.currentTarget;
      $(t).parent().remove();
      num --;
      upload();
    }
    //修正序号
    function upload() {
      let contentList = $('.m-data').children();
      let i = num;
      contentList.map((index,item)=>{
        $(item).find('.m-data-1').text(num - (--i));
      })
    }
	
	$(".m-next2").click(function(){
		var add="<div class=\"m-data\"><div class=\"m-data-1\"><span>1</span></div><div class=\"m-data-2\"><span>Delete</span></div></div>";
		$(".m-next2").before(add);
		var num=($(".m-box3").children().length-1)==1?1:parseInt(
			$(".m-data:nth-last-child(3)>.m-data-1>span").html())+1;
		$(".m-data:nth-last-child(2)>.m-data-1>span").html(num);
	});
	$(document).on("click",".m-data-2",function(){
		 $(this).each(function (){
			$(this).parent().remove();})
	})
})