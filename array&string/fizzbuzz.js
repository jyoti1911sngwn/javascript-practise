function fizbuz(num){
     if(num%3 ===0 && num%5 === 0){
       return "fizz-buzz"
    }
    else if(num%3 === 0){
       return "fizz"
    }
    else if(num%5 ===0 ){
       return "buzz"
    }
    else{
       return "none"
    }
}

const fizbuzcon= fizbuz(6)
console.log(fizbuzcon)