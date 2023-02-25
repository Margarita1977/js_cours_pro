let num = 266219;
let res = 1;
num.toString().split('').forEach(function(el) {
    res *= el;
});
console.log(res); 


let tri = res**3;
console.log(tri);

console.log(String(tri).slice(0, 2));



