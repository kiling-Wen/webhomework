var A =document.getElementById('p1');
A.onclick = function(){
    A.style.color = "red";
  }

  
var B=document.getElementsByClassName('m-item');   
var C = document.getElementsByTagName('ul')[0];
var D = C.getElementsByTagName('li');

  B[1].onclick=function() 
  {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    var h1= document.getElementsByTagName("h1")[0];
    h1.innerHTML = currentdate;
  }



  B[2].onclick=function() 
  {
    this.className+=" fn-active";
  }


  B[3].onclick=function() 
  {
    var parent=document.getElementsByTagName('ul')[0];
    var child=parent.getElementsByTagName('li')[7];
    parent.removeChild(child);
  }


  B[4].onclick=function() 
  {
    window.open("https://www.taobao.com/?spm=a21bo.2017.201857.1.152a11d9zTrPSA") ;
  }



  B[5].onclick=function() 
  {
    var ul = document.getElementsByTagName('ul')[0];
    var para=document.createElement("li");
    para.innerHTML="p9";
    ul.appendChild(para);
  }

  B[6].onclick=function() 
  {
    var div = document.getElementsByClassName('m-box')[0];
    div.style.width = (window.screen.availWidth ) + "px";
  }

  C.onclick=function(a){
    var a = a || window.event, target = a.target || a.srcElement;
    for(var s in D){
      if(target == D[s]){
      s = parseInt(s)+1;
      alert(s);
      break;
      }
    }
  }
