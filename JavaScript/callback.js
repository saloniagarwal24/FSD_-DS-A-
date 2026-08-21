// make pizza then call me 
// call depend on prv task-callback
//  function sum(a,b){
//         return a+b;
//         }
//         function sumwithmessage(clbk,msg){
//            const result =clbk(20,30);
//            const fresult="Hi"+msg+"your score is "+result;
//            console.log(fresult);
//         }
//         sumwithmessage(sum,"SALONI");
// function pass()
// {
//     return 234;
// }
// function checkpass(clbk,name,password)
// {
//     if(clbk()==password)
//         console.log(name+"your pass is correct");
//     else
//          console.log(name+"your pass is not correct");
// }
// checkpass(pass,"saloni",234);
// CALLBACK HELL
// Callback hell in JavaScript refers to a situation where multiple nested callback functions are passed into one another, making the code deeply indented, unreadable, and hard to maintain. Often referred to as the "Pyramid of Doom" or "Hadouken code," it typically occurs when dealing with sequential asynchronous operations that depend on the results of previous tasks
t1(function(res1) {
    t2(res1, function(res2) {
        t3(res2, function(res3) {
            console.log("Final result is: " + res3);
        });
    });
});
t1(function(3));