function addItUp(a,b){
    // only numbers
    let sum = a+b
    return sum
}

function nextNum(i){
    //only numbers
    let next = 1+i
    return next
}

function calcAge(x){
    //only numbers allowed
    let daysOnEarth = 365 * x
    return daysOnEarth
}

function circuitPower(v,i){
    let power = v*i
    return power
}

function giveMeSomething(something){
    //input (parameter) should be a string
    let result = '"something ' +something + '"'
    return result
}

function concatName(fname,lname){
    let result = '"' + lname + ", " + fname + '"'
    return result
}

function remainder(x,y){
    return x%y
}

function returnNegative(x){
    return -1 * x
}

function intTostring(x){
    let result = String(x)
    return result
}

function stringToInt(x){ 
    let result = Number(x)
    return result
}
  
function carsNeeded(x){
    //where x is number of travellers
    let cars = x/5
    if (x%5==0){
        return cars + " cars needed"
    }
    else {
        
        return Math.ceil(cars) + " cars needed"
    }
}
console.log(carsNeeded(11));

function numberArgs(){
    //console.log(arguments.length)
    return arguments.length
}
console.log(numberArgs(1,2,3,4,5,6,6));

function wordcharWord(a,b){
    //a for character
    //b for string
    let result = '"' + a + " " + b + '"'
    return result
}

function stutter(a){
    let result ="eerrm... eerm...." + a + "?"
}

function typeOf(x){
    return typeof (x)
}
typeOf(23)

function squareRoot(x){ 
    return Math.sqrt(x)
}
