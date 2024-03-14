var string = "Hello! How are you ? ";
var count =0;

var result = findemptyspace(string);
console.log("The number of space in a given string are : "+result);

function findemptyspace(str){
    for(i=0;i<str.length;i++){
    if (str[i]==" "){
        count ++;
    }
}
return count;
}