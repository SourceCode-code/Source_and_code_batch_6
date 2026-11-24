//HUMAN CONDITION --> 

// FULLIL 
// REJECTED
// PENDING STATE

// ON BASIS OF THESE HUMAN PROMISES ARE BULIT 

// WHAT IS PROMISE PROMISES ARE USED TO CONVERT YOUR ASYNC CODE TO SYNC CODE 
// THERE 3 STATES OF PROMISES 

// FULLIL  -- (RESLOVE) -> SUCCESSFULL
// REJECTED --> (REJECT) --> FAILURE 
// PENDING STATE --> WAITING 


// NOTE :- SHOW ME AN EXAMPLE OF A PROMISE 
// THEY WILL SHOW A DEMO PROMISE AND WILL ASK TO FIX THE ERROR 

let Pro = new Promise((reslove, reject) => {
    let success = true

    if (success === true) {
        reslove("the promsie is successfull")
    }
    else {
        reject("the promise is failed")
    }
}).then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})

// NOTE -> FOR CONSUMPTION OF PROMISE WE NEED 2 BLOCKS 
// THEN() --> SUCCESS CONDITION
// CATCH() --> FAILURE CONDITION
