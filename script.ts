 //union type
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
abcd(12)
abcd("12")
// so now both will work in that case
// any other type will not work like this
// abcd(true)

// intersection type so we want both or trwice type like this
type City = {
    name:string,
    population:number
}
type Planet = {
    presnt:boolean
}

type CityInPlanet = City & Planet;

let value: CityInPlanet = {
    name:"wasay",
    population:1224242,
    presnt:true
}

// so that in this case we can provide all data of give type and we can intersection defferent types togather
