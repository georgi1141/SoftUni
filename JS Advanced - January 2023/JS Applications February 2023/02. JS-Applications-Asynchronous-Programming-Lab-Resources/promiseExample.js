const promise = new Promise (function(resolve,reject){
    if(Math.random()>0.5){
        resolve('just married')
    }else{
        reject('sorry,it did not happen')
    }
})

promise.then((result)=>{
    console.log(result);
})

promise.catch((result)=>{
    console.log(result);
})