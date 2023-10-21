string1=prompt("enter your name");
alert("welcome "+string1);
confirm("is it really you "+string1+"?");

var day=new Date();
var hour=day.getHours();
var min=day.getMinutes();
var sec=day.getSeconds();

var date=(hour+":"+min+":"+sec);
alert("the time is "+date);
