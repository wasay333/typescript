 //union and intersection type
  let variable: string | null;
  variable = null;
  variable ="wasay"

//   so for get all the methods of numbers and string together we have to give this thing a try

function abcd(variable1 : number | string){
    if (typeof variable1 === "number"){
        variable1.toFixed(2)
    }
    else if(typeof variable1 === "string"){
variable1.toUpperCase()
    }
}
