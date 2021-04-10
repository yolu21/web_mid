$(function(){
    $("#coursetable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

var millisec=24*60*60*1000;//一天幾毫秒
var topicCount=topic.length;
for(var x=0;x<topicCount;x++){
    $("#coursetable").append("<tr>");
    $("#coursetable").append(`<td>${x+1}</td>`);
    $("#coursetable").append(`<td>${(new Date(startDate.getTime()+7*x*millisec)).toLocaleDateString().slice(5)}</td>`);
    $("#coursetable").append(`<td>${topic[x]}</td>`);
    $("#coursetable").append("</tr>");
}

});