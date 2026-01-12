//An object is considered an instance of a class if it has access to that class’s methods,
//  i.e., the class’s prototype exists in the object’s prototype chain.
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || typeof obj !== 'object' && typeof obj !== 'function'){
        return false;
    }
    let proto = Object.getPrototypeOf(obj)
    while(proto!==null){
        if(proto === classFunction.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false
};

checkIfInstanceOf(new Date(), Date); // true
checkIfInstanceOf([], Object); // true
checkIfInstanceOf([], Array); // true
checkIfInstanceOf({}, Array); // false
checkIfInstanceOf(function(){}, Function); // true