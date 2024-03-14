var a = 11;
var b = 66;
var c = 77;

var result = largestnumber(a,b,c);
console.log("The largest of 3 numbers is "+result);
 
function largestnumber(n1,n2, n3){
    if (n1>=n2 && n1>=n3){
        return n1;
    }
    else if(n2>=n1 && n2>=n3){
        return n2;
    }
    else {
        return n3;
    }

}
