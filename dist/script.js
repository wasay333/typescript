"use strict";
// class object oriented paradigm
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
class Airpod {
    constructor() {
        this.color = "white";
        this.picture = "image/airpod";
    }
    playMusic() {
        console.log("Playing music");
    }
}
class airconditioner {
    constructor() {
        this.color = "white";
        this.ton = .75;
        this.temp = 22;
    }
    increaseTemp() {
        this.temp++;
        console.log(this.temp);
    }
    decreaseTemp() {
        this.temp--;
        console.log(this.temp);
    }
    turningOn(name) {
        console.log(`turned on ${name} `);
    }
}
let ac1 = new airconditioner();
let ac2 = new airconditioner();
ac1.turningOn("ac1");
if (button1) {
    button1.addEventListener('click', () => ac1.increaseTemp());
}
if (button2) {
    button2.addEventListener('click', () => ac1.decreaseTemp());
}
class food {
    constructor() {
        this.price = 1233;
    }
}
//extend in class
class Mithai extends food {
    constructor() {
        super(...arguments);
        this.name = "kaju katli";
    }
}
const mitha = new Mithai();
mitha.name;
mitha.price;
//it will show like interface
//now we will study contructor
// in basic understanding it is a structure or skeleton method for other like ebelow
class pendrive {
    constructor(name) {
        this.company = name;
    }
}
let p1 = new pendrive("hp");
class Earphones {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let e1 = new Earphones("wasay", 12);
//so here is a short cut that we can put these variable in its contructor
//like this
class Earphones2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
let e2 = new Earphones2("wasay", 12889);
