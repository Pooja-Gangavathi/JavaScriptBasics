var num=88;
var result=findnumber(num);

function findnumber(number){
    if (number%2 == 0){
        return "Even number";
    }
    else {
        return "Odd number";
    }
}
console.log("The number is : "+result);