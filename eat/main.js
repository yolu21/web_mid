window.onload=function(){
    //document.write("Hello js");
}
$(function(){
    $("input").on("click",function(){
       //alert("Hi~");
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