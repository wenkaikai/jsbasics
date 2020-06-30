console.log("start")
new Promise(resoleve=>{
    console.log("setp 1");
    setTimeout(()=>{
        resoleve(100);
    },1000);
})
.then(value=>{
    return new Promise(resolve=>{
        console.log("step 1-1");
        setTimeout(()=>{
            resolve(110)
        },1000);
    })
})
.then(value=>{
    console.log("step 1-2");
    return value
})
.then(value=>{
    console.log("step 1-3");
    return value
})
.then(value=>{
    console.log(value);
    console.log("step 2")
})
.then(value=>{
    console.log(value);
    console.log("step 3")
})

/**
 * 一个promise 可以有多个then 
 * 
 */
