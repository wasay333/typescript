//for future use for typesaving in variable
var str = "wasay";
//  for tuple
// if i add like more than two item in array it will give error
var arr = [1, "string"];
//if i add like first string than number it will also give error
var arr2 = [true, 12, "rawas"];
var variable;
variable = 'asr';
var var2;
var2 = 12;
var2 = "wasay";
//so there is a type use in function so if use it will never return any resulting that the code forward to that will also not work
function abcd() {
    while (true) {
        console.log("infinte run");
    }
}
abcd();
console.log("hey");
//  so in void let see if a function is returning 
// something and like number and string it
//  is good but the problem is that if it is
//   not returning,it is just console logging
//    like below
function consol() {
    console.log("wasay");
}
// for function we should return the exact datatype that it is returning
function wasay() {
    return 1;
}
//enums
var human;
(function (human) {
    human["name"] = "wasay";
    human[human["age"] = 23] = "age";
})(human || (human = {}));
console.log(human.name);
