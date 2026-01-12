Array.prototype.last = function() {
    console.log(this)
    console.log(this[this.length-1])
    return this[this.length-1]
};


 const arr = [1, 2, 3,8];
 console.log(arr.last()); // 3
