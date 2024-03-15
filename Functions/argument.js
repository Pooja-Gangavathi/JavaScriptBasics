function fn(x,y){
    var x;
    var y;
    var add=x+y;
    var sub=x-y;
    var mul=x*y;
    var div=x/y;
    console.log(add);
    console.log(sub);
    console.log(mul);
    console.log(div);

}
fn(100,50);
fn(10); //Return NaN which means it is undefined value
//fn(30,9);
//fn(-30,100);