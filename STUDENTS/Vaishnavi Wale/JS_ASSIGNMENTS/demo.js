let amount = 1234.56789

let roundAmount = Math.round(amount *100)/100

console.log(roundAmount)

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 === 0.3)

//A customer buys 3 items with these prices : 199.99, 449.50, 89.75
//        a) calculate the total bill
//        b) apply a random discount between 5% and 15% on the total (use randomBetween logic)
//        c) calculate the final amount after discount
//        d) print the receipt in EXACTLY this format (use toFixed) :
//           Total      : Rs. 739.24
//           Discount   : 10.0%
//           Final Bill : Rs. 665.32
//        HINT -> discount = total * (randomPercent / 100). Round at the END, not in between.

// ANSWER:

