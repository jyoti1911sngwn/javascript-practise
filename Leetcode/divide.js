


var divide = function(dividend, divisor) {
    let res = dividend/divisor
    if(divisor<0){
        if(res>2147483648){
            return 2147483647 
        }
        else if(res<-2147483648){
            return 2147483648
        }
        return Math.ceil(res)  
    }
    else{
        return Math.floor(res)
    }
};

console.log(divide(10,3)); // 3
console.log(divide(7,-3)); // -2