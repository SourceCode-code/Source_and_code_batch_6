console.log("============================")
console.log("assignment 8")
console.log("============================")
//Q1 --> multiplication table -> take the number in a variable ( starter -> let tableNum = 7 )
//        PART A -> print the table from 1 -> 10   ( format -> "7 x 1 = 7" )
//        PART B -> print the SAME table in REVERSE ( 10 -> 1 ) with a decrement loop
//        TEST with -> 2 , 7 , 0 , 13  ( the label must ALWAYS print the variable value )
//        HINT -> never type the number inside the template literal -> write ${tableNum}
//                ( theory notes -> section 4.1 )
//
//        expected ( tableNum = 7 ) -> PART A first 3 lines
//        7 x 1 = 7
//        7 x 2 = 14
//        7 x 3 = 21
//        PART B first line -> 7 x 10 = 70

//part A
let tableNum = 2 // TEST with -> 2 , 0 , 13

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`)
} 
console.log("============================")
console.log("part B")

//OUTPUT 
/*
7 x 1 = 7       2 X 1 = 
7 x 2 = 14      2 X 2 =
7 x 3 = 21      2 X 3 =
7 x 4 = 28      2 X 4 =
7 x 5 = 35      2 X 5 =
7 x 6 = 42      2 X 6 =
7 x 7 = 49      2 X 7 =
7 x 8 = 56      2 X 8 =
7 x 9 = 63      2 X 9 = 
7 x 10 = 70     2 X 10 =
*/
//part B 
for (let i = 10; i >= 1; i--) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`)
} 
//OUTPUT 
/*
7 x 10 = 70
7 x 9 = 63
7 x 8 = 56
7 x 7 = 49
7 x 6 = 42
7 x 5 = 35
7 x 4 = 28
7 x 3 = 21
7 x 2 = 14
7 x 1 = 7
*/
console.log("============================")


//Q2 --> FIZZBUZZ ( classic interview question ) ->
//        loop from 1 -> 30 and print ONE value per round :
//        - "Fizz"     when the number is divisible by 3
//        - "Buzz"     when the number is divisible by 5
//        - "FizzBuzz" when the number is divisible by BOTH 3 and 5
//        - the number itself for every other round
//        HINTS -> divisible check -> n % 3 === 0 ( modulo -> revision )
//                 write the BOTH condition FIRST , because 15 is also divisible by 3
//        expected ( first 16 rounds ) -> 1 2 Fizz 4 Buzz 7 Fizz 8 9 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16

for (n = 1; n <= 30; n ++) {
    if (n % 3 === 0  && n % 5 === 0){
        console.log("FizzBuzz")
    } else if (n % 3 === 0 ){
        console.log("Fizz")
    } else if (n % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(n)
    }
}

console.log("============================")
 
//Q3 --> FACTORIAL ->  n! = 1 x 2 x 3 x ... x n      ( starter -> let factNum = 10 )
//        print -> "10! = 3628800"
//        HINT -> the running product starts at 1 ( NOT 0 -> anything * 0 is always 0 )
//                 the counter runs from 1 -> factNum
//        TEST with -> 10 ( 3628800 ) , 5 ( 120 ) , 0 ( 1 )
//        THINK -> 0! is DEFINED as 1 -> does your loop print 1 for 0 WITHOUT any extra if ? why ?

let factNum = 10 // TEST with -> 5 , 0

let fact = 1 

for (i = 1; i<= factNum; i++){
    fact = fact * i;
}

console.log(`${factNum}! = ${fact}`);
//OUTPUT : 
//10! = 3628800
//5! = 120
//0! = 1 
console.log("============================")

//Q4 --> FACTORS -> print every factor of the number ( starter -> let factN = 60 )
//        one factor per line , in increasing order
//        HINT -> f is a factor of n when n % f === 0 -> loop f from 1 -> n
//        BONUS -> also print the SUM of all the factors
//        TEST with -> 60 ( factors sum = 168 ) , 13 ( prime -> only 1 and 13 -> sum = 14 )
//                      28 ( a PERFECT number -> sum of the factors WITHOUT 28 itself = 28 -> why ? )

let factN = 60 // TEST with -> 13 , 28

let sum = 0;

for (let f = 1; f <= factN; f++) {
    if (factN % f === 0) {
        console.log(f);
        sum = sum + f;
    }
}
console.log(`Sum of factors = ${sum}`);
//OUTPUT 
/*
1
2
3
4
5
6
10
12
15
20
30
60
Sum of factors = 168
*/
console.log("============================")

//Q5 --> starter -> let info_str = "JavaScript"
//        PART A -> print every character WITH its index , format ->  0 -> J   ( one per line )
//        PART B -> count UPPERCASE letters and LOWERCASE letters SEPARATELY
//                   ( ignore spaces / digits / symbols -> count only letters )
//        HINTS -> info_str[i] is the character at position i , the loop runs i < info_str.length
//                 letter test  -> ch.toUpperCase() !== ch.toLowerCase()   ( for " " both stay equal )
//                 upper letter -> the character is still equal to its own toUpperCase()
//        expected ( PART B ) -> uppercase = 2 , lowercase = 8   ( J and S are the big ones )

let info_str = "JavaScript"
