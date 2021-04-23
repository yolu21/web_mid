window.onload=function(){
    //document.write("Hello js");
    alert("Hi~不知道今天吃甚麼?讓電腦為你決定吧!!!");
}
$(function(){
    $("input").on("click",function(){
       
       //$("h1").text("hi");
       //$("h1").text($("li:first").text());
       //$("h1").text($("li:last").text());
       var size=$("li").length;
       var numrandom=Math.floor(Math.random()*size);
       $("h1").text($("li").eq(numrandom).text());
       $('img').attr('src',+numrandom+'.jpg');
       
       //document.write('<img src="' +numrandom+ '.jpg">').appendTo('#images'); 
    });
});