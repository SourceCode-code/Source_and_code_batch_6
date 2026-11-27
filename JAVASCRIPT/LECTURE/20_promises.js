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
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

// NOTE -> FOR CONSUMPTION OF PROMISE WE NEED 2 BLOCKS 
// THEN() --> SUCCESS CONDITION
// CATCH() --> FAILURE CONDITION



// HOW TO CONVERT YOUR CODE INTO SYNC USING PROMISIE


//ZOMato 

// opening the app 
// selecting restuarnt 
// adding required dish to cart
// select adddress 
// make the payment 
// delivery 



function Opening_ZOmato(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(` The App is opened now for ${user}`)
            reslove(user)
        }, 6000);
    })
}



function Select_resturant(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`  ${user}select a new restrant`)
            reslove(user)
        }, 8000);
    })
}


function adding_dish(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(` ${user} has added his dish`)
            reslove(user)
        }, 2000);
    })
}


function payment(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`  ${user} payment is successfull`)
            reslove(user)
        }, 10000);
    })
}




/**
 * callback hell excuetion
Account_creation("sid",()=>{
    verify_account("sid",()=>{
        suggest_content("sid",()=>{
            uplaod_content("sid",()=>{
               console.log("program has eneded") 
            })
        })
    })
})

 */



// for promise exceution 


Opening_ZOmato("XYZ").then(Select_resturant).then(adding_dish).then(payment).then((message) => {
    console.log("the order has been dlivered")
})


// ATM WITHDARWAL OF 50000

// INSERT THE CARD 
// ENETER PIN 
// ATM SEND A REQUEST TO BANK SERVER 
//BANK VERIFES BANK
//ATM ETHIER GIVES THE CASH OR SHOWNS AN ERROR 


let withdrawalMoney = new Promise((reslove, reject) => {

    let balance = 100000
    let amount = 500000


    setTimeout(() => {
        if (balance >= amount) {
            reslove(`${amount} has been withdarwn `)
        }
        else {
            reject("INSUFFIENT BALANCE")
        }
    },5000)

})


withdrawalMoney.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

/**
 * promise() -> this will excute a single promsie
 * promsie.all() --> this will excute mutliple promsie at same tine but will only give when everything is success
 * promsie.race() --> it will excute mutilple promise at same time but give the output of who ever finshes first 
 * promise.allSettled() -->it will excute mutilple promise at same time and will tell me what happend at every step 
 * 
 */

