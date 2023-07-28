
// window.onload=function(){
// 	//alert("hello");
// 	var menu=document.getElementById("menu-bars");
// 	var header=document.getElementById("header");
// 	//var menuIcon=document.getElementById("menuIcon");
// menu.onclick=()=>{
// 	menu.classList.toggle('fa-times');
// 	header.classList.toggle('active');
// 	//alert("ok");
// }



// window.onscroll=()=>{
// 	menu.classList.remove('fa-times');
// 	header.classList.remove('active');
// 	//alert("ok");
// }
// let cursor1=document.getElementById('cursor-1');
// let cursor2=document.getElementById('cursor-2');

// window.onmousemove =(e)=>{
// cursor1.style.top=e.pageY+'px';
// cursor1.style.left=e.pageX+'px';
// cursor2.style.top=e.pageY+'px';
// cursor2.style.left=e.pageX+'px';

// }



// }
document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu-bars');
    var header = document.getElementById('header');
  
    menu.onclick = function () {
      menu.classList.toggle('fa-times');
      header.classList.toggle('active');
    };
  
    alert("new line added here for found ghost ");
    window.onscroll = function () {
      menu.classList.remove('fa-times');
      header.classList.remove('active');
    };
  
    var cursor1 = document.getElementById('cursor-1');
    var cursor2 = document.getElementById('cursor-2');
  
    window.onmousemove = function (e) {
      cursor1.style.top = e.pageY + 'px';
      cursor1.style.left = e.pageX + 'px';
      cursor2.style.top = e.pageY + 'px';
      cursor2.style.left = e.pageX + 'px';
    };
  });
  