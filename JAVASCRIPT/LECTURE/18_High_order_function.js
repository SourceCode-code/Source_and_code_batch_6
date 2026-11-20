//HIGH ORDER FUNCTION --> HIGH ORDER FUNCTION ARE THE FUNCTION WHICH TAKE OTHER FUNCTION AS PARAMETER OR RETURN TYPE IS CALLED AS HIGH ORDER FUNCTION 

// 1 CALLBACK FUNCTION  ->A function where the  input parameter is another function is called call-back function

// example


//first normal function 


function add(n){
return n**2
}

console.log(add(2))


//callback or second function 

function get_cube(callback,n){
    return callback(n)*n
}

console.log(get_cube(add,2))


//callback hell() -->

// 2 RETURNING FUNCTION -> A function whose output is a function it is called retruning function 

const first = (n)=>{
    const second = (m)=>{
        const thrid=(l)=>{
            return n+m+l
        }
        return thrid
    }
    return second
}


console.log(first(1)(2)(3))



// note this two high order function above are bit outdated 

// setInterval() -to take the output of the function at certain interval 
// setTimeout() -to take dealy of showing the output by given amount of time 



//setInterval() -> the gobal method which takes callback function as a parameter and duration as parameter 

// synatx   setInterval(callback(),timeinterval)


setInterval(function hello(){
    console.log("hello")
},2000)

setInterval(function welcome(){
    console.log("hello welcome to js")
},1000)

// setTimeout -> this method is used to trigger a function by given amount of delay 

//setTimeout(callback,delaytime)


setTimeout(function hello(){
    console.log("hello")
},5000)


// usecase in real world 

// creation a script where a function is trigger every 3 sec sayiong hello welcome and after 10 sec it will stop 


let interval =setInterval(()=>{
    console.log("hello Welcome!")
},3000)

setTimeout(()=>{
    clearInterval(interval) // this is used to stop set intevral 
    console.log("lets learn !")
},10000)


// sync 
// async 



// 