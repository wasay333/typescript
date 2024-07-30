//for future use for typesaving in variable

let str:string="wasay"; 

//  for tuple
// if i add like more than two item in array it will give error
let arr: [number, string] = [1, "string"];
//if i add like first string than number it will also give error

let arr2: [boolean, number, string] = [true, 12, "rawas"];
let variable:string;
variable = 'asr'

let var2:unknown;

var2 = 12;
var2 ="wasay"
//so there is a type use in function so if use it will never return any resulting that the code forward to that will also not work
function abcd():never {
while(true){
    console.log("infinte run")
}
}
abcd();
console.log("hey")

//  so in void let see if a function is returning 
// something and like number and string it
//  is good but the problem is that if it is
//   not returning,it is just console logging
//    like below
function consol():void{
    console.log("wasay")
}
// for function we should return the exact datatype that it is returning
function wasay():number{
return 1;
}

//enums
enum human {
    name="wasay",
    age=23
}
  console.log(human.name)

