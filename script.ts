// in interface 
interface Human{
    name:string;
}

interface Human{
    age:number;
}
// so both things are merge together in memory
function abcd(human:Human){
    human.name.concat()
    human.age.toExponential(2)
}
// so basically all these are merge 
// next thing is extend

interface Food {
    name:string,
    price:number
}
interface MethaaFood extends Food {
verySweet:boolean
}
interface khattaFood extends Food {
    verySour:boolean
    }
function getMethaFood(mithai:MethaaFood){
    mithai.name
    mithai.price
    mithai.verySweet
}
function getKhattaFood(khattai:khattaFood){
  khattai.name
  khattai.price
  khattai.verySour
}
// so basically methafood has one and other it get from food which is being extended