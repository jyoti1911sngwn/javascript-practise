class person1 {
    show(){
        console.log("function to inherit")
    }
}

class person2 extends person1{

}
class person3 extends person1{

}
let p2 = new person2();
let p3 = new person3();
p2.show()
p3.show()