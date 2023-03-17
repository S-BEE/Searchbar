// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*
function squareDigits(num){
  
  let numToStringArray = num.toString().split('')
  let ans =[]
  numToStringArray.forEach(function (num,i){
    ans = Math.pow(num,2)
  })
  return Number.parseInt(ans.join(''));
}

/*
https://www.codewars.com/kata/57238766214e4b04b8000011/train/javascript
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces.
 A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, 
 if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine 
will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken 
into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string
 with the change separated by single spaces & no commas. The values of the string will be descending.
*/

function changeMe(moneyIn){
  // Write your function here
switch(moneyIn) {
  case "£5":
    "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
    break;
  case "£2":
    "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p"
    break;
  case "£1":
    "20p 20p 20p 20p 20p"
    break;
  case "50p":
    "20p 20p 10p"
    break;
  case "20p":
    "10p 10p"
    break;
  default:
    moneyIn;
}
  return moneyIn
}

/*
https://leetcode.com/problems/sort-the-people/
You are given an array of strings names, and an array heights that consists of distinct positive integers. 
Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights.


*/
function alias(arr){
  return arr[0].charAt(0).toUpperCase() + arr[1].charAt(0).toUpperCase()
  
}
alias(['shukurah','Balogun'])

