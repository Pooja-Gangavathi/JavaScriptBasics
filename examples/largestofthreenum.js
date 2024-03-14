const n1=90;
const n2=39;
const n3=99;

function findlargest(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }
    else if(num2>=num1 && num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}

const largestnumber= findlargest(n1,n2,n3);
console.log("The largest of "+n1+" , "+n2+" and "+n3+"is "+largestnumber);
