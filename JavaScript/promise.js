function f1(){
    return new Promise((resolve,reject)=>
    {
       setTimeout(()=>
       {
        console.log("hi");
        resolve();
       },4000)
    })
}
// if resolve -then 
// if error then catch
function f2(){
    return new Promise((resolve,reject)=>
    {
     setTimeout(()=>{
        console.log("abes college");
        resolve();
      },2000)
    })
}
// suppose there many function then f1 then f2 then f3 then. it will make a long series to avoid this we will use async await
// f1().then(f2).catch((err)=>
// {
// console.log("error",err);
// });
async function f3()
{
    try{
    await f1();
    await f2();
    }
    catch(err){
console.log("error",err);
    }
}
f3();