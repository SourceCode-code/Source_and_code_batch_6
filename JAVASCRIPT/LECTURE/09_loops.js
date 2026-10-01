//WHY TO LEARN LOOPS IN JS
// a progarm of software is always created to perfom action
// AS a automative -->
// we automate testcases ->

// Manuual ->
// as automatic we genearly automate the testcase ( used program to perform that repative action )

//LOOPS -> THIS ARE THE SYNTAX OR PROGARM USED TO PERFORM REPEATIVE ACTION

//NOTE : - IN INTERVEIW THE LOGICALLY THAT IS GIVEN WILL BE NOT SLOVED UNTILL YOU USED LOOPS

// IN THE JS THERE 2 TYPES ->

// FOR  -> FINITE ( ENDING IS GIVEN OR THERE IS ENDPOINT) 95
//WHILE -> INFINTIE ( OR THE ENDPOINT IS NOT KNOWN ) 5




//FOR --> IT IS USED WHEN WE KNOW THE END POINTS / WHEN THE OUTPUT IS DEFINATIVE OR FINTIE 

/**
 * SYTNAX 
 * 
 * for(initaliziation ;condition for loop for to end;post-increment/decrement){
 * //code 
 * 
 * }
 */


// write a program to print numbers for 0 - 10

//without loop 
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(10)


for (let i = 0; i <= 10; i++) {
    console.log(i)
} //0 1 2 3 4 5 6 7 8 9 10

// this is also called as forwarding looping (incremental)



// Write loop to print numbers form 10 - 0 

for (let i = 10; i >= 0; i--) {
    console.log(i)
} //10 9 8 7 6 5 4 3 2 1 0

// This is called as decremenetal looping 


//LOOP ON STRING 
// print each character on a new line 
let name_str = " hello i am learning javascript and i am currently focusing on loops"

for (let i = 0; i < name_str.length; i++) {
    console.log(name_str[i])
}



// slove the following program to print the output 

/**

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20

 */
let num_1 = 2
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${num_1 * i}`)
}


// find the number of words in the string with out using any method 

let count_str = "hello my name is siddhant and i am a mentor for automation"

let word_count = 1

for (let i = 0; i < count_str.length; i++) {
    if (count_str[i] === " ") {
       word_count++
    }
    // console.log(word_count)
}
console.log(word_count)


for (let i = 0; i < count_str.length; i++) {
    if (count_str[i] === " ") {
       word_count++
    }
    // console.log(word_count)
}
console.log(word_count)


