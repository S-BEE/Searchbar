function isLeapYear(currentYear){
    if (currentYear % 4 === 0){
        return true
    }
    return false
}
isLeapYear(1998)
isLeapYear(2000)


function isSquareOrRectangle(length,breadth){
    if (length === breadth){
        let result = "This is a square"
        return result
    }
    else{
        let result = "This is a rectangle"
        return result
    }
    return
}
isSquareOrRectangle(3,6)
isSquareOrRectangle(5,5)


function discount(costOfPurchase){
    if (costOfPurchase >= 1000){
        // 0.1 represnts 10% 
        let deduction = 0.1 * costOfPurchase
        let result = costOfPurchase - deduction
        return "The total cost is " + costOfPurchase 
    }
    else{
        let result = "The total cost is " + costOfPurchase 
        return result
    }
    return
}


function profitableGamble(prob,prize,pay){

    if (prob*prize>pay){
        return true
    }
    else{
        return false
    }
    return
}
profitableGamble(0.2, 50, 9)


function makesTen(a,b){
    if (a === 10 || b === 10 ||a + b ===10){
        return true
    }
    else{
        return false
    }
    return 
}
makesTen(9,10)
makesTen(1,9)
makesTen(5,7)

function comp(x,y){
    let xlen = x.length
    let ylen = y.length
    if (xlen === ylen){
        return true
    }
    else{
        return false
    }
    return
}
comp("amrah","adeoye")


function acceptIntoMovie(age,isSupervised){
    
    
    if (age >= 15 || isSupervised === true){
        return true
    }
    else{
        return false
    }
    return
}
acceptIntoMovie(4,true)


function oddOrEven(x){
    let stringlength = x.length
    let evenTest = stringlength % 2
    if(evenTest === 0){
        return true
    }
    else{
        return false
    }
    return
}
oddOrEven("apples")


function islastCharacterN(x){
    let lastCharacter = x.slice(-1)
    if (lastCharacter === "n"){
        return true
    }
    else{
        return false
    }
    return
}
islastCharacterN("aiden")


function isPlural(x){
    let lastCharacter = x[x.length-1]
    if (lastCharacter === "s"){
        return true
    }
    else{
        return false
    }
    return
}
isPlural("magic")


function fifth(){

    if (arguments.length < 5){
        
        let  result = "Not enough arguments"
        return result
    }
    else{
        let result = typeof(arguments[4])
        return result
    }
    return
}
fifth("a",2,3,"five",true)


function journeyDistance(costofJourney){
    let distanceAfter1km = (costofJourney - 3)/2
    let totalDistance = 1 + distanceAfter1km
    return totalDistance
}
journeyDistance(9)


function days(month,year){
    
    let noOfDays = new Date (year,month,0).getDate()
    return noOfDays
}
days(2,2000)


function newWord(x){
    let result = x.slice(1)
    return result
}
newWord("cherry")
newWord("hello")


function firstLast(x){
    let first = x.slice(0,1)
    let last = x.slice(-1)
    return first +last
}
firstLast("ajoke")


function wumbo(x){

    return x.replace("M","W")
}
wumbo("I LOVE MAKING CHALLENGES")


function reverse(x){
    let result = x.split("").reverse().join("")
    return result
}
reverse("hello")


function checkEnding(first,second){
    let firstEnd = first.slice(-2)
    let secondEnd = second.slice(-2)
    if (firstEnd === secondEnd){
        return true
    }
    else{
        return false
    }
    return
}
checkEnding("mapple","leg")


function getMiddle(x){
    let midSize = x.length 
    let middle = midSize/2
    // if the words length is even, return the middle two characters
    if (midSize % 2 === 0){
        
        let result = x.slice(middle-1,middle+1)
        return result
    }
    //if the words length is odd, return the middle character
    else{
        let result = x.slice(middle,middle+1)
        return result
    }
    return
} 
getMiddle("apples")


function moodToday(x){
    if(x !== null){
        let result = "Today, I am feeling " + x
        return result
    }
    else{
        let result = "Today, i am feeling neutral"
        return result
    }
    return
}


function match(x,y){
    let str1 = x.toUpperCase
    let str2 = y.toUpperCase
    if (str1 == str2){
        return true
    }
    else{
        return false
    }
    return
}
match("ade","aDe")


function createID(firstName,lastName){
    let fchar = firstName.slice(0,1)
    let lChars = lastName.slice(0,3)
    let result = fchar + lChars
    return result
}
createID("shukurah","Balogun")


function google(x){
    let y = x.replace(/\s/g, "+")
    return y
}
google("   abcdefg   ")


function  reverseCapitalize(x){
    let result = x.split("").reverse().join("").toUpperCase()
    return result
}
reverseCapitalize("input")


function isValidNumber(x){
    if(isNaN(x)){
        return "Variable is not a valid number"
    }
    else{
        return "Variable is a valid number"
    }
    return
}
isValidNumber(8)


function isEmailValid(x){
    if (x.includes("@")){
        return true
    }
    else{
        return false
    }
    return
}
isEmailValid("bshuk@gmail.com")


function truncate_string(x,y){
    let result = x.slice(0,y)
    return result
}
truncate_string("Robin",4)


function repeat_string(x,y){
    let result =  x.repeat(y)
    return result
}
repeat_string("hello ",4)


function helloWorld(x){
    if (x % 3 === 0){
        let result = "Hello"
        return result
    }
    else if (x % 5 === 0){
        let result = "World"
        return result
    }
    //for argument to be divisible by both 3 & 5, it is divisible by 15
    else if (x % 15 === 0){.//;.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        let result = "Hello World"
        return result
    }
    return
}
helloWorld(30)

function profitableGamble(prob, prize, pay){
    if(prob*prize > pay){
        return true
    }
    return false
}
profitableGamble(0.2, 50, 9)
profitableGamble(0.9, 1, 2)
profitableGamble(0.9, 3, 2)