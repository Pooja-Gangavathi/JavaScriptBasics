var number = 0;
//var number = prompt("Enter the number : ");
var result = checknumber(number);

function checknumber(num){
    if (num>0){
        return "Positive";
    }
    else if (num<0){
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log("The number "+number+" is "+ result);


