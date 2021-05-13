
window.onload = function(){
    for(i=0;i<document.getElementsByClassName("m-photo").length;++i){
            document.getElementsByClassName("m-photo")[i].onclick=function(){
                flag=1;
                document.getElementsByClassName("m-end1")[0].style.display='block';
                document.getElementsByClassName("m-end1")[0].style.backgroundcolor= document.getElementsByClassName("m-photo")[i].innerHTML.backgroundcolor;
                document.getElementsByClassName("m-end1")[0].style.filter="blur("+5+"px)";
                document.getElementsByClassName("m-end1")[0].style.opacity=1;
                if (flag)
                {
                    document.getElementsByClassName("m-end1")[0].onclick=function(e){
                    document.getElementsByClassName("m-end1")[0].style.display='none';
                    document.getElementsByClassName("m-end1")[0].style.filter="blur("+0+"px)";
                    document.getElementsByClassName("m-end1")[0].style.opacity=0;
                    flag=0;
                }

            }
	}
}