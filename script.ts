// class object oriented paradigm

let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")

class Airpod {
    color="white";
    picture="image/airpod"
    playMusic(){
        console.log("Playing music")
    }
}
class airconditioner {
    color="white";
    ton= .75;
    temp = 22;

    increaseTemp(){
        this.temp++
        console.log(this.temp)
    }
    decreaseTemp(){
        this.temp--
        console.log(this.temp)
    }
    turningOn(name:string){
console.log(`turned on ${name} `)
    }
}
let ac1 =new airconditioner()
let ac2 =new airconditioner()

ac1.turningOn("ac1")
if (button1) {
    button1.addEventListener('click',()=> ac1.increaseTemp())
}
if (button2) {
    button2.addEventListener('click',()=> ac1.decreaseTemp())
}

 class food{
    price =1233;
 }
//extend in class
 class Mithai extends food {
    name="kaju katli"
 }
 const mitha = new Mithai()

 mitha.name
 mitha.price
 //it will show like interface

 //now we will study contructor
 // in basic understanding it is a structure or skeleton method for other like ebelow

 class pendrive {
    public company:string;
constructor(name:string){
this.company= name
}
 }

 let p1 = new pendrive("hp")

 
class Earphones{
    name:string;
    price:number
constructor(name:string, price:number){
    this.name = name;
    this.price = price;
}
}
let e1 = new Earphones("wasay", 12)
//so here is a short cut that we can put these variable in its contructor
//like this
class Earphones2{
    
constructor(public name:string,public price:number){
    this.name = name;
    this.price = price;
}
}
let e2 = new Earphones2("wasay", 12889)

//access modifier
// so for these i have left it public mean that i can change its value again mean that i have not written anything which symbolize that is will remain public
class Earphones3{
    name:string;
    price:number
constructor(name:string, price:number){
    this.name = name;
    this.price = price;
}
}
let e3 = new Earphones2("wasay", 12)
// public access modifier
// private matlab sirf class main hi use hoga wo element bahaar use nahi hoga

// now protected

class User {
    protected balance = 1200
}
class Admin extends User{
   private isAdmin = true;
   getBalance(){
    this.balance
   } 
}

let a1 = new Admin();
//ab protected bahaar nahi use ho sakta lekin jo class use extend kar rahi hai wahan use ho jaye ga
//private extended class may b use nahi hoga

