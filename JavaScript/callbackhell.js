// function test1(){//make pizza
//     setTimeout(()=>{
//        console.log("task1");
//     },4000)
// }
// function test2()//call me
// { setTimeout(()=>{
//        console.log("task2");
//     },2000)

// }
// async will skip the task with more time -here we are making call before making pizza
// test1();
// test2();
function test1(cb){
    setTimeout(()=>{
       console.log("task1");
       cb();
    },4000)
}
function test2(cb)
{ setTimeout(()=>{
       console.log("task2");
       cb();
    },2000)
}
function test3(cb){
    setTimeout(()=>{
        console.log("task3");
        cb();
    },200)
}
function test4(){
    setTimeout(()=>{
        console.log("task4");
    },100)
}
test1(()=>{
    test2(()=>
    {
        test3(()=>{
            test4();
        });
    });
})
// we remove cb from last test to prevent error 