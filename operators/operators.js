
// Logical operators
var x = 10;
var y = 5;
var z = 11;

var result = x<y && x<z;// false && true = false
console.log(result);

var result1 = x>y || y<z; //true || true  =true
console.log(result1);

var result2 = (x == y) != (z == x);//false != false = false
var result3 = (x == y) == (z == x); //false == false = true
console.log(result2);
console.log(result3);