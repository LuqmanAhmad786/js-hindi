let example1 = 33
let example2 = "34"
let example3 = "33sdfj"
let example4 = null
let example5 = undefined
let example6 = true
let example7 = "waseem"
let example8 = 0

// now convert from number to string
let numToString = String(example1);
// now convert form string to number
let stringToNumber = Number(example2);
// check conversion of example of 3
let notKNown1 = String(example3);
let notKnown2 = Number(example3) // when we try to convert example 3 into number it return NaN 
// now try to convert example7 into number because it is a string
let bigStringToNumber = Number(example7)
// convert example8 into boolean 
let numberToBoolean = Boolean(example8)






// print in console all records
console.table([
    numToString,
    stringToNumber,
    notKNown1,
    example3,
    notKnown2,
    example4,
    example5,
    example6,
    bigStringToNumber,
    numberToBoolean
])