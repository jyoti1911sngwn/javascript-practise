
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); 
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Jyoti", sayGoodbye);


function pro(name){
    return new Promise((res, req)=>{
        console.log("Hello, " + name);
        res()
    })
}

pro("jyoti").then(()=>console.log("Goodbye!"))


async function asyncawait(){
await pro("jyoti")
console.log("Goodbye!")
}
asyncawait()

