// //access the constructor of its parent
class Animals{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(move, speed){
        console.log(`this can ${move} by ${speed}`)
    }
}

class Rabbit extends Animals{
    constructor(name, age, runtype){
        super(name, age);
        this.runtype = runtype
    }
    run(){
        super.move(this.runtype, this.age)
    }
}

class Fish extends Animals{
    constructor(name, age, runtype){
        super(name, age);
        this.runtype = runtype
    }
    swim(){
        super.move(this.runtype, this.age)
    }
}

class Hawk extends Animals{
    constructor(name, age, runtype){
        super(name, age);
        this.runtype = runtype
    }
    fly(){
        super.move(this.runtype, this.age)
    }
}

let rab = new Rabbit("Rabbit", 12, "run");
let fi = new Fish("Fish", 12, "swim");
let haw = new Hawk("Hawk", 12, "fly");

fi.swim()
rab.run();
haw.fly();

