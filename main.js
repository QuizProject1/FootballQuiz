
$("#id0").click(function(){
    
    $("#link").attr("href","index2.html")
})
$("#id1").click(function(){

    $("#link").attr("href","index3.html")
})
$("#id2").click(function(){
    
    $("#link").attr("href","index4.html")
})



var array_foo=["Chealsea FC",5,6,13,"Real Madrid"]
var array_celeb=["Knowles-Carter", "Johnny Depp","Pennsylvania", "Katie Holmes", "Barney & Friends"]
var array_kpop=[4,"August, 2007",7,"January","BTS"]
$(".result").click(function(){
var first=$(".Q1 input")
var innertext=$(".Q1 span")
for (var i = 0; i<first.length;i++){
    if(first[i].checked && innertext[i].innerText==="Chealsea FC"){
        console.log("good")

    }
}
})
$(".result").click(function(){
var first=$(".Q1 input")
var innertext=$(".Q1 span")
for (var i = 0; i<first.length;i++){
    if(first[i].checked && innertext[i].innerText==="Chealsea FC"){
        console.log("good")

    }
}
})