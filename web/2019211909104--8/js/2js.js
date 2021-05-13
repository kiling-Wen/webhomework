
//第二个
 window.onload=function () {
    for (var i=0;i<document.querySelectorAll(".m-hd div").length;i++){
        document.querySelectorAll(".m-hd div")[i].index=i;
        document.querySelectorAll(".m-hd div")[i].onmousedown=function (){
            for (var j=0;j<document.querySelectorAll(".m-hd div").length;j++){
                if (this.index!=j)
                    document.querySelectorAll(".m-hd div")[j].style.backgroundColor="white"
                else
                    this.style.backgroundColor="red"

            }
            document.querySelector(".m-end").innerHTML=this.index+1,
            document.querySelectorclass(".m-end").style.fontsize=10+"em"
        }
    } 
 //第三个   
    // var num = 1; //总数
    // $('body').on('.m-next2', (e) => {
    //   doAdd(e);
    // })
    // $('body').on('.m-data-2', (e) => {
    //   doDel(e);
    // })
    // function doAdd(e) {
    //   let t = e.currentTarget;
    //   let item = `<div class="m-data"><div class="m-data-1"><span>${++num}</span></div><div class="m-data-2"><span>Delete</span></div></div>`
    //   $(t).prev().append(item);
    // }
    // function doDel(e) {
    //   let t = e.currentTarget;
    //   $(t).parent().remove();
    //   num --;
    //   upload();
    // }
    // //修正序号
    // function upload() {
    //   let contentList = $('.m-data').children();
    //   let i = num;
    //   contentList.map((index,item)=>{
    //     $(item).find('.m-data-1').text(num - (--i));
    //   })
    // }

    document.getElementsByClassName("m-next2")[0].onclick=function(){
        var c=this.parentElement;
        var num=c.childElementCount>1?parseInt(c.children[c.childElementCount-2].children[0].innerText)+1:1;
        var addHtml="<div class=\"m-data\"><div class=\"m-data-1\"><span>1</span></div><div class=\"m-data-2\"><span>Delete</span></div></div>";
        this.insertAdjacentHTML("beforeBegin",addHtml);
        c.children[c.childElementCount-2].children[0].innerText=num;
        c.children[c.childElementCount-2].children[1].addEventListener("click",function(){
            this.parentElement.remove();
        });  
    }
    for(let i=0;i<document.getElementsByClassName("m-box3")[0].childElementCount-1;++i){
        document.getElementsByClassName("m-box3")[0].children[i].children[1].addEventListener("click",function(){
            this.parentElement.remove();
        });
    }
}