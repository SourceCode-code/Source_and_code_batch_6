// SYNC AND ASYNC 

// JS is sync by nature its sync  ->  the code gets excuted line by line 

console.log("hello")
console.log("world")
console.log("lets start ")
console.log("with our journey ")

// ASYNC -> code the which easy to complie get exceuted first 

// what ever comes first get excueted frist 

// js is sync lanague but due heacvy function and timeout and wait while handling bulid a big application or tool 
// becomes async 



/**
 * POSTING A IMAGE ON INSTAGRAM 
 * 
 * //1 CREATION OF USER ACCOUNT 
 * //2 VERIFY YOUR DETAILS 
 * //3 START THE USE OR SUGGEST CONTENT 
 * // 4 UPLAOD A PICTURE OR START THE ACTIVTY 
 * 
 * 
 */

// //1 CREATION OF USER ACCOUNT
// function Account_creation(user) {
//     setTimeout(() => {
//         console.log(`the ${user} has been created `)
//     }, 3000)
// }

// //2 VERIFY YOUR DETAILS 
// function verify_account(user ) {
//     setTimeout(() => {
//         console.log(`the ${user} account  has been verifed `)
//     }, 1000)
// }
// //3 START THE USE OR SUGGEST CONTENT 
// function suggest_content(user, ) {
//     setTimeout(() => {
//         console.log(`the ${user}  preferd content has been shown`)
//     }, 500)
// }

// // 4 UPLAOD A PICTURE OR START THE ACTIVTY 
// function uplaod_content(user) {
//     setTimeout(() => {
//         console.log(`the ${user}  has started to publish`)
//     }, 2000)
// }

// Account_creation("sid")
// verify_account("sid")
// suggest_content("sid")
// uplaod_content("sid")



// AS AUTOMATION THERE 2 TOOLS -> PLAYWRIGHT AND CYPRESS  THIS BOTH THE TOOLS ARE ASYNC IN NATURE 

// WE NEED TO UNDERSTAND THIS SYNC AND ASYNC -> 

// THE CONVERSAION FORM  ASYNC ---> SYNC 

// 1 CALLBACK HELL (OLD WAY DEAL )
// 2 PROMISES ( THIS USED TO BULID CYPRESS)
// 3 ASYNC AND AWAIT (THIS USED PLAYWRIGHT BULID )

// CALLBACK HELL --> IN THIS METHOD  THE ASYNC CODE IS PLACES IN CALLBACK FUNCTION DUE TO WHICH IT BECOME VALID 
// PARAMETER FOR SECOND AND WAIT AND THAT IS HOW THIS LOOP OR CODE CONVERTS FORM ASYNC TO SYNC   

//1 CREATION OF USER ACCOUNT
function Account_creation(user, callback) {
    setTimeout(() => {
        console.log(`the ${user} has been created `)
        callback()
    }, 3000)
}

//2 VERIFY YOUR DETAILS 
function verify_account(user, callback) {
    setTimeout(() => {
        console.log(`the ${user} account  has been verifed `)
        callback()
    }, 1000)
}
//3 START THE USE OR SUGGEST CONTENT 
function suggest_content(user, callback) {
    setTimeout(() => {
        console.log(`the ${user}  preferd content has been shown`)
        callback()
    }, 500)
}

// 4 UPLAOD A PICTURE OR START THE ACTIVTY 
function uplaod_content(user, callback) {
    setTimeout(() => {
        console.log(`the ${user}  has started to publish`)
        callback()
    }, 2000)
}




Account_creation("sid",()=>{
    verify_account("sid",()=>{
        suggest_content("sid",()=>{
            uplaod_content("sid",()=>{
               console.log("program has eneded") 
            })
        })
    })
})


/**
 * the sid has been created 
the sid account  has been verifed 
the sid  preferd content has been shown
the sid  has started to publish
program has eneded
 */