var array  =[10,20,30,40,70,80,90,20,10];
var x = array.includes(20);
var y = array.includes(100);
console.log(x,y);

var a = array.indexOf(30);
var b = array.indexOf(60);
console.log(a,b); //for b it will return -1 as it is not present

var s = array.lastIndexOf(20);
var t = array.lastIndexOf(60); //for t it will return -1 as it is not present
console.log(s,t); 