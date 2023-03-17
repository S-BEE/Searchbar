
function FortuneTeller(x,y,z,n){
    // why pay a fortune teller when your future lies on your palm
    let result = "You will be an " + x + " in " + y + ", and married to " 
    + z + " with " + n + " kids."
                ;
    return result;
}

function Dog_age(x){
    // x represents puppy's age
    let realAge = 7*x;
    let result = "Your doggie is " + realAge +  " years old in dog years!";
    return  result;
}

function calculateSupply(age, amountPerDay){
    let lifeTime = 70 - age
    let lifeTimeSupply = amountPerDay*365*lifeTime
    let result = "You will need " + lifeTimeSupply+ " to last you until the ripe old age of 70";
    return result
}

function calcircumference(radius){
    let circumference = 2*3.14*radius
    let result = "The circumference is " + circumference ;
    return result
}

function calcArea(radius){
    let area = 3.14*radius*radius
    let result = "The area is " + area ;
    return result
}

function celsiusToFarenheit(celsius){
    let F = 32 + (celsius*9/5)
    let result = celsius + "C is " + F + "F";
    return result
}

function farenheitToCelsius(farenheit){
    let C = (farenheit-32)*5/9
    let result = farenheit + "F is " + C + "C";
    return result
}


console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()

