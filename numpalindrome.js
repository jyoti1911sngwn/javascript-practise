function ispalindrom(x){
let str = x.toString()
let strt = 0
let end = str.length-1
while(strt<end){
if(str[strt] !== str[end]){
    return false
}
strt++;
end--;
}
return true;
}

const bool = ispalindrom(1256221)
console.log(bool)