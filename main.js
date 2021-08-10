var currentQiuz;
$("#id0").click(function(){
    
    $("#link").attr("href","index2.html")
    
})
$("#id1").click(function(){

    $("#link").attr("href","index3.html")
    currentQiuz=$("#link").attr("href")

})
 console.log(currentQiuz)
$("#id2").click(function(){
    
    $("#link").attr("href","index4.html")
    currentQiuz=$("#link").attr("href")
})

$(".result").click(function(){
    var inputs1 = $("input")
    var count = 0
    var span=$("span")
    var array_foo=["Chealsea FC",5,6,13,"Real Madrid"]
    for (var i = 0 ;i<inputs1.length;i++){
        if( inputs1[i].checked ){
            for (var j=0;j<array_foo.length;j++){
                console.log(span[i].innerText)
                if( span[i].innerText==array_foo[j] ){
                    count=count+1
                }
            }     
        }
    }
    $("#bg").hide()
    var div=$(" <div><h1> You got  "+count +" out of 5! </h1> </div> ")
    $("body").append(div)
    var button=$("<a><button>Try again</button></a>")
    var button2=$("<a><button >Back Home</button></a>")
 
 
button.attr("href","index2.html")
button2.attr("href","index1.html")
div.append(button,button2)     

})

 $(".result2").click(function(){
    var inputs = $("input")
    var count1 = 0
    var span=$("span")
    var array_celeb=["Knowles-Carter","Johnny Depp","Pennsylvania","Katie Holmes","Barney & Friends"]
    for (var i = 0 ;i<inputs.length;i++){
        if( inputs[i].checked ){
            for (var j=0;j<array_celeb.length;j++){
                if( span[i].innerText ===array_celeb[j] ){
                    count1+=1
                                    }
            }     
        }
    }
    $(".parent_div").hide()
    var div=$(" <div><h1> You got  "+count1 +" out of 5! </h1> </div> ")
    $("body").append(div)
    
 var button=$("<a><button>Try again</button></a>")
 var button2=$("<a><button >Back Home</button></a>")
 
 
 button.attr("href","index3.html")
 
button2.attr("href","index1.html")
    
    div.append(button,button2)      

 })    
  $(".result3").click(function(){
    var count2 = 0                   
    var inputs = $("input")
    var span=$("span")
    var array_kpop=[4,"August, 2007",7,"January","BTS"] 
    for (var i = 0 ;i<inputs.length;i++){
        if( inputs[i].checked ){
            for (var j=0;j<array_kpop.length;j++){
                if( span[i].innerText ===array_kpop[j] ){
                    count2++
                }
            }     
        }
    }


    $(".parent_div1").hide()
var div=$(" <div><h1> You got  "+count2 +" out of 5! </h1> </div> ")
    $("body").append(div)
 var button=$("<a><button>Try again</button></a>")
 var button2=$("<a><button >Back Home</button></a>")
 
 
 button.attr("href","index4.html")
 
button2.attr("href","index1.html")
    
    div.append(button,button2)
  })


// function makeStopwatch() {
        
//         var watch={}
//         watch.time = 0
//         watch.hold
//         watch.start=start
//         watch.stop=stop 
//         watch.reset=reset 
//         return watch
// }


// var start =function () {
//     var x = this
//             console.log(this)
//             this.hold = setInterval(function () {
//             x.time++;
                
//                 console.log('Elapsed time: ' + x.time + 's.');
//             }, 1000);
//         }


//         var stop= function () {
//             clearInterval(this.hold);
//         }

//     var reset= function () {
//             var x = this
//             clearInterval(this.hold);

//             x.time = 0;
//         }